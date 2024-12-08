import React from "react";
import "./Row.scss";

type RowProps = {
    avatarUrl: string;
    fullName: string;
    age: number;
    location: string;
    email: string;
    onClick: () => void;
};

function Row(props: RowProps) {
    return (
        <tr className="row"
            onClick={props.onClick}>
            <td className="cell-1">
                <div className="avatar-wrapper">
                    <img src={props.avatarUrl} alt="User avatar" />
                </div>
                {props.fullName}
            </td>
            <td className="cell-2">
                {props.email}
            </td>
            <td className="cell-3">
                {props.age}
            </td>
            <td className="cell-4">
                {props.location}
            </td>
        </tr>
    );
}

export default Row;