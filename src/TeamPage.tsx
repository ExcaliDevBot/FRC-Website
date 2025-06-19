import {useEffect} from 'react';
import {Code, Zap, Wrench, Target, Camera, GraduationCap, Users} from 'lucide-react';

function TeamPage() {
    useEffect(() => {
        document.title = "The Team | Excalibur FRC";
    }, []);

    const mentors = [
        {name: "Eitan Cohen", role: "Lead Mentor", expertise: "Team Management"},
        {name: "Elad Ben Shlomo", role: "Electrical Mentor", expertise: "Co-Lead Mentor and Electrical design"},
        {name: "Amit Grossberger", role: "FLL Supervisior", expertise: "Logistics and Supervisor"},
        {name: "Yaron Reznik", role: "Mechanical and CAD Mentor", expertise: "Mechanical Engineering"},
        {name: "Ariel Korngut", role: "Strategy Mentor ", expertise: "Strategic Planning and Game Analysis"}
    ];

    const leadership = [
        {name: "Amit Sucher", role: "Captain"},
        {name: "Ori Korngt", role: "co - Captain"},
        {name: "Yehuda Rothstein", role: "Software Lead"},
        {name: "Roi Duvdevani", role: "Mechanical Lead"},
        {name: "Eylon Ben Shushan", role: "Electrical Lead"},
        {name: "Itamar Dudai", role: "Community Lead"},
        {name: "Amichai Sedley", role: "Media Lead"},
        {name: "Elad Schajer", role: "-==-  Fun Dictator  -==-"},
        {name: "Chagai Rosen", role: "Resources Lead"}
    ];

    const teamMembers = [
        "Uri Feist", "Itamar Cohen Elias", "Itamar Morgenshtein", "Eitan Berman", "Eitan Gottlieb", "Eliyah Ben Lulu", "Eliyah Kalphon",
        "Elad Cohen", "Elad Shayer", "Gilad Keller", "Ze'ev Yisrael Simons", "Yair Levi", "Yaer Nayot", "Yonatan Ben Shlomo", "Yishai Greenfeld",
        "Yishai Levran", "Malachi Tzadok", "Nadav Yurman", "Nadav Philipson", "Noam Novoslevsky", "Netanel Ekshtein", "Ezra Nagar",
        "Azriel Saar", "Amichai Sedley", "Roi Hadad", "Ramiel Waldoks", "Shalev Levin", "Nadav Amiel", "Ariel Friedman",
        "Naveh Naftali", "Eliyav Shapira", "Yair Edri", "Yiftach Stossel", "Shachar Rozewitz", "Matan Keller", "Yedidya Berdugo",
        "Ori Siminovsky", "Eitan Kreiger", "Ariel Lipsker", "Asif Leshem", "Ariel Bergson", "Naveh Yeshpe"
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
        {name: "Asaf Kloot", class: "2025", role: "Captain"},
        {name: "Yoav Cohen", class: "2025", role: "Software Lead"},
        {name: "Itay Keller", class: "2025", role: "Localization Lead"},
        {name: "Yinon Strauss", class: "2025", role: "Electrical Team Member / מלווה מוסדות"},
        {name: "Omer Familia", class: "2025", role: "Electrical Team Member"},
        {name: "Asaf Hershkop", class: "2025", role: "Software Team Member"},
        {name: "Nehorai Berdugo", class: "2025", role: "Mechanical Team Member / א' הווי ובידור "},
        {name: "Ziv Magen", class: "2025", role: "CAD Team Member / שחקן אנושי"},
        {name: "Roi Eliad", class: "2025", role: "Mechanical Team Member"},
        {name: "Yonah Goldberg", class: "2025", role: "Community Team Member"},
        {name: "Maor Patt", class: "2025", role: "Electrical Team Member"},
        {name: "Aviad Reingold", class: "2024", role: "Captain / א' הווי ובידור"},
        {name: "Shai Grossman", class: "2024", role: "Software Lead / נהג מרכב"},
        {name: "Eitan Barth", class: "2024", role: "Electrical Lead"},
        {name: "Elad Ben Shlomo", class: "2024", role: "Electrical Team Member"},
        {name: "Ori Gantz", class: "2024", role: "CAD Lead"},
        {name: "Ori Hazani", class: "2024", role: "Manufacturing Lead"},
        {name: "Liam Cohen", class: "2024", role: "Media Lead"},
        {name: "Nitai Ben Shimol", class: "2018", role: "Captain"},
        {name: "Asaf Wolkinson", class: "2021", role: "Media Lead / בוגר מלווה"},
        {name: "Shahar Paderski ", class: "2023", role: "Software Team Member"},
        {name: "Eitan Cohen ", class: "2021", role: "Strategy Lead / מנטור ראשי "},
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
                        </div>
                    </div>
                </div>
            </div>

            {/* Leadership Section */}
            <div className="py-12 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-8">Leadership Team</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center items-center">
                        {leadership.map((leader, index) => (
                            <div
                                key={index}
                                className={`flex flex-col items-center p-4 border rounded-lg ${
                                    index === leadership.length - 1 ? 'lg:col-start-3' : ''
                                }`}
                            >
                                <h3 className="text-lg font-semibold mb-1">{leader.name}</h3>
                                <p className="text-gray-600">{leader.role}</p>
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


            {/* Mentors Section */}
            <div className="py-24 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-team-blue text-center mb-16">Our Mentors</h2>
                    <div className="grid md:grid-cols-3 gap-8">
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

            {/* Alumni Section */}
            <div className="py-12 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-team-blue text-center mb-8 flex items-center justify-center space-x-3">
                        <GraduationCap className="h-8 w-8 text-team-blue"/>
                        <span>Our Alumni</span>
                    </h2>
                    {Object.entries(
                        alumni.reduce((groups, alum) => {
                            groups[alum.class] = groups[alum.class] || [];
                            groups[alum.class].push(alum);
                            return groups;
                        }, {} as Record<string, typeof alumni>)
                    )
                        .sort(([yearA], [yearB]) => parseInt(yearB) - parseInt(yearA)) // Sort years in descending order
                        .map(([year, alumniGroup]) => (
                            <div key={year} className="mb-8">
                                <h3 className="text-xl font-semibold text-gray-600 mb-4">Class of {year}</h3>
                                <div
                                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 bg-gray-300 p-4 rounded-lg">
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