import React from "react";
import "./Row.scss";

function HeadRow() {
    return (
        <div className="head-row">
            <div className="cell-1">Name</div>
            <div className="cell-2">Email</div>
            <div className="cell-3">Age</div>
            <div className="cell-4">Location</div>
        </div>
    );
}

export default HeadRow;