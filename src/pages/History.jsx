import React from "react";

const History = ({ historyRecords }) => {
  return (
    <div>
      <h2>History Component</h2>
      <ul>
        {historyRecords.map((record) => (
          <li key={record.id}>
            {/* Display history records */}
            {record.title} - {record.action}{" "}
            {/* Example: Display title and action */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default History;
