import React from "react";
import TableComponent from "./components/TableComponent";
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
    <div>
      <TableComponent columns={columns} data={data} />
    </div>
  );
};

export default App;
