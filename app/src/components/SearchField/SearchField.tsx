import React from 'react';
import { Search, X } from 'lucide-react';
import './SearchField.scss';

type SearchFieldProps = {
    placeholder: string;
    value: string;
    onChange: (value: string) => void;
}

function SearchField(props: SearchFieldProps) {
    return (
        <div className="search-field">
            <div className="search">
                <Search className="search-icon" size={16} />
                <input
                    className="search-input"
                    type="text"
                    placeholder={props.placeholder}
                    value={props.value}
                    onChange={(e) => props.onChange(e.target.value)} />
                {props.value && (
                    <button
                        className="clear-button"
                        onClick={() => props.onChange('')}
                        aria-label="Clear search"
                    >
                        <X size={16} />
                    </button>
                )}
            </div>
        </div >
    );
}

export default SearchField;