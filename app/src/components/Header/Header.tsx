import React from 'react';
import './Header.scss';

const logoUrl: string = '/src/assets/Lightricks-Logo.svg';

type HeaderProps = {
    userInitials: string;
    onAvatarClick: () => void;
};

function Header(props: HeaderProps) {
    return (
        <header>
            <div className='header-content'>
                <img className='logo'
                    src={logoUrl}
                    alt="Logo"
                />
                <button className='avatar'
                    onClick={props.onAvatarClick}>
                    <div className='avatar-text'>
                        {props.userInitials}
                    </div>
                </button>
            </div>
        </header>
    );
}

export default Header;