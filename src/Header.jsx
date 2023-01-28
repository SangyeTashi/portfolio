import React from 'react';
import { Twitter, GitHub, Instagram, LinkedIn } from '@mui/icons-material';

function Header() {
    return (
        <div className="flex px-5 py-3 items-center sticky top-0 z-10">
            <div>
                <ul className="flex space-x-3">
                    <li>Portfolios</li>
                    <li>Skills</li>
                    <li>Education</li>
                    <li>About Me</li>
                </ul>
            </div>
            <div className="ml-auto flex items-center space-x-3">
                <div className="hidden lg:inline-flex space-x-2">
                    <Twitter />
                    <GitHub />
                    <Instagram />
                    <LinkedIn />
                </div>
                <img
                    className="  h-8 rounded-full"
                    src="https://picsum.photos/200"
                    alt="profile-photo"
                />
            </div>
        </div>
    );
}

export default Header;
