import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TopIssues = () => {
  const [issues, setIssues] = useState({});

  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/top-issues`)
      .then(res => setIssues(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="p-4 border rounded shadow bg-white">
      <h2 className="text-xl font-semibold mb-3">Top 10 Most Reported Issues</h2>
      <ul>
        {Object.entries(issues).map(([key, value]) => (
          <li key={key} className="mb-1">• {key} – {value} reports</li>
        ))}
      </ul>
    </div>
  );
};

export default TopIssues;
