const dataUrl: Record<string, string> = {
    users: 'https://dummyjson.com/users',
    avatar: 'https://i.pravatar.cc/150?img=',
    backgroundImage: 'https://picsum.photos/seed/',
    overview: 'https://baconipsum.com/api/?type=all-meat&paras=1&format=text',
    posts: 'https://dummyjson.com/posts',
    comments: 'https://dummyjson.com/comments'
} as const;

export type User = {
    id: number;
    fullName: string;
    age: number;
    gender: string;
    city: string;
    stateCode: string;
    country: string;
    email: string;
    avatarUrl: string;
    backgroundImageUrl: string;
    overview: string;
};

/**
 * Fetches a list of users
 * @param startIndex Starting index
 * @param length Number of users to fetch
 * @returns List of users
 */
export async function fetchUsers(startIndex: number, length: number): Promise<User[]> {
    try {
        const [usersResponse, overviewText] = await Promise.all([
            fetch(`${dataUrl.users}?skip=${startIndex}&limit=${length}`),
            fetch(dataUrl.overview).then(res => res.text())
        ]);

        if (!usersResponse.ok) {
            throw new Error(
                `HTTP error! status: ${usersResponse.status}, statusText: ${usersResponse.statusText}`);
        }

        const data = await usersResponse.json();

        return data.users.map((user: any) => ({
            id: user.id,
            fullName: `${user.firstName} ${user.lastName}`,
            age: user.age,
            gender: user.gender,
            city: user.address.city,
            stateCode: user.address.stateCode,
            country: user.address.country,
            email: user.email,
            avatarUrl: `${dataUrl.avatar}${user.id % 70}`,
            backgroundImageUrl: `${dataUrl.backgroundImage}${user.id}/200/300`,
            overview: overviewText
        }));

    } catch (error) {
        console.error('Failed to fetch users:', error);
        throw error;
    }
}