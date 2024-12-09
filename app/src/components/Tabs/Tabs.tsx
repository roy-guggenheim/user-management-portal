import React, { useState } from "react";
import { capitalizeFirstLetter } from "../../utils/string";
import "./Tabs.scss";

export type Tab = 'overview' | 'posts';

type TabsProps = {
    tabs: Tab[];
    currentTabIndex: number;
    onTabChange: (index: number) => void;
};

function Tabs(props: TabsProps) {
    const [moveDirection, setMoveDirection] = useState<'forward' | 'backward'>('forward');

    const handleTabClick = (clickedIndex: number) => {
        setMoveDirection(clickedIndex > props.currentTabIndex ? 'forward' : 'backward');
        props.onTabChange(clickedIndex);
    };

    return (
        <nav className="tabs">
            <ol>
                {props.tabs.map((tab: Tab, index: number) => (
                    <li key={index}>
                        <button
                            onClick={() => handleTabClick(index)}
                            className={`tab-button${props.currentTabIndex === index ? "-active" : ""} direction-${moveDirection}`}
                        >
                            <p>{capitalizeFirstLetter(tab)}</p>
                        </button>
                    </li>
                ))}
            </ol>
        </nav>
    );
}

export default Tabs;