import {useState} from 'react';
import {motion} from 'framer-motion';
import {useInView} from 'react-intersection-observer';
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
    Twitter, XIcon, XOctagon, TwitchIcon
} from 'lucide-react';

function HomePage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isNavOpen, setIsNavOpen] = useState(false);
    const {ref: heroRef, inView: heroInView} = useInView({triggerOnce: true});
    const {ref: statsRef, inView: statsInView} = useInView({triggerOnce: true});

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    const toggleNav = () => setIsNavOpen(!isNavOpen);
    const sponsors = [
        {name: "Sponsor 1", logo: "img/FIRST.png", link: "https://www.firstinspires.org/"},
        {name: "Sponsor 2", logo: "img/frc_reefscape.gif", link: "https://www.firstinspires.org/"},
        {name: "Sponsor 3", logo: "img/jetlaser.png", link: "https://www.jetlaser.com/"},
        {name: "Sponsor 4", logo: "img/modiin.png", link: "https://www.modiin.muni.il/"},
        {name: "Sponsor 5", logo: "img/peerspot.png", link: "https://www.peerspot.com/"},
        {name: "Sponsor 6", logo: "img/propal.png", link: "https://www.propal.com/"},
        {name: "Sponsor 7", logo: "img/sagol.png", link: "https://www.sagol.com/"},
        {name: "Sponsor 8", logo: "img/SolidWorks.png", link: "https://www.solidworks.com/"},
        {name: "Sponsor 9", logo: "img/yrm.png", link: "https://www.yrm.com/"},
        {name: "Sponsor 10", logo: "img/yeshiva.png", link: "https://www.yeshiva.com/"}
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <motion.div
                className="relative bg-team-blue overflow-hidden"
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 1.5}}
                ref={heroRef}
            >
                <div className="absolute inset-0">
                    <div
                        className="absolute inset-0 bg-[url('/img/robot.jpg')] bg-cover bg-center mix-blend-overlay bg-top"></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-team-blue/70 to-team-blue/10"></div>
                </div>
                <div className="relative z-10">
                    <div className="container mx-auto px-4 py-16 md:py-32 text-center md:text-left">
                        <motion.div
                            className="max-w-4xl mx-auto"
                            initial={{y: -50, opacity: 0}}
                            animate={heroInView ? {y: 0, opacity: 1} : {}}
                            transition={{duration: 1}}
                        >
                            <h1 className="text-4xl md:text-7xl font-bold mb-6 text-white leading-tight">
                                We Are Team <span className="text-team-gold block mt-4">Excalibur FRC</span>
                            </h1>
                            <p className="text-lg md:text-xl mb-8 text-gray-200 max-w-2xl leading-relaxed mx-auto">
                                We are from Modi'in, Israel, building the future and striving for excellence in
                                engineering and innovation.
                            </p>
                            <div
                                className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 justify-center md:justify-start">
                                <motion.button
                                    onClick={openModal}
                                    className="bg-team-gold text-team-blue px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition flex items-center justify-center"
                                    whileHover={{scale: 1.1}}
                                >
                                    Contact Us <ChevronRight className="ml-2 h-5 w-5"/>
                                </motion.button>
                                <motion.a
                                    href="https://www.firstinspires.org/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-team-blue transition flex items-center justify-center"
                                    whileHover={{scale: 1.1}}
                                >
                                    Learn More
                                </motion.a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.div>

            {/* Contact Us Modal */}
            {isModalOpen && (
                <motion.div
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 0.5}}
                >
                    <motion.div
                        className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full"
                        initial={{scale: 0.8}}
                        animate={{scale: 1}}
                        transition={{duration: 0.5}}
                    >
                        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                        <p className="mb-4">For more information, please reach out to us at:</p>
                        <p className="mb-2"><strong>Email:</strong> excaliburfrc@gmail.com</p>
                        <p className="mb-2"><strong>Phone:</strong> +972 50-3229870</p>
                        <p className="mb-4"><strong>Address:</strong> 4 Reuven Street, Modi'in, Israel</p>
                        <button onClick={closeModal}
                                className="bg-team-blue text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition">Close
                        </button>
                    </motion.div>
                </motion.div>
            )}

            {/* Current Season */}
            <motion.div
                className="py-16 md:py-24 bg-gray-50"
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 1}}
            >

                <div className="container mx-auto px-4">

                    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
