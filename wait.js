import React from 'react';

// Shared Tailwind CSS classes
const inputClasses = 'w-full border border-zinc-300 dark:border-zinc-600 rounded p-1';
const textClasses = 'text-sm font-medium text-zinc-700 dark:text-zinc-300';
const buttonClasses = 'px-2 py-1 text-sm text-zinc-600 dark:text-zinc-400';
const selectClasses = 'w-full border border-zinc-300 dark:border-zinc-600 rounded p-1';

const TableComponent = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white dark:bg-zinc-800">
          <thead className="bg-zinc-100 dark:bg-zinc-700">
            <tr>
              <th className={`px-4 py-2 ${textClasses}`}>Select</th>
              <th className={`px-4 py-2 ${textClasses}`}>Request ID</th>
              <th className={`px-4 py-2 ${textClasses}`}>Title</th>
              <th className={`px-4 py-2 ${textClasses}`}>Module</th>
              <th className={`px-4 py-2 ${textClasses}`}>Requested by</th>
              <th className={`px-4 py-2 ${textClasses}`}>Requested on</th>
              <th className={`px-4 py-2 ${textClasses}`}>Due Time</th>
              <th className={`px-4 py-2 ${textClasses}`}>Status</th>
              <th className={`px-4 py-2 ${textClasses}`}>Actions</th>
            </tr>
            <tr>
              <th className="px-4 py-2">
                <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
              </th>
              <th className="px-4 py-2">
                <input type="text" placeholder="Search" className={inputClasses} />
              </th>
              <th className="px-4 py-2">
                <input type="text" placeholder="Search" className={inputClasses} />
              </th>
              <th className="px-4 py-2">
                <select className={selectClasses}>
                  <option>Select</option>
                </select>
              </th>
              <th className="px-4 py-2">
                <input type="text" placeholder="Search" className={inputClasses} />
              </th>
              <th className="px-4 py-2"></th>
              <th className="px-4 py-2"></th>
              <th className="px-4 py-2"></th>
              <th className="px-4 py-2"></th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-zinc-200 dark:border-zinc-700">
              <td className="px-4 py-2">
                <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
              </td>
              <td className="px-4 py-2">9</td>
              <td className="px-4 py-2">Workflow Designer...D021</td>
              <td className="px-4 py-2">Workflow designer</td>
              <td className="px-4 py-2">Muthu</td>
              <td className="px-4 py-2">10/04/2024</td>
              <td className="px-4 py-2">1 days</td>
              <td className="px-4 py-2">
                <span className="bg-blue-500 text-white rounded-full px-2 py-1 text-xs">Pending</span>
              </td>
              <td className="px-4 py-2">
                <button className="bg-green-500 text-white rounded-full px-2 py-1 text-xs">✔</button>
                <button className="bg-red-500 text-white rounded-full px-2 py-1 text-xs">✖</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex items-center justify-between mt-4">
        <div className="text-sm text-zinc-600 dark:text-zinc-400">
          Showing 1 - 5 out of 127 result
        </div>
        <div className="flex items-center">
          <span className="mr-2 text-sm text-zinc-600 dark:text-zinc-400">Records per page:</span>
          <select className={selectClasses}>
            <option>5</option>
            <option>10</option>
            <option>25</option>
          </select>
        </div>
        <div className="flex items-center">
          <button className={buttonClasses}>❮❮</button>
          <button className={buttonClasses}>1</button>
          <button className={`${buttonClasses} bg-blue-500 text-white rounded`}>2</button>
          <button className={buttonClasses}>3</button>
          <button className={buttonClasses}>4</button>
          <button className={buttonClasses}>5</button>
          <button className={buttonClasses}>26</button>
          <button className={buttonClasses}>❯❯</button>
        </div>
      </div>
    </div>
  );
};

export default TableComponent;
