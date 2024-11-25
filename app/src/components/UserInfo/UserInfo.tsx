import React from "react";
import LTButton from "../LTButton/LTButton";
import "./UserInfo.scss";

type UserInfoProps = {
    fullName: string;
    age: number;
    city: string;
    email: string;
    onDetailsClick: () => void;
};

function UserInfo(props: UserInfoProps) {
    return (
        <div className="user-info">
            <div className="user-info-title">
                <h2>{props.fullName}</h2>
                <p>{props.age} | {props.city}</p>
            </div>
            <div className="user-info-email">
                <p>{props.email}</p>
            </div>
            <LTButton
                onClick={props.onDetailsClick}
                label="Details"
            />
        </div>
    );
}

export default UserInfo;
export type { UserInfoProps };