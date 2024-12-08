import { useState, useEffect } from 'react';
import { User } from "../../api/usersApi";

type UseSearchPageParams = {
    users: User[];
    searchValue: string;
}

export function useSearchPage(params: UseSearchPageParams) {
    const [filteredUsers, setFilteredUsers] = useState<User[]>(params.users);

    useEffect(() => {
        const filteredUsers = params.users.filter(user =>
            user.fullName.toLowerCase().includes(params.searchValue) ||
            user.city.toLowerCase().includes(params.searchValue) ||
            user.email.toLowerCase().includes(params.searchValue) ||
            String(user.age).includes(params.searchValue)
        );
        setFilteredUsers(filteredUsers);
    }, [params.searchValue, params.users]);

    return { filteredUsers };
};