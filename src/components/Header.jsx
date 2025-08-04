import React from "react";
import { useTheme } from "../theme/ThemeContext";
import { Link } from "react-router-dom";

const Header = () => {
    const { theme, setTheme } = useTheme();

    return (
        <header className="fixed w-full top-0 z-50 p-4 shadow bg-white dark:bg-gray-800">
            <div className="relative flex items-center justify-between ">
                {/* Left - Logo */}
                <div className="text-xl font-bold">MyApp</div>

                {/* Center - Nav Links */}
                <nav className="absolute left-1/2 transform -translate-x-1/2 flex gap-6 text-base font-medium">
                    <Link to="/" className="hover:underline">Home</Link>
                    <Link to="/about" className="hover:underline">About</Link>
                    <Link to="/contact" className="hover:underline">Contact</Link>
                </nav>

                {/* Right - Theme Dropdown */}
                <select
                    value={theme}
                    onChange={(e) => setTheme(e.target.value)}
                    className="p-2 border rounded bg-white dark:bg-gray-700 dark:text-white"
                >
                    <option value="theme1">Theme 1</option>
                    <option value="theme2">Theme 2</option>
                    <option value="theme3">Theme 3</option>
                </select>
            </div>
        </header>
    );
};

export default Header;
