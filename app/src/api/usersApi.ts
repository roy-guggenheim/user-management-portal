
const dataUrl: Record<string, string> = {
    users: 'https://dummyjson.com/users',
    avatar: 'https://i.pravatar.cc/80?img=',
    backgroundImage: 'https://picsum.photos/seed/'
} as const;

export type User = {
    id: number;
    fullName: string;
    age: number;
    location: string;
    email: string;
    avatarUrl: string;
    backgroundImageUrl: string;
};

export async function fetchUsers(startIndex: number, length: number): Promise<User[]> {
    try {
        const response = await fetch(`${dataUrl.users}?skip=${startIndex}&limit=${length}`);

        if (!response.ok) {
            throw new Error(
                `HTTP error! status: ${response.status}, statusText: ${response.statusText}`);
        }

        const data = await response.json();

        return data.users.map((user: any) => ({
            id: user.id,
            fullName: `${user.firstName} ${user.lastName}`,
            age: user.age,
            location: user.address.city,
            email: user.email,
            avatarUrl: `${dataUrl.avatar}${user.id % 70}`,
            backgroundImageUrl: `${dataUrl.backgroundImage}${user.id}/200/300`
        }));

    } catch (error) {
        console.error('Failed to fetch users:', error);
        throw error;
    }
} 
