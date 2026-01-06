// components/Navbar.tsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const Navbar: React.FC = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const location = useLocation();

    const toggleNav = () => setIsNavOpen(!isNavOpen);

    const menuVariants = {
        hidden: { opacity: 0, y: "-100%" },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
        exit: { opacity: 0, y: "-100%", transition: { duration: 0.5, ease: "easeIn" } }
    };

    const linkVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } }
    };

    const isActive = (path: string) => location.pathname === path;

    const navLinkClass = (path: string) =>
        `text-sm font-semibold tracking-wide transition-colors ${
            isActive(path)
                ? "text-team-gold"
                : "text-white/85 hover:text-team-gold"
        }`;

    return (
        <motion.nav
            className="sticky top-0 z-40 bg-team-blue/95 backdrop-blur border-b border-team-gold/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
        >
            {/* gold accent line */}
            <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-team-gold/80 to-transparent" />

            <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                {/* Logo & Anniversary */}
                <Link to="/" className="flex items-center gap-3">
                    <img
                        src="/img/Logo-Transparent.png"
                        alt="Team Logo"
                        className="h-11 w-11 hover:opacity-90 transition-opacity"
                    />
                    <div className="hidden sm:flex flex-col leading-tight">
                        <div className="text-white text-base font-bold text-copperplate">Excalibur FRC</div>

                        {/* Embedded Anniversary Accent */}
                        <div className="flex items-center gap-2 mt-1">
                            <span className="text-white/80 text-[10px] uppercase tracking-wide">celebrating</span>
                            <span className="text-team-gold text-xs font-bold">10 years</span>
                        </div>
                    </div>
                </Link>

                {/* Mobile Hamburger */}
                <div className="md:hidden">
                    <button
                        onClick={toggleNav}
                        aria-label={isNavOpen ? "Close menu" : "Open menu"}
                        className="text-white/90 hover:text-team-gold transition"
                    >
                        <svg
                            className="h-7 w-7"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d={isNavOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                            ></path>
                        </svg>
                    </button>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    <Link to="/about" className={navLinkClass("/about")}>About</Link>
                    <Link to="/team" className={navLinkClass("/team")}>Team</Link>
                    <Link to="/robots" className={navLinkClass("/robots")}>Robots</Link>
                    <Link to="/resources" className={navLinkClass("/resources")}>Resources</Link>
                    <Link
                        to="/sponsor-us"
                        className="bg-team-gold text-team-blue px-4 py-2 rounded-lg font-semibold hover:bg-opacity-90 transition"
                    >
                        Sponsor Us
                    </Link>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isNavOpen && (
                    <motion.div
                        className="fixed inset-0 z-50 bg-gradient-to-br from-team-blue via-[#031a4d] to-black flex flex-col items-center justify-center text-white"
                        variants={menuVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_30%_20%,rgba(212,175,55,0.35),transparent_55%)]" />

                        <Link to="/" onClick={toggleNav} className="relative mb-8">
                            <img src="/img/Logo-Transparent.png" alt="Team Logo" className="h-24 w-24" />
                        </Link>

                        <motion.div
                            variants={linkVariants}
                            className="text-center space-y-4"
                        >
                            {["/about", "/team", "/robots", "/resources"].map((path) => (
                                <Link
                                    key={path}
                                    to={path}
                                    onClick={toggleNav}
                                    className="text-2xl hover:text-team-gold transition"
                                >
                                    {path.replace("/", "").replace("-", " ").toUpperCase() || "HOME"}
                                </Link>
                            ))}
                        </motion.div>

                        <motion.div variants={linkVariants} className="mt-8">
                            <Link
                                to="/sponsor-us"
                                onClick={toggleNav}
                                className="bg-team-gold text-team-blue px-10 py-4 rounded-xl hover:bg-opacity-90 transition text-2xl font-semibold"
                            >
                                Sponsor Us
                            </Link>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
