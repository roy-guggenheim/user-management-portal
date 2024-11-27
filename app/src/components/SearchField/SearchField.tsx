import React from 'react';
import { Search } from 'lucide-react';
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
            </div>
        </div>
    );
}

export default SearchField;