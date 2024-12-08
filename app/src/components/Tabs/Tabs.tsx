import React, { useState } from "react";
import { capitalizeFirstLetter } from "../../utils/utils";
import "./Tabs.scss";

export type Tab = 'overview' | 'posts';

type TabsProps = {
    tabs: Tab[];
    currentTab: Tab;
    onTabChange: (tab: Tab) => void;
};

function Tabs(props: TabsProps) {
    const [moveDirection, setMoveDirection] = useState<'forward' | 'backward'>('forward');

    const handleTabClick = (tab: Tab) => {
        const newIndex = props.tabs.indexOf(tab);
        const curIndex = props.tabs.indexOf(props.currentTab);
        setMoveDirection(newIndex > curIndex ? 'forward' : 'backward');
        props.onTabChange(tab);
    };

    return (
        <nav className="tabs">
            <ol>
                {props.tabs.map(tab => (
                    <li key={tab}>
                        <button
                            onClick={() => handleTabClick(tab)}
                            className={`tab-button${props.currentTab === tab ? "-active" : ""} direction-${moveDirection}`}
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