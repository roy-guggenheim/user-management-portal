import React from "react";
import { UserInfoProps } from "../UserInfo/UserInfo";
import "./Row.scss";

type UserRowProps = {
    avatar: string;
} & UserInfoProps;

function UserRow(props: UserRowProps) {
    return (
        <button className="user-row">
            <div className="cell-1">
                <div className="avatar-wrapper">
                    <img src={props.avatar} alt="User avatar" />
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
                {props.city}
            </div>
        </button>
    );
}

export default UserRow;