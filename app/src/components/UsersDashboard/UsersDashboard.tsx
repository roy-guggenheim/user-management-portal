import React from "react";
import { ViewState } from "../ToggleView/ToggleViewState";
import { User } from "../../api/usersApi.ts";
import CreatorCard from "../CreatorCard/CreatorCard.tsx";
import Row from "../TableRow/Row/Row.tsx";
import TableHeadRow from "../TableRow/TableHeadRow/TableHeadRow.tsx";
import "./UsersDashboard.scss";

type UsersDashboardProps = {
    viewState: ViewState;
    users: User[];
    onUserClick: (user: User) => void;
}

function UsersDashboard(props: UsersDashboardProps) {
    switch (props.viewState) {
        case 'grid':
            return <GridUsers users={props.users} onClick={props.onUserClick} />;
        case 'list':
            return <ListUsers users={props.users} onClick={props.onUserClick} />;
    }
}

type UsersViewProps = {
    users: User[];
    onClick: (user: User) => void;
}

function GridUsers(props: UsersViewProps) {
    return (
        <div className="grid">
            {props.users.map(user => (
                <CreatorCard
                    key={user.id}
                    backgroundImageUrl={user.backgroundImageUrl}
                    avatarUrl={user.avatarUrl}
                    title={user.fullName}
                    subtitlte={`${user.age} | ${user.city}`}
                    email={user.email}
                    onDetailsClick={() => props.onClick(user)}
                />
            ))}
        </div>
    );
}

function ListUsers(props: UsersViewProps) {
    return (
        <div className="table-container">
            <table className="list">
                <thead>
                    <TableHeadRow />
                </thead>
                <tbody>
                    {props.users.map(user => (
                        <Row
                            key={user.id}
                            avatarUrl={user.avatarUrl}
                            fullName={user.fullName}
                            age={user.age}
                            location={user.city}
                            email={user.email}
                            onClick={() => props.onClick(user)} />
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default UsersDashboard;