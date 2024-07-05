import React from "react";
// const handleRemove
const TableComponent = ({ columns, data }) => {
  return (
    <table className="w-full border-collapse text-sm">
      <thead>
        <tr className="bg-gray-200">
          {columns.map((column) => (
            <th
              key={column.id}
              className="border border-gray-300 px-4 py-2 text-left"
            >
              {column.Header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr
            key={row.id}
            className={index % 2 === 0 ? "bg-white" : "bg-gray-100"}
          >
            {columns.map((column) => (
              <td
                key={`${row.id}-${column.id}`}
                className="border border-gray-300 px-4 py-2"
              >
                {row[column.accessor]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableComponent;
