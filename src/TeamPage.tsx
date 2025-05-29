import {Code, Zap, Users, Wrench, Target, Camera} from 'lucide-react';

function TeamPage() {
    const mentors = [
        {name: "Eitan Cohen", role: "Lead Mentor", expertise: "Team Management"},
        {name: "Elad Ben Shlomo", role: "Electrical Mentor", expertise: "Software Development"},
        {name: "Amit Grossberger", role: "Strategy Mentor and FLL", expertise: "Strategic Planning and Game Analysis"},
        {name: "Yaron Reznik", role: "Mechanical and CAD Mentor", expertise: "Mechanical Engineering"}
    ];

    const leadership = [
        {name: "Amit Sucher", role: "Captain"},
        {name: "Ori Korngt", role: "Co-Captain"},
        {name: "Yehuda Rothstein", role: "Software Lead"},
        {name: "Yishay Greenfeld", role: "Mechanical Lead"},
        {name: "Eylon Ben Shushan", role: "Electrical Lead"},
        {name: "Itamar Dudai", role: "Community Lead"},
        {name: "Amichai Sedley", role: "Media Lead"},
        {name: "Chagai Rosen", role: "Resources Lead"}
    ];

    const teamMembers = [
        "Azriel Saar", "Eitan Gottlieb", "Chagai Rosen", "Eliyah Ben Lulu", "Gilad Keller", "Itamar Morgenshtein", "Malachi Tzadok",
        "Nadav Philipson", "Nadav Yurman", "Noam Novoslevsky", "Ori Peer", "Ramiel Waldoks", "Roi Duvdevani", "Uri Feist", "Yonatan Ben Shlomo",
        "Itamar Cohen", "Elad Cohen", "Yaer Nayot", "Yishay Levran", "Yair Levi", "Netanel Ekshtein", "Eliyah Kalfon", "Elad Shayer"
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

    const alumni = [
        {name: "Yoav Cohen", class: "2025", role: "Software Lead"},
        {name: "Itay Keller", class: "2025", role: "Localization Lead"},
        {name: "Omer Familia", class: "2025", role: "Electrical Team Member"},
        {name: "Asaf Hershkop", class: "2025", role: "Software Team Member"},
        {name: "Nehorai Bardogo", class: "2025", role: "Mechanical Team Member"},
        {name: "Ziv Magen", class: "2025", role: "Mechanical Team Member"},
        {name: "Roi Eliad", class: "2025", role: "Mechanical Team Member"},
        {name: "Yonah Goldberg", class: "2025", role: "Community Team Member"},
        {name: "Maor Patt", class: "2025", role: "Electrical Team Member"},
        {name: "Aviad Reingold", class: "2024", role: "Captian"},
        {name: "Shai Grossman", class: "2024", role: "Software Lead"},
        {name: "Eitan Barth", class: "2024", role: "Electrical Lead"},
        {name: "Elad Ben Shlomo", class: "2024", role: "Electrical Lead"},
        {name: "Ori Gantz", class: "2024", role: "Electrical Lead"},
        {name: "Liam Cohen", class: "2024", role: "Media Lead"},
    ];
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <div className="relative h-[80vh] bg-team-blue overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-team-blue to-blue-900 opacity-90"></div>
                    <div
                        className="absolute inset-0 bg-[url('img/DCMP-EI.jpg')] bg-fixed bg-center mix-blend-overlay"></div>
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

            {/* Alumni Section */}
            <div className="py-12 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-team-blue text-center mb-8">Our Alumni</h2>
                    {Object.entries(
                        alumni.reduce((groups, alum) => {
                            groups[alum.class] = groups[alum.class] || [];
                            groups[alum.class].push(alum);
                            return groups;
                        }, {} as Record<string, typeof alumni>)
                    )
                        .sort(([yearA], [yearB]) => parseInt(yearB) - parseInt(yearA)) // Sort years in descending order
                        .map(([year, alumniGroup]) => (
                            <div key={year} className="mb-8 ">
                                <h3 className="text-xl font-semibold text-gray-600 mb-4">Class of {year}</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-gray-300 p-4 rounded-lg">
                                    {alumniGroup.map((alum, index) => (
                                        <div key={index} className="text-team-blue text-center">
                                            <h4 className="text-lg font-medium italic">{alum.name}</h4>
                                            <p className="text-sm italic">{alum.role}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
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
        </div>
    );
}

export default TeamPage;