import React from 'react';
import { Twitter, GitHub, Instagram, LinkedIn } from '@mui/icons-material';

function Header() {
    return (
        <div className="flex px-3 py-2 items-center sticky">
            <div>
                <ul className="flex space-x-3">
                    <li>Portfolios</li>
                    <li>Skills</li>
                    <li>Education</li>
                    <li>About Me</li>
                </ul>
            </div>
            <div className="ml-auto flex items-center space-x-3">
                <div className="hidden lg:inline-flex">Sangye Tashi</div>
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
