import React from 'react';
import { Twitter, GitHub, Instagram, LinkedIn } from '@mui/icons-material';
import MenuItem from './MenuItem';

function Header() {
    return (
        <div className="flex flex-col justify-center px-5 py-8 items-center fixed w-full backdrop-blur-lg space-y-3 z-10">
            <ul className="flex space-x-6 xl:space-x-8">
                <MenuItem text="Home" />
                <MenuItem text="Projects" />
                <MenuItem text="Skills" />
                <MenuItem text="Contact" />
            </ul>

            <div className=" flex items-center space-x-3">
                <div className=" space-x-2">
                    <Twitter />
                    <GitHub />
                    <Instagram />
                    <LinkedIn />
                </div>
            </div>
            <img
                className=" h-10 rounded-full"
                src="https://picsum.photos/200"
                alt="profile-photo"
            />
        </div>
    );
}

export default Header;
