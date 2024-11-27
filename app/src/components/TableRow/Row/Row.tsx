import React from "react";
import "./Row.scss";

type RowProps = {
    avatarUrl: string;
    fullName: string;
    age: number;
    location: string;
    email: string;
    onDetailsClick: () => void;
};

function Row(props: RowProps) {
    return (
        <button className="row"
            onClick={props.onDetailsClick}>
            <div className="cell-1">
                <div className="avatar-wrapper">
                    <img src={props.avatarUrl} alt="User avatar" />
                </div>
                {props.fullName}
            </div>
            <div className="cell-2">
                {props.email}
            </div>
            <div className="cell-3">
                {props.age}
            </div>
            <div className="cell-4">
                {props.location}
            </div>
        </button>
    );
}

export default Row;