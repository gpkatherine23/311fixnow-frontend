'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PredictForm: React.FC = () => {
  const [zipCodes, setZipCodes] = useState<string[]>([]);
  const [issueTypes, setIssueTypes] = useState<string[]>([]);
  const [selectedZip, setSelectedZip] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [prediction, setPrediction] = useState<number | null>(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  // Fetch available ZIP codes and issue types
  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/help`)
      .then(res => {
        setZipCodes(res.data.valid_zip_codes || []);
        setIssueTypes(res.data.valid_issue_types || []);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to fetch metadata', err);
        setError('⚠️ Failed to load ZIP codes and issue types');
        setLoading(false);
      });
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setPrediction(null);
    setError('');

    try {
      const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/predict`, {
        zip_code: selectedZip,
        issue_type_reduced: selectedType
      });
      setPrediction(res.data.predicted_days);
    } catch (err: any) {
      setError(err.response?.data?.error || 'Prediction failed');
    }
  };

  return (
    <div className="p-4 mt-12 border rounded shadow bg-white max-w-xl mx-auto">
      <h2 className="text-xl font-semibold mb-4">🧠 Predict Resolution Time</h2>

      {loading ? (
        <p className="text-gray-600">Loading ZIP codes and issue types...</p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-medium mb-1">ZIP Code</label>
            <select
              value={selectedZip}
              onChange={(e) => setSelectedZip(e.target.value)}
              className="w-full border px-3 py-2 rounded"
              required
            >
              <option value="">-- Select ZIP --</option>
              {(zipCodes || []).map((zip) => (
                <option key={zip} value={zip}>{zip}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block font-medium mb-1">Issue Type</label>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full border px-3 py-2 rounded"
              required
            >
              <option value="">-- Select Issue --</option>
              {(issueTypes || []).map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
          >
            Predict
          </button>
        </form>
      )}

      {prediction !== null && (
        <p className="mt-4 text-green-600">
          ⏱️ Estimated resolution time: <strong>{prediction} days</strong>
        </p>
      )}

      {error && (
        <p className="mt-4 text-red-600">{error}</p>
      )}
    </div>
  );
};

export default PredictForm;
