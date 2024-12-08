import React from "react";
import "./TableHeadRow.scss";

function TableHeadRow() {
    return (
        <tr className="head-row">
            <th className="cell-1">Name</th>
            <th className="cell-2">Email</th>
            <th className="cell-3">Age</th>
            <th className="cell-4">Location</th>
        </tr>
    );
}

export default TableHeadRow;