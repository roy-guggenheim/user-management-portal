import React, { useEffect } from "react";
import { ChevronLeft } from "lucide-react";
import Link from "../Link/Link.tsx";
import Tabs, { Tab } from "../Tabs/Tabs.tsx";
import LTButton from "../LTButton/LTButton.tsx";
import Post, { PostProps } from "../Post/Post.tsx";
import { fetchPosts, fetchUser, User } from "../../api/usersApi.ts";
import { capitalizeFirstLetter } from "../../utils/string";
import { randomInt } from "../../utils/math.ts";
import "./CreatorPage.scss";

type CreatorPageProps = {
    userId: number;
    onBackText: string;
    onBackClick: () => void;
    onEditClick: () => void;
}

const TABS: Tab[] = [
    'overview',
    'posts'
] as const;

function CreatorPage(props: CreatorPageProps) {
    const [currentTabIndex, setCurrentTabIndex] = React.useState<number>(0);
    const [userData, setUserData] = React.useState<User | null>(null);
    const [userPosts, setUserPosts] = React.useState<PostProps[]>([]);

    useEffect(() => {
        const fetchUserData = async () => {
            const user = await fetchUser(props.userId);
            setUserData(user);
            const numPosts = randomInt(1, 5);
            const posts = await fetchPosts(numPosts);
            setUserPosts(posts);
        }
        fetchUserData();
    }, [props.userId])

    if (!userData) {
        return <div className="loading">Loading...</div>;
    }

    return (
        <div className={`page ${componentClassName(TABS[currentTabIndex])}`}>
            <div className="page-content">
                <div className="back-container">
                    <Link
                        icon={<ChevronLeft />}
                        text={props.onBackText}
                        onClick={props.onBackClick}
                    />
                </div>
                <div className="creator-page">
                    <div className="creator-page-frame">
                        <div className="creator-page-header">
                            <CreatorInfo
                                userData={userData}
                                onEditClick={props.onEditClick}
                            />
                            <Tabs
                                tabs={TABS}
                                currentTabIndex={currentTabIndex}
                                onTabChange={setCurrentTabIndex}
                            />
                        </div>
                        <div className="creator-page-body">
                            {currentTabIndex === 0 && (
                                <div className={TABS[0]}>
                                    <h3>About me</h3>
                                    <p>{userData.overview}</p>
                                </div>
                            )}
                            {currentTabIndex === 1 && (
                                <div className={TABS[1]}>
                                    {userPosts.map(post => (
                                        <Post key={post.id}
                                            id={post.id}
                                            body={post.body}
                                            comments={post.comments.map(comment => ({
                                                id: comment.id,
                                                userInitials: comment.userInitials,
                                                text: comment.text
                                            }))}
                                        />
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
}

export default CreatorPage;

function componentClassName(tab: Tab) {
    switch (tab) {
        case 'overview':
            return "overview-tab";
        case 'posts':
            return "posts-tab";
    }
}

type CreatorInfoProps = {
    userData: User;
    onEditClick: () => void;
}

function CreatorInfo(props: CreatorInfoProps) {
    return (
        <div className="creator-info">
            <div className="avatar-wrapper">
                <img src={props.userData.avatarUrl} alt="avatar" />
            </div>
            <div className="creator-info-frame">
                <div className="creator-details">
                    <div className="titles">
                        <h1>{props.userData.fullName}</h1>
                        <h2>{`${props.userData.age}. ${capitalizeFirstLetter(props.userData.gender)}. 
                        ${props.userData.city}. ${props.userData.stateCode}, ${props.userData.country}`}</h2>
                    </div>
                    <p>{props.userData.email}</p>
                </div>
                <div className="edit-button-wrapper">
                    <LTButton
                        className="edit-button"
                        label="Edit"
                        onClick={props.onEditClick}
                    />
                </div>
            </div>
        </div>
    );
}