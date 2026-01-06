// components/Footer.tsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Mail, Instagram, Youtube, Github } from "lucide-react";

const Footer: React.FC = () => {
    return (
        <motion.footer
            className="bg-gradient-to-b from-team-blue via-[#031a4d] to-black text-white py-10 border-t border-team-gold/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-6">
                    <div className="shrink-0">
                        <img src='/img/Logo-Transparent.png' alt="Team Logo" className="h-12 w-12 mx-auto md:mx-0" />
                    </div>

                    <div className="text-center md:text-left">
                        <p className="text-white font-semibold text-copperplate">Team Excalibur #6738</p>
                        <p className="text-white/70">&copy; 2025. All rights reserved.</p>
                        <p className="text-white/60">Dedicated to inspiring innovation and fostering engineering excellence.</p>
                    </div>

                    <div className="flex space-x-4">
                        <a href="mailto:ExcaliburFRC@gmail.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-team-gold transition transform hover:scale-110">
                            <Mail className="h-6 w-6" />
                        </a>
                        <a href="https://www.youtube.com/@ExcaliburFRC" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-team-gold transition transform hover:scale-110">
                            <Youtube className="h-6 w-6" />
                        </a>
                        <a href="https://github.com/ExcaliburFRC" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-team-gold transition transform hover:scale-110">
                            <Github className="h-6 w-6" />
                        </a>
                        <a href="https://www.instagram.com/excalibur_6738/" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-team-gold transition transform hover:scale-110">
                            <Instagram className="h-6 w-6" />
                        </a>
                    </div>
                </div>

                <div className="h-px w-full bg-gradient-to-r from-transparent via-team-gold/35 to-transparent mb-6"/>

                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-center md:text-left">
                        <p className="text-team-gold font-semibold text-copperplate">Contact</p>
                        <p className="text-white/70"><a className="hover:text-team-gold transition" href="mailto:ExcaliburFRC@gmail.com">ExcaliburFRC@gmail.com</a></p>
                        <p className="text-white/70">Address: 4 Reuven Street, Modi'in, Israel</p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
                        <Link to="/privacy" className="text-white/70 hover:text-team-gold transition">
                            Privacy Policy
                        </Link>
                        <Link to="/terms-of-service" className="text-white/70 hover:text-team-gold transition">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </motion.footer>
    );
};

export default Footer;