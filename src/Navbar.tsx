// components/Navbar.tsx
import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => setIsNavOpen(!isNavOpen);

    return (
        <motion.nav
            className="bg-white border-b border-gray-100"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                    <Link to="/">
                        <img src="/Logo-Transparent.png" alt="Team Logo" className="h-12 w-12 hover:opacity-80 transition-opacity" />
                    </Link>
                </div>
                <div className="md:hidden">
                    <button onClick={toggleNav} className="text-gray-600 hover:text-team-blue transition">
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>
                <div className="hidden md:flex space-x-8 items-center">
                    <Link to="/about" className="text-gray-600 hover:text-team-blue transition">About</Link>
                    <Link to="/team" className="text-gray-600 hover:text-team-blue transition">Team</Link>
                    <Link to="/robots" className="text-gray-600 hover:text-team-blue transition">Robots</Link>
                    <Link to="/contact" className="bg-team-blue text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition">
                        Contact Us
                    </Link>
                </div>
            </div>
            {isNavOpen && (
                <div className="fixed inset-0 bg-gradient-to-br from-team-blue to-blue-900 z-50 flex flex-col items-center justify-center space-y-8 text-white">
                    <button onClick={toggleNav} className="absolute top-4 right-4 text-white hover:text-gray-300 transition">
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                    <Link to="/" onClick={toggleNav}>
                        <img src="/Logo-Transparent.png" alt="Team Logo" className="h-24 w-24 mb-8" />
                    </Link>
                    <Link to="/about" className="text-2xl hover:text-gray-300 transition" onClick={toggleNav}>About</Link>
                    <Link to="/team" className="text-2xl hover:text-gray-300 transition" onClick={toggleNav}>Team</Link>
                    <Link to="/robots" className="text-2xl hover:text-gray-300 transition" onClick={toggleNav}>Robots</Link>
                    <Link to="/contact" className="bg-team-gold text-team-blue px-8 py-4 rounded-lg hover:bg-opacity-90 transition text-2xl" onClick={toggleNav}>
                        Contact Us
                    </Link>
                </div>
            )}
        </motion.nav>
    );
};

export default Navbar;