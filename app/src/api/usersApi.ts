import { PostProps, Comment } from "../components/Post/Post";
import { randomInt } from "../utils/math";
import { getRandomElements } from "../utils/array";

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
    const [usersData, overviewText] = await Promise.all([
        fetchData(`${dataUrl.users}?skip=${startIndex}&limit=${length}`),
        fetchText(dataUrl.overview)
    ]);

    return usersData.users.map((user: any) =>
        transformUserData(user, overviewText)
    );
}

/**
 * Fetches a single user by ID
 * @param userId User ID
 * @returns User object
 */
export async function fetchUser(userId: number): Promise<User> {
    const [userData, overviewText] = await Promise.all([
        fetchData(`${dataUrl.users}/${userId}`),
        fetchText(dataUrl.overview)
    ]);

    return transformUserData(userData, overviewText);
}

/**
 * Fetches a list of posts
 * @param numPosts Number of posts to fetch
 * @returns List of posts
 */
export async function fetchPosts(numPosts: number): Promise<PostProps[]> {
    const postsData = await fetchData(dataUrl.posts);
    const selectedPosts = getRandomElements(postsData.posts, numPosts);

    return Promise.all(
        selectedPosts.map(async (post: any) => ({
            id: post.id.toString(),
            body: post.body,
            comments: await fetchComments(randomInt(1, 10))
        }))
    );
}

/**
 * Fetches a list of comments
 * @param numComments Number of comments to fetch
 * @returns List of comments
 */
async function fetchComments(numComments: number): Promise<Comment[]> {
    const commentsData = await fetchData(dataUrl.comments);
    const selectedComments = getRandomElements(commentsData.comments, numComments);

    return selectedComments.map((comment: any, index: number) => ({
        id: `${comment.id}-${index}`,
        userInitials: comment.user.fullName.split(' ').slice(0, 2)
            .map((name: string) => name[0].toUpperCase()).join(''),
        text: comment.body
    }));
}

/* -----------------
   Helper Functions 
-------------------- */

async function fetchData(url: string): Promise<any> {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(
            `HTTP error! status: ${response.status}, statusText: ${response.statusText}`);
    }
    return response.json();
}

async function fetchText(url: string): Promise<string> {
    const response = await fetch(url);
    return response.text();
}

function transformUserData(userData: any, overviewText: string): User {
    return {
        id: userData.id,
        fullName: `${userData.firstName} ${userData.lastName}`,
        age: userData.age,
        gender: userData.gender,
        city: userData.address.city,
        stateCode: userData.address.stateCode,
        country: userData.address.country,
        email: userData.email,
        avatarUrl: `${dataUrl.avatar}${userData.id % 70}`,
        backgroundImageUrl: `${dataUrl.backgroundImage}${userData.id}/200/300`,
        overview: overviewText
    };
}