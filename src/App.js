import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import History from "./pages/History";
import { users } from "./tableData";
import { tableHeaders } from "./tableHeaders";

const App = () => {
  const [data, setData] = useState(users);
  const [history, setHistory] = useState([]);

  const columns = React.useMemo(
    () =>
      tableHeaders.map((header) => ({
        Header: header.label,
        accessor: header.key,
      })),
    []
  );
  //app.js -> home.jsx -> tableComponent.jsx
  const handleRemoveRecord = (id) => {
    const removedItem = data.find((item) => item.id === id);
    if (removedItem) {
      setData((prevData) => prevData.filter((item) => item.id !== id));
      // setHistory((History) => [...prevHistory, removedItem]);
      setHistory((history) => [...history, removedItem]);
    }
  };

  return (
    <Router>
      <div className="p-4">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Home
                columns={columns}
                data={data}
                onRemoveRecord={handleRemoveRecord}
              />
            }
          />
          <Route path="/history" element={<History history={history} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
