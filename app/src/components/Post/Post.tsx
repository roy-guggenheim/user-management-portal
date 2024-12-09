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

type Preview = 'collapsed' | 'expanded';

const INITIAL_PREVIEW: Preview = 'collapsed';

function Post(props: PostProps) {
    const [preview, setPreview] = useState<Preview>(INITIAL_PREVIEW);
    const isExpanded = preview === 'expanded';
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
                    onClick={() => setPreview(isExpanded ? 'collapsed' : 'expanded')}>
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