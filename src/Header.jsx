import React, { useEffect, useRef, useState } from 'react';
import MenuItem from './MenuItem';

function Header() {
    const [isDark, setIsDark] = useState(false);
    const navRef = useRef(null);
    useEffect(() => {
        function handleScroll() {
            if (window.scrollY > navRef.current.offsetHeight) {
                setIsDark(true);
            } else {
                setIsDark(false);
            }
        }
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div
            ref={navRef}
            className={`flex flex-col justify-center px-5 py-8 items-center fixed  backdrop-blur-lg space-y-3 inset-x-0 z-10 ${
                isDark && 'backdrop-brightness-90 '
            }`}
        >
            <ul className="flex space-x-6 xl:space-x-8">
                <MenuItem text="Home" />
                <MenuItem text="Projects" />
                <MenuItem text="Skills" />
                <MenuItem text="Contact" />
            </ul>

            {/* <div className=" flex items-center space-x-3">
                <div className=" space-x-2">
                    <Twitter />
                    <GitHub />
                    <Instagram />
                    <LinkedIn />
                </div>
            </div> */}
            {/* <img
                className=" h-10 rounded-full"
                src="https://picsum.photos/200"
                alt="profile-photo"
            /> */}
        </div>
    );
}

export default Header;
