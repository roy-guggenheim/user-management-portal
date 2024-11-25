import React from 'react';
import './LTButton.scss';

type LTButtonProps = {
    label: string;
    onClick: () => void;
    width?: number | string;
}

function LTButton(props: LTButtonProps) {
    return (
        <button
            className="lt-button"
            onClick={props.onClick}
            style={props.width ? { width: props.width } : undefined}
        >
            {props.label}
        </button>
    );
}

export default LTButton;