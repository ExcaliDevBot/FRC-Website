import {Code, Zap, Users, Wrench, Target, Camera} from 'lucide-react';

function TeamPage() {
    const mentors = [
        {name: "Nave Peled", role: "Lead Mentor", expertise: "Team Managment"},
        {name: "Eitan Cohen", role: "Programming Mentor", expertise: "Software Development"},
        {name: "Ariel Korngut", role: "Strategy Mentor", expertise: "Strategic Planning and Game Analysis"},
        {name: "Ido Rozenbaum", role: "Mechanical and CAD Mentor", expertise: "Mechanical Engineering"}
    ];

    const leadership = [
        {name: "Asaf Kloot", role: "Captain"},
        {name: "Amit Sucher", role: "Co-Captain & Strategy"},
        {name: "Yoav Cohen", role: "Software Lead"},
        {name: "Yishay Greenfeld", role: "Mechanical Lead"},
        {name: "Eylon Ben Shushan", role: "Electrical Lead"},
        {name: "Itamar Dudai", role: "Community Lead"},
        {name: "Amichai Sedley", role: "Media Lead"},
        {name: "Noam Novoslevski", role: "CAD Lead"},
        {name: "Yonatan Ben - Shlomo", role: "Manufacturing Lead"},
        {name: "Itay Keller", role: "Localization Lead"},
        {name: "Ori Korngut", role: "Systems Admin"}
    ];

    const teamMembers = [
        "Azriel Saar", "Chagai Rosen", "Eitan Berman", "Eitan Gottlieb",
        "Ori Peer", "Elisha Flug", "Malachi Tzadok", "Nadav Yurman",
        "Netanel Ekshtein", "Ramiel Waldoks", "Roi Eliad", "Yinon Strauss",
        "Yishai Levran", "Asaf Hershkop", "Yehuda Rothstein", "Davidi Aharoni",
        "Eitan Freeman", "Elad Cohen", "Elad Shayer", "Gilad Keller",
        "Maor Patt", "Nehoari Bardogo", "Omer Familia", "Roi Duvdevani",
        "Yair Levi", "Yonah Goldberg"
    ];

    const subteams = [
        {
            name: "Software",
            description: "Programming, vision systems, and autonomous operations",
            icon: <Code className="h-6 w-6"/>
        },
        {name: "Mechanical", description: "Design, manufacturing, and assembly", icon: <Wrench className="h-6 w-6"/>},
        {name: "Electrical", description: "Electronics, wiring, and control systems", icon: <Zap className="h-6 w-6"/>},
        {name: "Strategy", description: "Game analysis and competition planning", icon: <Target className="h-6 w-6"/>},
        {name: "Media", description: "Documentation, social media, and outreach", icon: <Camera className="h-6 w-6"/>},
        {
            name: "Community",
            description: "Events, mentoring, and local engagement",
            icon: <Users className="h-6 w-6"/>
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <div className="relative h-[80vh] bg-team-blue overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-team-blue to-blue-900 opacity-90"></div>
                    <div
                        className="absolute inset-0 bg-[url('/DCMP-EI.jpg')] bg-fixed bg-center mix-blend-overlay"></div>
                </div>
                <div className="relative h-full flex items-center">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl text-center md:text-left">
                            <h1 className="text-4xl md:text-7xl font-bold text-white mb-4 md:mb-8">
                                Meet Our Team
                                <span className="text-team-gold block mt-4 md:mt-6">The People Behind Excalibur</span>
                            </h1>
                            <p className="text-lg md:text-2xl text-gray-200 leading-relaxed mb-6 md:mb-12 max-w-3xl mx-auto md:mx-0">
                                A diverse group of passionate students and mentors working together to
                                for robotics and engineering excellence, and also for Good Times:)
                            </p>
                            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
                                <button
                                    className="bg-team-gold text-team-blue px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold hover:bg-opacity-90 transition text-lg">
                                    Join Our Team
                                </button>
                                <button
                                    className="border-2 border-white text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold hover:bg-white hover:text-team-blue transition text-lg">
                                    Learn More
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Leadership Section */}
            <div className="py-12 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-8">Leadership Team</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {leadership.map((leader, index) => (
                            <div key={index} className="flex flex-col items-center p-4 border rounded-lg">
                                <h3 className="text-lg font-semibold mb-1">{leader.name}</h3>
                                <p className="text-gray-600">{leader.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* Mentors Section */}
            <div className="py-24 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-team-blue text-center mb-16">Our Mentors</h2>
                    <div className="grid md:grid-cols-4 gap-8">
                        {mentors.map((mentor, index) => (
                            <div key={index}
                                 className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                <h3 className="text-xl font-semibold text-team-blue mb-3">{mentor.name}</h3>
                                <p className="text-team-gold font-medium mb-2">{mentor.role}</p>
                                <p className="text-gray-600">{mentor.expertise}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Team Members Section */}
            <div className="py-24">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-team-blue text-center mb-16">Team Members</h2>
                    <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
                        {teamMembers.map((member, index) => (
                            <div key={index}
                                 className="bg-gradient-to-br from-team-blue to-blue-900 text-white px-6 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                                <p className="text-sm font-medium">{member}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Subteams Section */}
            <div className="py-24 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-team-blue text-center mb-16">Our Subteams</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {subteams.map((team, index) => (
                            <div key={index}
                                 className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                <div
                                    className="bg-team-blue/10 rounded-full p-4 w-14 h-14 flex items-center justify-center mb-6">
                                    <div className="text-team-blue">{team.icon}</div>
                                </div>
                                <h3 className="text-xl font-semibold text-team-blue mb-3">{team.name}</h3>
                                <p className="text-gray-600">{team.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Join the Team */}
            <div className="py-24 bg-team-blue relative overflow-hidden">
                <div
                    className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581092160607-ee22621dd758?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-10"></div>
                <div className="container mx-auto px-4 text-center relative">
                    <h2 className="text-4xl font-bold text-white mb-6">Join Team Excalibur</h2>
                    <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                        Are you passionate about robotics, engineering, or making a difference?
                        We're always looking for dedicated students to join our team!
                    </p>
                    <button
                        className="bg-team-gold text-team-blue px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition">
                        Apply Now
                    </button>
                </div>
            </div>
        </div>
    );
}

export default TeamPage;