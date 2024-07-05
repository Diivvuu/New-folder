import React from "react";
import Home from "./pages/Home";
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
    <div className="p-4">
      <Home columns={columns} data={data} />
    </div>
  );
};

export default App;
