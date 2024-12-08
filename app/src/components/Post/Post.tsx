import { ChevronDown, ChevronRight } from "lucide-react";
import React, { useState } from "react";
import './Post.scss';

export type Comment = {
    id: string;
    userInitials: string;
    text: string;
}

export type PostProps = {
    id: string;
    body: string;
    comments: Comment[];
}

function Post(props: PostProps) {
    const [isExpanded, setIsExpanded] = useState(false);
    const footerTitle = `${isExpanded ? 'Hide' : 'View'} ${props.comments.length} comments`;
    const arrow = isExpanded ? <ChevronDown /> : <ChevronRight />;
    return (
        <div className="post">
            <div className="post-body">
                <p>{props.body}</p>
            </div>
            <div className="post-footer">
                <p>{footerTitle}</p>
                <div className="arrow"
                    onClick={() => setIsExpanded(!isExpanded)}>
                    {arrow}
                </div>
            </div>
            {isExpanded && (
                <div className="comments">
                    {props.comments.map(comment => (
                        <div key={comment.id} className="comment">
                            <div className='avatar'>
                                <div className='avatar-text'>
                                    {comment.userInitials}
                                </div>
                            </div>
                            <p>{comment.text}</p>
                        </div>
                    ))}
                </div>
            )}
        </div >
    );
}

export default Post;