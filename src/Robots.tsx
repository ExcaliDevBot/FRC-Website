import {
    Cpu,
    Zap,
    Gauge,
    Trophy,
    ArrowRight,
    Shield,
    PenTool as Tool,
    Sparkles,
    Anchor,
    Hexagon,
    Feather
} from 'lucide-react';
import {useEffect} from "react";

function Robots() {
      useEffect(() => {
        document.title = "Robots | Excalibur FRC";
    }, []);
    const robots = [
        {
            year: 2025,
            name: "Percival",
            game: "Reefscape",
            image: "img/robot.jpg",
            features: [
                {name: "Advanced Vision System", icon: <Cpu className="h-5 w-5"/>},
                {name: "Rapid Coral Scoring", icon: <Zap className="h-5 w-5"/>},
                {name: "Dynamic Swerve", icon: <Gauge className="h-5 w-5"/>}
            ],
            achievements: ["ISR1 Industrial Design Award", "ISR4 Engineering Inspiration Award", "DCMP Engineering Inspiration Award", "Qualified for Newton Division"],
            description: "Our most advanced robot yet, featuring state-of-the-art vision processing and precise scoring mechanisms."
        },
        {
            year: 2024,
            name: "Iron Sword",
            game: "Crecsendo",
            image: "img/iron-sword.jpeg",
            features: [
                {name: "Hybrid Intake", icon: <Tool className="h-5 w-5"/>},
                {name: "Auto-Balance", icon: <Shield className="h-5 w-5"/>},
                {name: "Durable Climb", icon: <Sparkles className="h-5 w-5"/>}
            ],
            achievements: ["ISR1 Industrial design Award", "ISR3 Excellence in Engeering Award", "ISCMP Industrial Design Award"],
            description: "A versatile robot designed for note shooting, featuring advanced autonomous capabilities."
        },
        {
            year: 2023,
            name: "Merlin",
            game: "ChargedUp",
            image: "img/merlin.JPG",
            features: [
                {name: "Smart Arm Control", icon: <Anchor className="h-5 w-5"/>},
                {name: "Auto-Ramp-Balancing", icon: <Feather className="h-5 w-5"/>},
                {name: "Dynamic Roller Gripper", icon: <Hexagon className="h-5 w-5"/>}
            ],
            achievements: ["ISR1 Imagery Award", "ISR3 Event Winner", "ISR3 District Engineering Inspiration Award", "2023isios Event Winner"],
            description: "Merlin excels in precision arm control and autonomous ramp balancing."
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <div className="relative h-[70vh] bg-team-blue overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-team-blue to-blue-900 opacity-90"></div>
                    <div
                        className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-fixed bg-center mix-blend-overlay"></div>
                </div>
                <div className="relative h-full flex items-center">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl">
                            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
                                Our Robots
                                <span className="text-team-gold block mt-6">Engineering Excellence</span>
                            </h1>
                            <p className="text-lg md:text-2xl text-gray-200 leading-relaxed mb-12 max-w-3xl">
                                Each year, we push the boundaries of innovation to create robots that combine
                                cutting-edge technology with precision engineering.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Robots Showcase */}
            <div className="py-12 md:py-24">
                <div className="container mx-auto px-4">
                    {robots.map((robot, index) => (
                        <div key={index} className="mb-16 md:mb-32 last:mb-0">
                            <div className="group relative bg-white rounded-3xl shadow-2xl overflow-hidden">
                                <div
                                    className="absolute inset-0 bg-gradient-to-br from-team-blue/5 to-team-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                {/* Year Badge */}
                                <div
                                    className="absolute top-4 right-4 md:top-8 md:right-8 bg-team-gold text-team-blue text-xl md:text-2xl font-bold px-4 py-2 md:px-6 md:py-2 rounded-full">
                                    {robot.year}
                                </div>

                                <div className="grid md:grid-cols-2 gap-6 md:gap-12 p-6 md:p-12">
                                    {/* Robot Image */}
                                    <div className="relative aspect-square rounded-2xl overflow-hidden">
                                        <img
                                            src={robot.image}
                                            alt={robot.name}
                                            className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>

                                    {/* Robot Details */}
                                    <div className="flex flex-col justify-center">
                                        <h2 className="text-2xl md:text-4xl font-bold text-team-blue mb-4">
                                            {robot.name}
                                        </h2>
                                        <p className="text-lg md:text-xl text-team-gold font-semibold mb-6">
                                            {robot.game} Season
                                        </p>
                                        <p className="text-gray-600 text-base md:text-lg mb-8">
                                            {robot.description}
                                        </p>

                                        {/* Features */}
                                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                                            {robot.features.map((feature, idx) => (
                                                <div key={idx} className="bg-gray-50 p-4 rounded-xl">
                                                    <div className="text-team-blue mb-2">{feature.icon}</div>
                                                    <p className="text-sm font-medium text-gray-700">{feature.name}</p>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Achievements */}
                                        <div className="space-y-3">
                                            <h3 className="text-lg md:text-xl font-semibold text-team-blue flex items-center">
                                                <Trophy className="h-5 w-5 mr-2 text-team-gold"/>
                                                Achievements
                                            </h3>
                                            {robot.achievements.map((achievement, idx) => (
                                                <div key={idx} className="flex items-center text-gray-700">
                                                    <ArrowRight className="h-4 w-4 mr-2 text-team-gold"/>
                                                    {achievement}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Technical Specs Section */}
            <div className="py-12 md:py-24 bg-gray-50">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-team-blue mb-12 md:mb-16">Technical
                        Excellence</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg">
                            <Cpu className="h-10 md:h-12 w-10 md:w-12 text-team-gold mx-auto mb-4 md:mb-6"/>
                            <h3 className="text-lg md:text-xl font-semibold text-team-blue mb-4">Advanced Control</h3>
                            <p className="text-gray-600">
                                State-of-the-art control systems powered by advanced algorithms and precise sensors.
                            </p>
                        </div>
                        <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg">
                            <Tool className="h-10 md:h-12 w-10 md:w-12 text-team-gold mx-auto mb-4 md:mb-6"/>
                            <h3 className="text-lg md:text-xl font-semibold text-team-blue mb-4">Custom
                                Manufacturing</h3>
                            <p className="text-gray-600">
                                In-house designed and manufactured components for optimal performance.
                            </p>
                        </div>
                        <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg">
                            <Zap className="h-10 md:h-12 w-10 md:w-12 text-team-gold mx-auto mb-4 md:mb-6"/>
                            <h3 className="text-lg md:text-xl font-semibold text-team-blue mb-4">Power Systems</h3>
                            <p className="text-gray-600">
                                Efficient power distribution and management for sustained performance.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Robots;