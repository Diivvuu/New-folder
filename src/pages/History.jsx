import React from "react";

const History = ({ history }) => {
  console.log("History component received:", history);

  return (
    <div>
      <h2>History</h2>
      <ul>
        {history.map((item) => (
          <li key={item.id}>
            {item.title} - {item.module}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default History;