<div className="md:w-1/2 p-2 shadow-lg custom-background">
                            <img src="/img/IMG_0318.JPG" alt="Current Robot"
                                 className="rounded-lg w-full h-auto object-cover custom-border"/>
                        </div>
                        <div className="md:w-1/2">
                            <div
                                className="inline-block bg-team-gold text-white px-3 py-1 rounded-full text-sm font-semibold mb-5">
                                Current Season
                            </div>
                            <h2 className="text-4xl font-bold text-team-blue mb-6">2025 Season / Reefscape</h2>
                            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                                This season, we're taking on the FIRST Robotics Competition challenge "REEFSCAPE".
                                Our robot features advanced autonomous capabilities, precise coral and algae scoring
                                mechanisms, and Cool software features.
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
                                <a href="https://facebook.com/excaliburfrc" target="_blank" rel="noopener noreferrer"
                                   className="text-gray-600 hover:text-team-blue transition">
                                    <Facebook className="h-6 w-6"/>
                                </a>
                                <a href="https://instagram.com/excalibur_6738/" target="_blank" rel="noopener noreferrer"
                                   className="text-gray-600 hover:text-team-blue transition">
                                    <Instagram className="h-6 w-6"/>
                                </a>
                                <a href="https://youtube.com/@ExcaliburFRC" target="_blank" rel="noopener noreferrer"
                                   className="text-gray-600 hover:text-team-blue transition">
                                    <Youtube className="h-6 w-6"/>
                                </a>
                                <a href="http://x.com/ExcaliburFrc" target="_blank" rel="noopener noreferrer"
                                   className="text-gray-600 hover:text-team-blue transition">
                                    <Twitter className="h-6 w-6"/>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </motion.div>

            {/* Team Stats */}
            <motion.div
                className="py-16 md:py-20"
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 1}}
                ref={statsRef}
            >
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-8">
                        <motion.div
                            className="bg-white p-8 rounded-xl border border-gray-100"
                            whileHover={{scale: 1.05}}
                            animate={statsInView ? {scale: 1} : {scale: 0.9}}
                            transition={{duration: 0.5}}
                        >
                            <div
                                className="bg-team-blue/10 rounded-full p-4 w-16 h-16 mb-6 flex items-center justify-center">
                                <Trophy className="h-8 w-8 text-team-blue"/>
                            </div>
                            <h3 className="text-2xl font-bold mb-2 text-team-blue">Engineering Inspiration</h3>
                            <p className="text-gray-600">2025 Season District Championship Achievement</p>
                        </motion.div>
                        <motion.div
                            className="bg-white p-8 rounded-xl border border-gray-100"
                            whileHover={{scale: 1.05}}
                            animate={statsInView ? {scale: 1} : {scale: 0.9}}
                            transition={{duration: 0.5}}
                        >
                            <div
                                className="bg-team-blue/10 rounded-full p-4 w-16 h-16 mb-6 flex items-center justify-center">
                                <Users className="h-8 w-8 text-team-blue"/>
                            </div>
                            <h3 className="text-2xl font-bold mb-2 text-team-blue">52+ Members</h3>
                            <p className="text-gray-600">Dedicated Students & Mentors</p>
                        </motion.div>
                        <motion.div
                            className="bg-white p-8 rounded-xl border border-gray-100"
                            whileHover={{scale: 1.05}}
                            animate={statsInView ? {scale: 1} : {scale: 0.9}}
                            transition={{duration: 0.5}}
                        >
                            <div
                                className="bg-team-blue/10 rounded-full p-4 w-16 h-16 mb-6 flex items-center justify-center">
                                <Wrench className="h-8 w-8 text-team-blue"/>
                            </div>
                            <h3 className="text-2xl font-bold mb-2 text-team-blue">1000+ Hours</h3>
                            <p className="text-gray-600">Community Work and Projects Invested</p>
                        </motion.div>
                    </div>
                </div>
            </motion.div>

            {/* Sponsors */}
            <motion.div
                className="py-16 md:py-20 bg-white"
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 1}}
            >
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-team-blue text-center mb-12">Our Sponsors</h2>
                    <div className="grid md:grid-cols-4 gap-4 justify-items-center">
                        {sponsors.slice(0, sponsors.length - 2).map((sponsor, index) => (
                            <motion.div
                                key={index}
                                className="flex items-center justify-center p-4"
                                whileHover={{scale: 1.1}}
                            >
                                <a href={sponsor.link} target="_blank" rel="noopener noreferrer">
                                    <img src={sponsor.logo} alt={sponsor.name} className="h-52 w-auto"/>
                                </a>
                            </motion.div>
                        ))}
                        <motion.div
                            className="flex items-center justify-center p-4 md:col-span-2"
                            whileHover={{scale: 1.1}}
                        >
                            <a href={sponsors[sponsors.length - 2].link} target="_blank" rel="noopener noreferrer">
                                <img src={sponsors[sponsors.length - 2].logo}
                                     alt={sponsors[sponsors.length - 2].name} className="h-52 w-auto"/>
                            </a>
                        </motion.div>
                        <motion.div
                            className="flex items-center justify-center p-4 md:col-span-2"
                            whileHover={{scale: 1.1}}
                        >
                            <a href={sponsors[sponsors.length - 1].link} target="_blank" rel="noopener noreferrer">
                                <img src={sponsors[sponsors.length - 1].logo}
                                     alt={sponsors[sponsors.length - 1].name} className="h-52 w-auto"/>
                            </a>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

export default HomePage;