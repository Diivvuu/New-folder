import React from "react";
import { returnPaginationRange } from "../utils/appUtils";

export default function Pagination({
  totalPage,
  page,
  limit,
  siblings,
  onPageChange,
}) {
  let array = returnPaginationRange(totalPage, page, limit, siblings);
  return (
    <ul className="pagination pagination-md justify-content-end">
      <li className="page-item">
        <span onClick={() => onPageChange("&laquo;")} className="page-link">
          &laquo;
        </span>
      </li>
      <li className="page-item">
        <span onClick={() => onPageChange("&lt;")} className="page-link">
          &lt;
        </span>
      </li>
      {array.map((value) => {
        // active
        if (value === page) {
          return (
            <li key={value} className="page-item active">
              <span onClick={() => onPageChange(value)} className="page-link">
                {value}
              </span>
            </li>
          );
        } else {
          return (
            <li key={value} className="page-item">
              <span onClick={() => onPageChange(value)} className="page-link">
                {value}
              </span>
            </li>
          );
        }
      })}
      <li className="page-item">
        <span onClick={() => onPageChange("&gt;")} className="page-link">
          &gt;
        </span>
      </li>
      <li className="page-item">
        <span onClick={() => onPageChange(" &raquo;")} className="page-link">
          &raquo;
        </span>
      </li>
    </ul>
  );
}
