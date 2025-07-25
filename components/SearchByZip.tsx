'use client';

import React, { useState } from 'react';
import axios from 'axios';

type Issue = {
  ticket_id: string;
  issue_type_reduced: string;
  street_address: string;
  city: string;
  actual_completed_days: number;
};

const SearchByZip: React.FC = () => {
  const [zip, setZip] = useState('');
  const [issues, setIssues] = useState<Issue[]>([]);
  const [error, setError] = useState('');

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setIssues([]);
    setError('');

    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/issues/${zip}`);
      setIssues(res.data);
    } catch (err: any) {
      setError('Could not fetch issues. Please check the ZIP code.');
    }
  };

  return (
    <div className="p-4 mt-12 border rounded shadow bg-white max-w-3xl mx-auto">
      <h2 className="text-xl font-semibold mb-4">🔍 Search 311 Issues by ZIP Code</h2>

      <form onSubmit={handleSearch} className="flex items-center gap-4 mb-6">
        <input
          type="text"
          placeholder="Enter ZIP code"
          value={zip}
          onChange={(e) => setZip(e.target.value)}
          className="border px-4 py-2 rounded w-full"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      {error && <p className="text-red-600">{error}</p>}

      {issues.length > 0 && (
        <div>
          <h3 className="text-lg font-medium mb-2">Found {issues.length} recent issues</h3>
          <ul className="space-y-2 max-h-80 overflow-y-auto">
            {issues.map((issue) => (
              <li key={issue.ticket_id} className="border-b pb-2">
                <p><strong>{issue.issue_type_reduced}</strong></p>
                <p>{issue.street_address}, {issue.city}</p>
                <p><em>Resolved in {issue.actual_completed_days} days</em></p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchByZip;
