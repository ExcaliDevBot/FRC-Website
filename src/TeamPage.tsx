import { useEffect } from 'react';
import { Code, Zap, Wrench, Target, Camera, GraduationCap, Users } from 'lucide-react';

function TeamPage() {
    useEffect(() => {
        document.title = "The Team | Excalibur FRC";
    }, []);

    const mentors = [
        {name: "Eitan Cohen", role: "Lead Mentor", expertise: "Team Management"},
        {name: "Elad Ben Shlomo", role: "Co Lead Mentor", expertise: "Co-Lead Mentor and Electrical design"},
        {name: "Asaf Wolkinson", role: "Media Mentor", expertise: "Video and Editing"},
        {name: "Amit Grossberger", role: "FLL Head Supervisior", expertise: "Logistics and Supervisor"},
        {name: "Yaron Reznik", role: "Mechanical and CAD Mentor", expertise: "Mechanical Engineering"},
        {name: "Itai Grrenberger", role: "Mechanical Design", expertise: "Mechanical Engineering"},
        {name: "Hadar Wisel", role: "CAD Mentor ", expertise: "Mechanical Engineering"},
        {name: "Ori Hazani", role: "Manufacturing Mentor ", expertise: "Mechanical Engineering"},
        {name: "Ariel Korngut", role: "Strategy Mentor ", expertise: "Strategic Planning and Game Analysis"}
    ];

    const leadership = [
        {name: "Amit Sucher", role: "Captain"},
        {name: "Ori Korngut", role: "co-Captain"},
        {name: "Yehuda Rothstein", role: "Software Lead"},
        {name: "Elad Schajer", role: "Mechanical Lead"},
        {name: "Eylon Ben Shushan", role: "Electrical Lead"},
        {name: "Itamar Dudai", role: "Community Lead"},
        {name: "Amichai Sedley", role: "Media Lead"},
        {name: "Elad Cohen", role: "Strategy Lead"},
        {name: "Chagai Rosen", role: "Resources Lead"}
    ];

    const teamMembers = [
        "Uri Feist", "Itamar Morgenshtein", "Eitan Gottlieb", "Eliyah Ben Lulu", "Eliya Kalfon"
        , "Gilad Keller", "Ze'ev Yisrael Simons", "Yair Levi", "Yaer Nayot", "Yonatan Ben Shlomo", "Yishai Greenfeld",
        "Yishai Levran", "Nadav Yurman", "Nadav Philipson", "Noam Novoslevsky", "Netanel Ekshtein", "Ezra Nagar",
        "Azriel Saar", "Amichai Sedley", "Roi Hadad", "Ramiel Waldoks", "Shalev Levin", "Nadav Amiel", "Ariel Friedman",
        "Naveh Naftali", "Eliyav Shapira", "Yair Edri", "Yiftach Stossel", "Shachar Rozewitz", "Matan Keller", "Yedidya Berdugo",
        "Ori Siminovsky", "Eitan Kreiger", "Ariel Lipsker", "Asif Leshem", "Ariel Bergson", "Naveh Yeshpe", "Nevo Shifman"
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
        {name: "Michal Eliad", class: "2023", role: "Captain"},
        {name: "Itay Greenberger", class: "2023", role: "Mechanical Lead"},
        {name: "Yonatan Batat", class: "2023", role: "Electrical Lead"},
        {name: "Amit Grossberger", class: "2023", role: "Strategy Lead"},
        {name: "Tomer Ayash", class: "2023", role: "Mechanical Team Member"},
        {name: "Eyal Avraham", class: "2023", role: "Mechanical Team Member"},
        {name: "Eliyakim Kahanah", class: "2023", role: "Mechanical Team Member"},
        {name: "Maoz Penigstein", class: "2023", role: "Mechanical Team Member"},
        {name: "Nadav Siminovski", class: "2023", role: "Manufacturing Team Member"},
        {name: "Noam Snir", class: "2022", role: "Mechanical Team Member"},
        {name: "Hadar Visel", class: "2022", role: "Mechanical Team Member"},
        {name: "Yotam Shlomi", class: "2022", role: "Software Lead"},
        {name: "Yair Greenfeld", class: "2022", role: "Mechanical Lead"},
        {name: "Nitai Ben Shimol", class: "2018", role: "Captain"},
        {name: "Asaf Wolkinson", class: "2021", role: "Media Lead"},
        {name: "Shahar Paderski ", class: "2023", role: "Software Team Member"},
        {name: "Eitan Cohen ", class: "2021", role: "Strategy Lead"},
        {name: "Ariel Korngut ", class: "2021", role: "Captain"},
        {name: "Yaron Reznik ", class: "2021", role: "Captain"},
        {name: "Nave Peled ", class: "2021", role: "Electrical Lead"},
        {name: "Itamar Reinman ", class: "2021", role: "Strategy Lead"},
        {name: "Amit Akerman", class: "2021", role: "Software Lead"},
        {name: "Gil Izdopher ", class: "2021", role: "Mechanical Team Member"},
        {name: "Roi Sucher ", class: "2021", role: "Mechanical Team Member"},
    ];


    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="relative h-[70vh] md:h-[80vh] bg-team-blue overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-team-blue to-blue-900 opacity-90"></div>
                    <div
                        className="absolute inset-0 bg-[url('img/DCMP-EI.jpg')] bg-fixed bg-center mix-blend-overlay"></div>
                    <div
                        className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(212,175,55,0.12),transparent_60%)]"/>
                </div>
                <div
                    className="relative h-full flex flex-col justify-center items-center text-center md:text-left px-4 md:px-0">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 md:mb-6 relative">
                        Meet Our Team
                        <span className="text-team-gold block mt-3 md:mt-4 text-2xl md:text-3xl font-semibold">
                            The people behind Excalibur
                        </span>
                        <span
                            className="absolute top-0 right-4 md:right-12 text-sm md:text-base px-3 py-1 rounded-full bg-team-gold/20 text-team-gold font-bold shadow-md">
                            10 Years
                        </span>
                    </h1>
                    <p className="text-lg md:text-2xl text-gray-200 leading-relaxed max-w-3xl">
                        A diverse group of students and mentors building robots, learning together, and having fun.
                    </p>
                </div>
                <div className="absolute bottom-0 left-0 right-0">
                    <svg viewBox="0 0 1440 80" fill="none" className="w-full h-auto">
                        <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="rgb(249 250 251)"/>
                    </svg>
                </div>
            </div>

            {/* Leadership Section */}
            <div className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-10 text-slate-800">Leadership Team</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {leadership.map((leader, index) => (
                            <div key={index}
                                 className="relative overflow-hidden bg-gray-100 border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all hover:scale-105">
                                <div className="flex items-center gap-4">
                                    <div
                                        className="w-12 h-12 rounded-full bg-team-blue/10 flex items-center justify-center text-team-blue font-bold">
                                        {leader.name.split(' ').map(s => s[0]).slice(0, 2).join('')}
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-slate-800">{leader.name}</h3>
                                        <p className="text-slate-600">{leader.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Team Members */}
            <div className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-slate-800 text-center mb-6">Team Members</h2>
                    <p className="text-center text-slate-600 max-w-2xl mx-auto mb-8">Our full team — students across
                        roles and years. Click a name to learn more (coming soon).</p>
                    <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
                        {teamMembers.map((member, index) => (
                            <div key={index}
                                 className="bg-gray-100 border border-gray-200 text-slate-800 px-5 py-2 rounded-full shadow-sm hover:border-team-gold/60 hover:shadow-md transition-all cursor-pointer">
                                <p className="text-sm font-medium">{member}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Mentors Section */}
            <div className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-slate-800 text-center mb-12">Our Mentors</h2>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {mentors.map((mentor, index) => (
                            <div key={index}
                                 className="group bg-gray-100 p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow hover:scale-105">
                                <h3 className="text-lg font-semibold text-slate-800 mb-1">{mentor.name}</h3>
                                <p className="text-team-gold font-medium mb-1">{mentor.role}</p>
                                <p className="text-slate-600">{mentor.expertise}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Full Roster */}
            <div className="py-12 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl font-bold text-slate-800 text-center mb-6 flex items-center justify-center gap-3">
                        <GraduationCap className="h-7 w-7 text-slate-800"/>
                        <span>Full Roster</span>
                    </h2>
                    <div className="max-w-5xl mx-auto">
                        {(() => {
                            const set = new Set<string>();
                            leadership.forEach(l => set.add(l.name));
                            mentors.forEach(m => set.add(m.name));
                            teamMembers.forEach(t => set.add(t));
                            alumni.forEach(a => set.add(a.name));
                            const roster = Array.from(set).sort((a, b) => a.localeCompare(b));
                            return (
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                                    {roster.map((person, i) => (
                                        <div key={i}
                                             className="bg-gray-100 p-3 rounded-lg shadow-sm text-center border border-gray-200 hover:shadow-md transition">
                                            <p className="text-sm font-medium text-slate-800">{person}</p>
                                        </div>
                                    ))}
                                </div>
                            );
                        })()}
                    </div>
                </div>
            </div>

            {/* Subteams Section */}
            <div className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-slate-800 text-center mb-12">Our Subteams</h2>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {subteams.map((team, index) => (
                            <div key={index}
                                 className="bg-gray-100 p-8 rounded-2xl shadow-sm border border-gray-200 hover:shadow-lg transition hover:scale-105">
                                <div
                                    className="bg-team-blue/10 rounded-full p-4 w-14 h-14 flex items-center justify-center mb-5">
                                    <div className="text-team-blue">{team.icon}</div>
                                </div>
                                <h3 className="text-lg font-semibold text-slate-800 mb-2">{team.name}</h3>
                                <p className="text-slate-600">{team.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TeamPage;
