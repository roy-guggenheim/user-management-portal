import React from "react";
import LTButton from "../LTButton/LTButton";
import "./CreatorCard.scss";

type CreatorCardProps = {
    backgroundImageUrl: string;
    avatarUrl: string;
    title: string;
    subtitlte: string;
    email: string
    onDetailsClick: () => void;
};

function CreatorCard(props: CreatorCardProps) {
    return (
        <div className="creator-card">
            <img className="creator-card-bg-image"
                src={props.backgroundImageUrl} alt="User background image" />
            <div className="creator-card-avatar-wrapper">
                <img src={props.avatarUrl} alt="User avatar" />
            </div>
            <div className="creator-card-info">
                <div className="creator-card-info-titles">
                    <h2>{props.title}</h2>
                    <p>{props.subtitlte}</p>
                </div>
                <div className="creator-card-info-email">
                    <p>{props.email}</p>
                </div>
                <LTButton
                    onClick={props.onDetailsClick}
                    label="Details"
                    className="creator-card-info-button"
                />
            </div>
        </div>
    );
}

export default CreatorCard;
