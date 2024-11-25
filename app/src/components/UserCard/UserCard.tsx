import React from "react";
import UserInfo, { UserInfoProps } from "../UserInfo/UserInfo";
import "./UserCard.scss";

type UserCardProps = {
    bgImage: string;
    avatar: string;
} & UserInfoProps;

function UserCard(props: UserCardProps) {
    return (
        <div className="user-card">
            <img className="user-bg-image" src={props.bgImage} alt="User background image" />
            <div className="user-avatar-wrapper">
                <img src={props.avatar} alt="User avatar" />
            </div>
            < UserInfo
                fullName={props.fullName}
                age={props.age}
                city={props.city}
                email={props.email}
                onDetailsClick={props.onDetailsClick}
            />
        </div>
    );
}

export default UserCard;