// components/Navbar.tsx
import {useState} from "react";
import {motion, AnimatePresence} from "framer-motion";
import {Link} from "react-router-dom";

const Navbar: React.FC = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => setIsNavOpen(!isNavOpen);

    const menuVariants = {
        hidden: {opacity: 0, y: "-100%"},
        visible: {opacity: 1, y: 0, transition: {duration: 0.5, ease: "easeOut"}},
        exit: {opacity: 0, y: "-100%", transition: {duration: 0.5, ease: "easeIn"}}
    };

    const linkVariants = {
        hidden: {opacity: 0, x: -50},
        visible: {opacity: 1, x: 0, transition: {duration: 0.5, ease: "easeOut"}}
    };

    return (
        <motion.nav
            className="bg-white border-b border-gray-100"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 1}}
        >
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                    <Link to="/">
                        <img src="/img/Logo-Transparent.png" alt="Team Logo"
                             className="h-12 w-12 hover:opacity-80 transition-opacity"/>
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
                    <Link to="/resources" className="text-gray-600 hover:text-team-blue transition">Resources</Link>
                    <Link to="/contact"
                          className="bg-team-blue text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition">
                        Contact Us
                    </Link>
                </div>
            </div>
            <AnimatePresence>
                {isNavOpen && (
                    <motion.div
                        className="fixed inset-0 bg-gradient-to-br from-team-blue to-blue-900 z-50 flex flex-col items-center justify-center space-y-8 text-white"
                        variants={menuVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        <button onClick={toggleNav}
                                className="absolute top-8 right-4 text-white hover:text-gray-300 transition">
                            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                        <Link to="/" onClick={toggleNav}>
                            <img src="/img/Logo-Transparent.png" alt="Team Logo" className="h-24 w-24 mb-8"/>
                        </Link>
                        <motion.div variants={linkVariants}>
                            <Link to="/about" className="text-2xl hover:text-gray-300 transition"
                                  onClick={toggleNav}>About</Link>
                        </motion.div>
                        <motion.div variants={linkVariants}>
                            <Link to="/team" className="text-2xl hover:text-gray-300 transition"
                                  onClick={toggleNav}>Team</Link>
                        </motion.div>
                        <motion.div variants={linkVariants}>
                            <Link to="/robots" className="text-2xl hover:text-gray-300 transition"
                                  onClick={toggleNav}>Robots</Link>
                        </motion.div>
                        <motion.div variants={linkVariants}>
                            <Link to="/resources" className="text-2xl hover:text-gray-300 transition"
                                  onClick={toggleNav}>Resources</Link>
                        </motion.div>
                        <motion.div variants={linkVariants}>
                            <Link to="/contact"
                                  className="bg-team-gold text-team-blue px-8 py-4 rounded-lg hover:bg-opacity-90 transition text-2xl"
                                  onClick={toggleNav}>
                                Contact Us
                            </Link>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;