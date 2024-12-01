import React from 'react';
import './LTButton.scss';

type LTButtonProps = {
    label: string;
    onClick: () => void;
    className?: string;
}

function LTButton(props: LTButtonProps) {
    return (
        <button
            className={`lt-button ${props.className}`}
            onClick={props.onClick}
        >
            {props.label}
        </button>
    );
}

export default LTButton;