import React, { useState } from "react";
import TableComponent from "../components/TableComponent";
import CardComponent from "../components/CardComponent";

const Home = ({ columns, data }) => {
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
    const maxButtons = 5; // Maximum buttons to show including ellipses

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
      <label class="flex justify-end items-center cursor-pointer">
        <span className="me-3 text-sm font-medium text-black">Table View</span>
        <input
          type="checkbox"
          value={view}
          onChange={toggleView}
          class="sr-only peer"
        />
        <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        <span class="ms-3 text-sm font-medium text-black ">Card view</span>
      </label>
      {view === true ? (
        <TableComponent columns={columns} data={paginatedData} />
      ) : (
        <CardComponent data={paginatedData} />
      )}

      <div className="pagination flex justify-between items-center my-3 mx-auto">
        <div>
          Showing {startIndex + 1} to {endIndex} of {data.length} records
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
