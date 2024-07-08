import React, { useState } from "react";
import TableComponent from "../components/TableComponent";
import CardComponent from "../components/CardComponent";

const Home = ({ columns, data, onRemoveRecord }) => {
  const [pageIndex, setPageIndex] = React.useState(0);
  const [pageSize, setPageSize] = React.useState(10);
  const [view, setView] = useState(true);
  const totalPages = Math.ceil(data.length / pageSize);
  const startIndex = pageIndex * pageSize;
  const endIndex = Math.min(startIndex + pageSize, data.length);
  const paginatedData = data.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber) => {
    setPageIndex(pageNumber);
  };

  const renderPagination = () => {
    const buttons = [];

    // Show ellipsis on the left if not on the first page
    if (pageIndex > 1) {
      buttons.push(renderPaginationButton(0, "1"));
      if (pageIndex > 2) {
        buttons.push(
          <span key="leftEllipsis" className="mx-2">
            ...
          </span>
        );
      }
    }

    // Show current page and nearby pages
    for (
      let i = Math.max(0, pageIndex - 1);
      i <= Math.min(totalPages - 1, pageIndex + 1);
      i++
    ) {
      buttons.push(renderPaginationButton(i, `${i + 1}`));
    }

    // Show ellipsis on the right if not on the last page
    if (pageIndex < totalPages - 2) {
      if (pageIndex < totalPages - 3) {
        buttons.push(
          <span key="rightEllipsis" className="mx-2">
            ...
          </span>
        );
      }
      buttons.push(renderPaginationButton(totalPages - 1, `${totalPages}`));
    }

    return buttons;
  };

  const renderPaginationButton = (index, label) => (
    <button
      key={index}
      onClick={() => handlePageChange(index)}
      className={`p-2 border rounded ${
        index === pageIndex ? "bg-gray-300" : ""
      }`}
    >
      {label}
    </button>
  );
  const toggleView = () => {
    setView(!view);
  };

  return (
    <div className="container mx-auto">
      <div className="flex items-center space-x-3">
        <span className="text-sm font-medium text-black">Table View</span>
        <label className="flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only"
            value={view}
            onChange={toggleView}
          />
          <div className="relative h-6 w-11 flex items-center bg-gray-200 rounded-full cursor-pointer dark:bg-gray-700">
            <div className="h-5 w-5 rounded-full bg-white border-2 border-gray-300 transform transition-transform peer-checked:translate-x-full dark:border-gray-600"></div>
          </div>
        </label>
        <span className="text-sm font-medium text-black">Card View</span>
      </div>
      {view === true ? (
        <TableComponent
          columns={columns}
          data={paginatedData}
          onRemoveRecord={onRemoveRecord}
        />
      ) : (
        <CardComponent columns={columns} data={paginatedData} />
      )}

      <div className="pagination flex justify-between items-center my-3 mx-auto">
        <div>
          Showing <span className="text-slate-500">{startIndex + 1}</span> -
          <span className="text-slate-500">{endIndex}</span> out of{" "}
          <span className="text-slate-500">{data.length} </span>records
        </div>
        <div className="flex items-center gap-3">
          <div className="flex gap-1">
            <button
              onClick={() => handlePageChange(0)}
              disabled={pageIndex === 0}
              className="p-2 border rounded disabled:opacity-50"
            >
              {"<<"}
            </button>
            <button
              onClick={() => handlePageChange(pageIndex - 1)}
              disabled={pageIndex === 0}
              className="p-2 border rounded disabled:opacity-50"
            >
              {"<"}
            </button>
            {renderPagination()}
            <button
              onClick={() => handlePageChange(pageIndex + 1)}
              disabled={pageIndex === totalPages - 1}
              className="p-2 border rounded disabled:opacity-50"
            >
              {">"}
            </button>
            <button
              onClick={() => handlePageChange(totalPages - 1)}
              disabled={pageIndex === totalPages - 1}
              className="p-2 border rounded disabled:opacity-50"
            >
              {">>"}
            </button>
          </div>
          <div>
            <select
              value={pageSize}
              onChange={(e) => {
                setPageSize(Number(e.target.value));
                setPageIndex(0);
              }}
              className="border p-2 rounded"
            >
              {[5, 10, 20, 30, 40, 50].map((size) => (
                <option key={size} value={size}>
                  Show {size}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
