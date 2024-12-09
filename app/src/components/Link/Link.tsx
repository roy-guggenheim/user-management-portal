import React from 'react';
import "./Link.scss";

type LinkProps = {
    icon: React.ReactNode;
    text: string;
    onClick: () => void;
}

function Link(props: LinkProps) {
    return (
        <div className="link"
            onClick={props.onClick}>
            <div className="icon">{props.icon}</div>
            <p>{props.text}</p>
        </div>
    );
}

export default Link;