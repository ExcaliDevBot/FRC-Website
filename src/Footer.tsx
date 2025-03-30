// components/Footer.tsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Mail, Instagram, Youtube, Github } from "lucide-react";

const Footer: React.FC = () => {
    return (
        <motion.footer
            className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 text-white py-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center mb-4 space-y-4 md:space-y-0">
                    <div className="mb-4 md:mb-0">
                        <img src='/Logo-Transparent.png' alt="Team Logo" className="h-12 w-12 mx-auto md:mx-0" />
                    </div>
                    <div className="text-center md:text-left">
                        <p>&copy; 2025 Team Excalibur #6738. All rights reserved.</p>
                        <p className="text-gray-400">Dedicated to inspiring innovation and fostering engineering excellence.</p>
                    </div>
                    <div className="flex space-x-4">
                        <a href="mailto:ExcaliburFRC@gmail.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition transform hover:scale-110">
                            <Mail className="h-6 w-6" />
                        </a>
                        <a href="https://www.youtube.com/@ExcaliburFRC" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition transform hover:scale-110">
                            <Youtube className="h-6 w-6" />
                        </a>
                        <a href="https://github.com/ExcaliburFRC" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition transform hover:scale-110">
                            <Github className="h-6 w-6" />
                        </a>
                        <a href="https://www.instagram.com/excalibur_6738/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition transform hover:scale-110">
                            <Instagram className="h-6 w-6" />
                        </a>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <div className="text-center md:text-left">
                        <p className="text-gray-400 font-bold">Contact us</p>
                        <p className="text-gray-400"><a href="mailto:ExcaliburFRC@gmail.com">ExcaliburFRC@gmail.com</a></p>
                        <p className="text-gray-400">Address: 4 Reuven Street, Modi'in, Israel</p>
                    </div>
                    <div className="flex space-x-4">
                        <Link to="/privacy" className="text-gray-400 hover:text-white transition transform hover:scale-110">
                            Privacy Policy
                        </Link>
                        <Link to="/terms-of-service" className="text-gray-400 hover:text-white transition transform hover:scale-110">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </motion.footer>
    );
};

export default Footer;