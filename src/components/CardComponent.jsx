import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faDatabase,
  faBug,
  faTools,
} from "@fortawesome/free-solid-svg-icons"; // Import icons from Font Awesome

const CardComponent = ({ columns, data }) => {
  const moduleIcons = {
    frontend: faCode,
    backend: faTools,
    database: faDatabase,
    testing: faBug,
    // Add more modules and icons as needed
  };
  return (
    <div className="h-1/2 overflow-y-auto p-2 ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {data.map((item) => {
          const { title, module, requestedBy, requestedOn, dueTime, status } =
            item;

          return (
            <div
              key={item.id}
              className="rounded-lg p-2 bg-slate-100 shadow-xl"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 ">
                  <FontAwesomeIcon
                    style={{ color: "#3182ce" }}
                    icon={moduleIcons[module]}
                    size="lg"
                  />{" "}
                </div>
                <div className="text-xs font-medium">{title}</div>
              </div>
              <div className="flex justify-between items-center mb-2">
                <div className="text-xs text-gray-600">
                  <strong>Requested On: </strong>
                  {requestedOn}
                </div>
                <div className="text-xs text-gray-600">
                  <strong>Requested By: </strong>
                  {requestedBy}
                </div>
              </div>
              <div className="text-xs text-gray-600 mb-2">
                <strong>Due Time: </strong>
                <span className="bg-green-500 rounded-full px-2 py-1 text-white">
                  {dueTime}
                </span>
              </div>
              <div className="text-xs text-gray-600">
                <strong>Status:</strong> {status}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CardComponent;
