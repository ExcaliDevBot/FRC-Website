// components/Footer.tsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer: React.FC = () => {
    return (
        <motion.footer
            className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 text-white py-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center mb-4">
                    <div className="mb-4 md:mb-0">
                        <img src='/Logo-Transparent.png' alt="Team Logo" className="h-12 w-12" />
                    </div>
                    <div className="text-center md:text-left">
                        <p>&copy; 2025 Team Excalibur #6738. All rights reserved.</p>
                        <p className="text-gray-400">Dedicated to inspiring innovation and fostering engineering excellence.</p>
                    </div>
                    <div className="flex space-x-4">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition transform hover:scale-110">
                            <Facebook className="h-6 w-6" />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition transform hover:scale-110">
                            <Instagram className="h-6 w-6" />
                        </a>
                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition transform hover:scale-110">
                            <Youtube className="h-6 w-6" />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition transform hover:scale-110">
                            <Twitter className="h-6 w-6" />
                        </a>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="text-center md:text-left">
                        <p className="text-gray-400 font-bold">Contact us</p>
                        <p className="text-gray-400">excaliburfrc@gmail.com</p>
                        <p className="text-gray-400">Address: 4 Reuven Street, Modi'in, Israel</p>
                    </div>
                    <div className="flex space-x-4">
                        <Link to="/privacy-policy"
                            className="text-gray-400 hover:text-white transition transform hover:scale-110">
                            Privacy Policy
                        </Link>
                        <Link to="/terms-of-service"
                            className="text-gray-400 hover:text-white transition transform hover:scale-110">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </motion.footer>
    );
};

export default Footer;
