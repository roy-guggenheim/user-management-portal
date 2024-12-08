import React, { useEffect } from "react";
import { ChevronLeft } from "lucide-react";
import Link from "../Link/Link.tsx";
import Tabs, { Tab } from "../Tabs/Tabs.tsx";
import LTButton from "../LTButton/LTButton.tsx";
import Post, { PostProps } from "../Post/Post.tsx";
import { fetchPosts, fetchUser, User } from "../../api/usersApi.ts";
import { capitalizeFirstLetter, randomInt } from "../../utils/utils.ts";
import "./CreatorPage.scss";


type CreatorPageProps = {
    userId: number;
    onBackText: string;
    onBackClick: () => void;
    onEditClick: () => void;
}

const INITIAL_TAB: Tab = 'overview';

function CreatorPage(props: CreatorPageProps) {
    const [currentTab, setCurrentTab] = React.useState<Tab>(INITIAL_TAB);
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
        <div className={`page ${currentTab}-tab`}>
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
                            <div className="creator-info">
                                <div className="avatar-wrapper">
                                    <img src={userData.avatarUrl} alt="avatar" />
                                </div>
                                <div className="creator-info-frame">
                                    <div className="creator-details">
                                        <div className="titles">
                                            <h1>{userData.fullName}</h1>
                                            <h2>{`${userData.age}. ${capitalizeFirstLetter(userData.gender)}. 
                                            ${userData.city}. ${userData.stateCode}, ${userData.country}`}</h2>
                                        </div>
                                        <p>{userData.email}</p>
                                    </div>
                                    <div className="edit-button-wrapper">
                                        <LTButton className="edit-button"
                                            label={"Edit"}
                                            onClick={props.onEditClick} />
                                    </div>
                                </div>
                            </div>
                            <Tabs
                                tabs={['overview', 'posts']}
                                currentTab={currentTab}
                                onTabChange={setCurrentTab} >
                            </Tabs>
                        </div>
                        <div className="creator-page-body">
                            {currentTab === 'overview' && (
                                <div className="overview">
                                    <h3>About me</h3>
                                    <p>{userData.overview}</p>
                                </div>
                            )}
                            {currentTab === 'posts' && (
                                <div className="posts">
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