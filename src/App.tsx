import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TeamPage from './TeamPage';
import {
    Trophy,
    Users,
    Wrench,
    Calendar,
    ChevronRight,
    Github,
    Facebook,
    Instagram,
    Youtube,
    Twitter
} from 'lucide-react';

function App() {
    return (
        <Router>
            <div className="min-h-screen bg-white">
                {/* Navigation */}
                <nav className="bg-white border-b border-gray-100">
                    <div className="container mx-auto px-4 py-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                                <img src='/Logo-Transparent.png' alt="Team Logo" className="h-12 w-12"/>
                                <div>
                                    <span className="text-2xl font-bold text-team-blue text-copperplate">Excalibur #6738</span>
                                </div>
                            </div>
                            <div className="hidden md:flex space-x-8 items-center">
                                <a href="#about" className="text-gray-600 hover:text-team-blue transition">About</a>
                                <a href="/team" className="text-gray-600 hover:text-team-blue transition">Team</a>
                                <a href="#robots" className="text-gray-600 hover:text-team-blue transition">Robots</a>
                                <a href="#contact" className="bg-team-blue text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition">Contact Us</a>
                            </div>
                        </div>
                    </div>
                </nav>

                {/* Hero Section */}
                <div className="relative bg-team-blue overflow-hidden">
                    <div className="absolute inset-0">
                        <div className="absolute inset-0 bg-[url('/robot.jpg')] bg-[length:50%] bg-right bg-no-repeat mix-blend-overlay"></div>
                    </div>
                    <div className="relative">
                        <div className="container mx-auto px-4 py-32">
                            <div className="max-w-4xl">
                                <h1 className="text-7xl font-bold mb-6 text-white">
                                    Forging the Future
                                    <span className="text-team-gold block mt-4">of Robotics</span>
                                </h1>
                                <p className="text-xl mb-8 text-gray-200 max-w-2xl leading-relaxed">
                                    Team Excalibur #6738 is a competitive FIRST Robotics team dedicated to inspiring innovation and fostering engineering excellence through teamwork and determination.
                                </p>
                                <div className="flex space-x-4">
                                    <button className="bg-team-gold text-team-blue px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition flex items-center">
                                        Join Our Team <ChevronRight className="ml-2 h-5 w-5"/>
                                    </button>
                                    <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-team-blue transition">
                                        Learn More
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Current Season */}
                <div className="py-24 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="inline-block bg-team-gold text-white px-3 py-1 rounded-full text-sm font-semibold ">
                            Current Season
                        </div>
                        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                            <div className="md:w-1/2">
                                <h2 className="text-4xl font-bold text-team-blue mb-6">2025 Season - Reefscape</h2>
                                <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                                    This season, we're taking on the FIRST Robotics Competition challenge "REEFSCAPE". Our robot features advanced autonomous capabilities, precise coral and algae scoring mechanisms, and innovative software solutions.
                                </p>
                                <div className="flex items-center space-x-6 text-sm mb-8">
                                    <div className="flex items-center">
                                        <Calendar className="h-5 w-5 text-team-gold mr-2"/>
                                        <span>Competition - May 2025</span>
                                    </div>
                                    <div className="flex items-center">
                                        <Github className="h-5 w-5 text-team-gold mr-2"/>
                                        <a href="#" className="text-team-blue hover:underline">View Code</a>
                                    </div>
                                </div>
                                <div className="flex space-x-4">
                                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-team-blue transition">
                                        <Facebook className="h-6 w-6"/>
                                    </a>
                                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-team-blue transition">
                                        <Instagram className="h-6 w-6"/>
                                    </a>
                                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-team-blue transition">
                                        <Youtube className="h-6 w-6"/>
                                    </a>
                                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-team-blue transition">
                                        <Twitter className="h-6 w-6"/>
                                    </a>
                                </div>
                            </div>
                            <div className="md:w-1/2 p-8 shadow-lg custom-background">
                                <img src="/IMG_0318.JPG" alt="Current Robot" className="rounded-lg w-full h-80 object-cover custom-border"/>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Team Stats */}
                <div className="py-20">
                    <div className="container mx-auto px-4">
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="bg-white p-8 rounded-xl border border-gray-100">
                                <div className="bg-team-blue/10 rounded-full p-4 w-16 h-16 mb-6 flex items-center justify-center">
                                    <Trophy className="h-8 w-8 text-team-blue"/>
                                </div>
                                <h3 className="text-2xl font-bold mb-2 text-team-blue">Engineering Inspiration</h3>
                                <p className="text-gray-600">2025 Season District Championship Achievement</p>
                            </div>
                            <div className="bg-white p-8 rounded-xl border border-gray-100">
                                <div className="bg-team-blue/10 rounded-full p-4 w-16 h-16 mb-6 flex items-center justify-center">
                                    <Users className="h-8 w-8 text-team-blue"/>
                                </div>
                                <h3 className="text-2xl font-bold mb-2 text-team-blue">52+ Members</h3>
                                <p className="text-gray-600">Dedicated Students & Mentors</p>
                            </div>
                            <div className="bg-white p-8 rounded-xl border border-gray-100">
                                <div className="bg-team-blue/10 rounded-full p-4 w-16 h-16 mb-6 flex items-center justify-center">
                                    <Wrench className="h-8 w-8 text-team-blue"/>
                                </div>
                                <h3 className="text-2xl font-bold mb-2 text-team-blue">1000+ Hours</h3>
                                <p className="text-gray-600">Community Work and Projects Invested</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Team Members */}
                <div className="py-20 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <h2 className="text-4xl font-bold text-team-blue text-center mb-12">Our Team</h2>

                        {/* Leadership */}
                        <div className="mb-12">
                            <h3 className="text-2xl font-bold text-team-blue mb-6">Leadership</h3>
                            <div className="grid md:grid-cols-4 gap-4">
                                {[
                                    {name: "Asaf Kloot", role: "Captain"},
                                    {name: "Amit Sucher", role: "Co-Captain"},
                                    {name: "Yoav Cohen", role: "Software Lead"},
                                    {name: "Yishay Greenfeld", role: "Mechanical Lead"},
                                    {name: "Eylon Ben Shushan", role: "Electrical Lead"},
                                    {name: "Itamar Dudai", role: "Community Lead"},
                                    {name: "Amichai Sedley", role: "Media Lead"},
                                ].map((leader, index) => (
                                    <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                                        <h4 className="font-semibold text-team-blue">{leader.name}</h4>
                                        <p className="text-sm text-gray-600">{leader.role}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <footer className="bg-gray-800 text-white py-8">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col md:flex-row justify-between items-center">
                            <div className="mb-4 md:mb-0">
                                <img src='/Logo-Transparent.png' alt="Team Logo" className="h-12 w-12"/>
                            </div>
                            <div className="text-center md:text-left">
                                <p>&copy; 2025 Team Excalibur #6738. All rights reserved.</p>
                            </div>
                            <div className="flex space-x-4">
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                                    <Facebook className="h-6 w-6"/>
                                </a>
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                                    <Instagram className="h-6 w-6"/>
                                </a>
                                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                                    <Youtube className="h-6 w-6"/>
                                </a>
                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                                    <Twitter className="h-6 w-6"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </Router>
    );
}

export default App;