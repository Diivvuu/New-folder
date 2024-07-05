import React from "react";

const CardComponent = ({ data }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {data.map((item) => (
        <div key={item.id} className="bg-white shadow-md rounded-lg p-4">
          <h3 className="text-lg font-semibold">{item.title}</h3>
          <p className="text-gray-600">{item.description}</p>
          <div className="mt-4 flex justify-end">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
              View Details
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardComponent;
