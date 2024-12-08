import React, { useEffect, useState } from "react";
import SearchField from "../SearchField/SearchField";
import ToggleView from '../ToggleView/ToggleView.tsx';
import { ViewState } from "../ToggleView/ToggleViewState";
import { User } from "../../api/usersApi.ts";
import UsersDashboard from "../UsersDashboard/UsersDashboard.tsx";
import { useSearchPage } from "./useSearchPage.ts";
import "./SearchPage.scss";

type SearchPageProps = {
    users: User[];
    searchValue: string;
    setSearchValue: (value: string) => void;
    currentView: ViewState;
    setCurrentView: (view: ViewState) => void;
    onUserClick: (user: User) => void;
}

function SearchPage(props: SearchPageProps) {
    const { filteredUsers } = useSearchPage({
        users: props.users,
        searchValue: props.searchValue,
    });

    return (
        <div className="content">
            <div className="sticky-container">
                <div className="page-header">
                    <h1>Search users</h1>
                    <SearchField
                        placeholder={"Placeholder"}
                        value={props.searchValue}
                        onChange={props.setSearchValue}
                    />
                </div>
                <div className="results-and-pagination">
                    <p>{filteredUsers.length} results</p>
                    <ToggleView currentView={props.currentView} onToggle={props.setCurrentView} />
                </div>
            </div>
            <div className="users-dashboard">
                <UsersDashboard
                    viewState={props.currentView}
                    users={filteredUsers}
                    onUserClick={props.onUserClick}
                />
            </div>
        </div>
    );
}

export default SearchPage;