import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import History from "./pages/History";
import { users } from "./tableData";
import { tableHeaders } from "./tableHeaders";

const App = () => {
  const columns = React.useMemo(
    () =>
      tableHeaders.map((header) => ({
        Header: header.label,
        accessor: header.key,
      })),
    []
  );

  const data = React.useMemo(() => users, []);

  return (
    <Router>
      <div className="p-4">
        <Routes>
          <Route
            exact
            path="/"
            element={<Home columns={columns} data={data} />}
          />
          <Route path="/history" element={<History />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
