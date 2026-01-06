import {useEffect, useState} from 'react';
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
    Twitter,
    Sparkles
} from 'lucide-react';

function HomePage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const {ref: heroRef, inView: heroInView} = useInView({triggerOnce: true});
    const {ref: statsRef, inView: statsInView} = useInView({triggerOnce: true});
    const {ref: seasonRef, inView: seasonInView} = useInView({triggerOnce: true});

    useEffect(() => {
        document.title = "Home | Excalibur FRC";
    }, []);

    const statStyles = {
        "team-gold": {
            bg: "bg-team-gold/10",
            text: "text-team-gold"
        },
        "team-blue": {
            bg: "bg-team-blue/10",
            text: "text-team-blue"
        }
    };


    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const sponsors = [
        {name: "Yeshiva", logo: "img/yeshiva.png", link: "https://www.yeshiva.com/"},
        {name: "YRM", logo: "img/yrm.png", link: "https://www.yrm.com/"},
        {name: "PeerSpot", logo: "img/peerspot.png", link: "https://www.peerspot.com/"},
        {name: "mobileye", logo: "img/mobileye.jpg", link: "https://www.mobileye.com"},
        {name: "Segol", logo: "img/sagol.png", link: "https://www.sagol.com/"},
        {name: "Propal", logo: "img/propal.png", link: "https://www.propal.com/"},
        {name: "Palram", logo: "img/palram.webp", link: "https://www.palram.com/il/"},
        {name: "monday", logo: "img/monday.png", link: "https://www.monday.com"},
        {name: "SolidWorks", logo: "img/SolidWorks.png", link: "https://www.solidworks.com/"},
        {name: "Nvidia", logo: "img/nvidia.jpg", link: "https://www.nvidia.com/en-us/"},
        {name: "Mashaf", logo: "img/MASHAF.png", link: "https://www.mashaf.co.il/"},
        {name: "Polycryl", logo: "img/POLYCRYL.avif", link: "https://www.polycryl.co.il/"},
        {name: "LCS", logo: "img/LCS.jpg", link: "https://www.global-lcs.com/"},
        {name: "EDU GOV", logo: "img/EDUGOV.jpg", link: "https://shituf.education.gov.il/#/"},
        {name: "YBA", logo: "img/YBA.jpg", link: "https://yba.org.il/"},
        {name: "JetLaser", logo: "img/jetlaser.png", link: "https://www.jetlaser.com/"},
        {name: "YOZMA", logo: "img/YOZMA.png", link: "https://yozmatech.com/he/"},
        {name: "Modi'in", logo: "img/modiin.png", link: "https://www.modiin.muni.il/"},
        {name: "FIRST", logo: "img/FIRST.png", link: "https://www.firstinspires.org/"}
    ];

    return (
        <div className="min-h-screen">
            {/* ===== HERO SECTION ===== */}
            {/* ===== HERO SECTION (REDESIGNED) ===== */}
            <motion.section
                className="relative min-h-[85vh] md:min-h-[90vh] flex items-center bg-team-blue overflow-hidden"
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 1}}
                ref={heroRef}
            >
                {/* Background */}
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-[url('/img/robot.jpg')] bg-cover bg-top opacity-20"/>
                    <div
                        className="absolute inset-0 bg-gradient-to-br from-team-blue via-team-blue/95 to-team-blue/85"/>
                    <div
                        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(212,175,55,0.12),transparent_55%)]"/>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* LEFT — TEXT */}
                        <motion.div
                            initial={{y: 40, opacity: 0}}
                            animate={heroInView ? {y: 0, opacity: 1} : {}}
                            transition={{duration: 0.8}}
                            className="relative"
                        >
                            {/* Anniversary vertical accent */}
                            <div className="flex items-start gap-6 mb-6">
                                <div className="flex flex-col items-center">
                        <span
                            className="text-team-gold text-sm font-semibold tracking-widest rotate-180 [writing-mode:vertical-rl]">
                            YEARS
                        </span>
                                    <span className="text-team-gold text-3xl font-bold mt-2">10</span>
                                    <span className="w-px h-16 bg-team-gold/60 mt-3"/>
                                </div>

                                <div>
                                    <p className="text-team-gold/80 text-sm tracking-widest uppercase mb-3">
                                        Celebrating a decade of excellence
                                    </p>

                                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] text-copperplate">
                                        Team
                                        <span className="block text-team-gold mt-2">
                                Excalibur
                            </span>
                                    </h1>

                                    <p className="mt-4 text-2xl md:text-3xl text-white/70 font-light">
                                        FRC #6738
                                    </p>
                                </div>
                            </div>

                            <p className="mt-8 text-lg md:text-xl text-white/80 max-w-xl leading-relaxed">
                                Based in Modi'in, Israel — building robots, developing leaders,
                                and pushing engineering excellence since 2015.
                            </p>

                            <div className="mt-10 flex flex-col sm:flex-row gap-4">
                                <motion.button
                                    onClick={openModal}
                                    className="bg-team-gold text-team-blue px-8 py-4 rounded-xl font-bold shadow-lg shadow-team-gold/30 hover:bg-team-gold/90 transition"
                                    whileHover={{scale: 1.03}}
                                    whileTap={{scale: 0.98}}
                                >
                                    Contact Us
                                </motion.button>

                                <motion.a
                                    href="https://www.firstinspires.org/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-team-blue transition"
                                    whileHover={{scale: 1.03}}
                                    whileTap={{scale: 0.98}}
                                >
                                    About FIRST
                                </motion.a>
                            </div>
                        </motion.div>

                        {/* RIGHT — IMAGE */}
                        <motion.div
                            className="hidden lg:block"
                            initial={{x: 60, opacity: 0}}
                            animate={heroInView ? {x: 0, opacity: 1} : {}}
                            transition={{duration: 0.8, delay: 0.2}}
                        >
                            <div className="relative">
                                <div
                                    className="absolute -inset-6 bg-gradient-to-r from-team-gold/30 via-transparent to-team-gold/30 rounded-3xl blur-2xl opacity-60"/>
                                <div
                                    className="relative rounded-2xl overflow-hidden border border-white/20 backdrop-blur-sm">
                                    <img
                                        src="/img/houston.JPG"
                                        alt="Team Excalibur"
                                        className="w-full aspect-[4/3] object-cover"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Bottom wave */}
                <div className="absolute bottom-0 left-0 right-0">
                    <svg viewBox="0 0 1440 120" className="w-full h-auto">
                        <path
                            d="M0,60 C360,120 1080,0 1440,60 L1440,120 L0,120 Z"
                            fill="white"
                        />
                    </svg>
                </div>
            </motion.section>


            {/* Contact Modal */}
            {isModalOpen && (
                <motion.div
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 px-4"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    onClick={closeModal}
                >
                    <motion.div
                        className="bg-white p-8 rounded-2xl shadow-2xl max-w-md w-full"
                        initial={{scale: 0.9, y: 20}}
                        animate={{scale: 1, y: 0}}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h2 className="text-2xl font-bold mb-6 text-team-blue text-copperplate">Get In Touch</h2>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                                <div
                                    className="w-10 h-10 rounded-full bg-team-blue/10 flex items-center justify-center flex-shrink-0">
                                    <span className="text-team-blue">✉️</span>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Email</p>
                                    <p className="font-semibold text-team-blue">excaliburfrc@gmail.com</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                                <div
                                    className="w-10 h-10 rounded-full bg-team-blue/10 flex items-center justify-center flex-shrink-0">
                                    <span className="text-team-blue">📍</span>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Address</p>
                                    <p className="font-semibold text-team-blue">4 Reuven Street, Modi'in, Israel</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                                <div
                                    className="w-10 h-10 rounded-full bg-team-blue/10 flex items-center justify-center flex-shrink-0">
                                    <span className="text-team-blue">📞</span>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Phone</p>
                                    <p className="font-semibold text-team-blue">+972 50-3229870</p>
                                </div>
                            </div>
                        </div>
                        <button
                            onClick={closeModal}
                            className="w-full mt-6 bg-team-blue text-white py-3 rounded-xl font-semibold hover:bg-team-blue/90 transition"
                        >
                            Close
                        </button>
                    </motion.div>
                </motion.div>
            )}

            {/* ===== CURRENT SEASON SECTION ===== */}
            <motion.section
                className="relative py-24 md:py-32 bg-team-blue overflow-hidden"
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 0.8}}
                ref={seasonRef}
            >
                {/* Gold accent lines */}
                <div
                    className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-team-gold to-transparent opacity-60"/>
                <div
                    className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-team-gold to-transparent opacity-60"/>

                {/* Background glow */}
                <div
                    className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.08),transparent_70%)]"/>

                <div className="container mx-auto px-4 relative z-10">
                    {/* Section Header */}
                    <motion.div
                        className="text-center mb-16"
                        initial={{y: 30, opacity: 0}}
                        animate={seasonInView ? {y: 0, opacity: 1} : {}}
                        transition={{duration: 0.6}}
                    >
                        <span
                            className="inline-block bg-team-gold text-team-blue px-5 py-2 rounded-full text-xs font-bold tracking-widest uppercase mb-6">
                            Upcoming Season
                        </span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-copperplate">
                            2026 Season
                        </h2>
                        <p className="text-team-gold text-2xl md:text-3xl mt-4 font-bold tracking-wide text-copperplate">REBUILT</p>
                    </motion.div>

                    <div className="grid lg:grid-cols-5 gap-8 items-center">
                        {/* Image - takes 3 columns */}
                        <motion.div
                            className="lg:col-span-3 relative group"
                            initial={{x: -40, opacity: 0}}
                            animate={seasonInView ? {x: 0, opacity: 1} : {}}
                            transition={{duration: 0.6, delay: 0.2}}
                        >
                            <div
                                className="absolute -inset-2 bg-gradient-to-r from-team-gold/40 to-team-gold/20 rounded-2xl blur opacity-40 group-hover:opacity-70 transition-opacity duration-500"/>
                            <div className="relative rounded-2xl overflow-hidden border-2 border-team-gold/30">
                                <img
                                    src="/img/IMG_0318.JPG"
                                    alt="2025 Robot"
                                    className="w-full aspect-video object-cover"
                                />
                                <div
                                    className="absolute inset-0 bg-gradient-to-t from-team-blue/80 via-transparent to-transparent"/>
                                <div className="absolute bottom-4 left-4 right-4">
                                    <p className="text-white/80 text-sm">Our last seasons team's portrait</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Content cards - takes 2 columns */}
                        <motion.div
                            className="lg:col-span-2 space-y-6"
                            initial={{x: 40, opacity: 0}}
                            animate={seasonInView ? {x: 0, opacity: 1} : {}}
                            transition={{duration: 0.6, delay: 0.3}}
                        >
                            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
                                <p className="text-white/90 text-lg leading-relaxed">
                                    Taking on the <span
                                    className="text-team-gold font-semibold">REBUILT</span> challenge
                                    with advanced autonomous capabilities, precise scoring mechanisms, and innovative
                                    software.
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div
                                    className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-5 hover:border-team-gold/50 transition-colors">
                                    <Calendar className="h-7 w-7 text-team-gold mb-3"/>
                                    <p className="text-white/60 text-sm">Competition</p>
                                    <p className="text-white font-bold text-lg">March 2026</p>
                                </div>
                                <a
                                    href="https://github.com/ExcaliburFRC"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-5 hover:border-team-gold/50 transition-colors group"
                                >
                                    <Github className="h-7 w-7 text-team-gold mb-3"/>
                                    <p className="text-white/60 text-sm">Open Source</p>
                                    <p className="text-white font-bold text-lg group-hover:text-team-gold transition-colors">View
                                        Code →</p>
                                </a>
                            </div>

                            {/* Social links */}
                            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-5">
                                <p className="text-white/60 text-sm mb-4">Follow our journey</p>
                                <div className="flex gap-4">
                                    <a href="https://facebook.com/excaliburfrc" target="_blank"
                                       rel="noopener noreferrer"
                                       className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:bg-team-gold hover:text-team-blue transition-all">
                                        <Facebook className="h-5 w-5"/>
                                    </a>
                                    <a href="https://instagram.com/excalibur_6738/" target="_blank"
                                       rel="noopener noreferrer"
                                       className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:bg-team-gold hover:text-team-blue transition-all">
                                        <Instagram className="h-5 w-5"/>
                                    </a>
                                    <a href="https://youtube.com/@ExcaliburFRC" target="_blank"
                                       rel="noopener noreferrer"
                                       className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:bg-team-gold hover:text-team-blue transition-all">
                                        <Youtube className="h-5 w-5"/>
                                    </a>
                                    <a href="http://x.com/ExcaliburFrc" target="_blank" rel="noopener noreferrer"
                                       className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:bg-team-gold hover:text-team-blue transition-all">
                                        <Twitter className="h-5 w-5"/>
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* ===== TEAM STATS SECTION ===== */}
            <motion.section
                className="py-24 md:py-32 bg-gradient-to-b from-white to-gray-50"
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 0.8}}
                ref={statsRef}
            >
                <div className="container mx-auto px-4">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-team-blue text-copperplate">
                            Team Achievements
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Trophy,
                                title: "Engineering Inspiration",
                                subtitle: "2025 District Championship",
                                color: "team-gold"
                            },
                            {
                                icon: Users,
                                title: "52+ Members",
                                subtitle: "Dedicated Students & Mentors",
                                color: "team-blue"
                            },
                            {
                                icon: Wrench,
                                title: "1000+ Hours",
                                subtitle: "Community Work Invested",
                                color: "team-gold"
                            }
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                className="group relative bg-white p-8 rounded-2xl text-center hover:shadow-2xl transition-all duration-500"
                                initial={{y: 30, opacity: 0}}
                                animate={statsInView ? {y: 0, opacity: 1} : {}}
                                transition={{duration: 0.5, delay: index * 0.1}}
                                whileHover={{y: -8}}
                            >
                                <div
                                    className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-team-gold/30 transition-colors duration-500"/>
                                <div
                                    className={`w-20 h-20 rounded-2xl ${statStyles[stat.color].bg} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500`}>
                                    <stat.icon className={`h-10 w-10 ${statStyles[stat.color].text}`}/>
                                </div>

                                <h3 className="text-2xl font-bold text-team-blue text-copperplate mb-2">{stat.title}</h3>
                                <p className="text-gray-500">{stat.subtitle}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* ===== SPONSORS SECTION ===== */}
            <motion.section
                className="relative py-28 md:py-36 bg-white overflow-hidden"
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 0.8}}
            >
                {/* Subtle background texture */}
                <div
                    className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(1,34,101,0.04),transparent_70%)]"/>

                <div className="container mx-auto px-4 relative z-10">
                    {/* Header */}
                    <div className="text-center mb-20">
                        <p className="text-sm font-semibold tracking-widest uppercase text-team-gold mb-4">
                            Partners & Supporters
                        </p>

                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-team-blue text-copperplate">
                            Our Sponsors
                        </h2>

                        <div className="mx-auto mt-6 h-px w-24 bg-team-gold/60"/>

                        <p className="mt-6 max-w-xl mx-auto text-gray-600 text-lg leading-relaxed">
                            We are proud to be supported by organizations that believe in
                            education, engineering excellence, and community impact.
                        </p>
                    </div>

                    {/* Sponsors grid */}
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
                            {sponsors.map((sponsor, index) => (
                                <motion.a
                                    key={index}
                                    href={sponsor.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="
                            group
                            flex items-center justify-center
                            rounded-2xl
                            bg-gray-50
                            border border-gray-200
                            px-6 py-8
                            transition-all duration-300
                            hover:bg-white
                            hover:border-team-gold/40
                            hover:shadow-xl
                        "
                                    whileHover={{y: -4}}
                                >
                                    <img
                                        src={sponsor.logo}
                                        alt={sponsor.name}
                                        className="
                                max-h-16
                                md:max-h-20
                                w-auto
                                object-contain
                                grayscale
                                opacity-70
                                transition-all duration-300
                                group-hover:grayscale-0
                                group-hover:opacity-100
                            "
                                    />
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.section>


        </div>
    );
}

export default HomePage;
