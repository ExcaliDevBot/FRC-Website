import {
    Book,
    Code,
    PenTool as Tool,
    Video,
    Download,
    FileText,
    Cpu,
    Wrench,
    Users,
    Lightbulb,
    GraduationCap,
    ChevronRight,
    Shield,
    Type,
    Palette
} from 'lucide-react';

function Resources() {
    const categories = [
        {
            title: "Technical Documentation",
            icon: <Code className="h-8 w-8"/>,
            resources: [
                {
                    title: "Robot Control System",
                    description: "Complete documentation for the FRC Control System, including setup guides and best practices",
                    type: "Documentation",
                    format: "PDF & Web",
                    lastUpdated: "March 2024",
                    link: "#",
                    icon: <Cpu className="h-6 w-6"/>
                },
                {
                    title: "CAD Files & Models",
                    description: "3D models, assembly instructions, and design files for our competition robots",
                    type: "Technical Files",
                    format: "STEP, SLDPRT",
                    lastUpdated: "February 2024",
                    link: "#",
                    icon: <Tool className="h-6 w-6"/>
                },
                {
                    title: "Electrical Schematics",
                    description: "Detailed wiring diagrams and electrical system documentation",
                    type: "Technical Files",
                    format: "PDF",
                    lastUpdated: "January 2024",
                    link: "#",
                    icon: <Wrench className="h-6 w-6"/>
                }
            ]
        },
        {
            title: "Learning Materials",
            icon: <Book className="h-8 w-8"/>,
            resources: [
                {
                    title: "Programming Fundamentals",
                    description: "Learn Java programming basics with FRC-specific examples and exercises",
                    type: "Course",
                    format: "Video & Text",
                    lastUpdated: "March 2024",
                    link: "#",
                    icon: <Code className="h-6 w-6"/>
                },
                {
                    title: "Mechanical Design Principles",
                    description: "Introduction to mechanical engineering concepts for robotics",
                    type: "Course",
                    format: "Interactive",
                    lastUpdated: "February 2024",
                    link: "#",
                    icon: <Tool className="h-6 w-6"/>
                },
                {
                    title: "Vision Processing Guide",
                    description: "Computer vision tutorials and implementation guides for FRC",
                    type: "Tutorial",
                    format: "PDF & Code",
                    lastUpdated: "March 2024",
                    link: "#",
                    icon: <Lightbulb className="h-6 w-6"/>
                }
            ]
        },
        {
            title: "Team Resources",
            icon: <Users className="h-8 w-8"/>,
            resources: [
                {
                    title: "Team Handbook",
                    description: "Comprehensive guide to team policies, procedures, and expectations",
                    type: "Document",
                    format: "PDF",
                    lastUpdated: "2024 Season",
                    link: "#",
                    icon: <FileText className="h-6 w-6"/>
                },
                {
                    title: "Safety Manual",
                    description: "Essential safety guidelines and procedures for the workshop",
                    type: "Document",
                    format: "PDF",
                    lastUpdated: "March 2024",
                    link: "#",
                    icon: <Shield className="h-6 w-6"/>
                },
                {
                    title: "Competition Checklist",
                    description: "Detailed checklist for competition preparation and packing",
                    type: "Document",
                    format: "PDF",
                    lastUpdated: "2024 Season",
                    link: "#",
                    icon: <FileText className="h-6 w-6"/>
                }
            ]
        },
        {
            title: "Training Materials",
            icon: <GraduationCap className="h-8 w-8"/>,
            resources: [
                {
                    title: "New Member Orientation",
                    description: "Introduction to the team, FRC, and basic robotics concepts",
                    type: "Course",
                    format: "Video",
                    lastUpdated: "2024 Season",
                    link: "#",
                    icon: <Video className="h-6 w-6"/>
                },
                {
                    title: "Workshop Skills",
                    description: "Basic tool usage and safety training for the workshop",
                    type: "Tutorial",
                    format: "Video & PDF",
                    lastUpdated: "January 2024",
                    link: "#",
                    icon: <Tool className="h-6 w-6"/>
                },
                {
                    title: "Leadership Training",
                    description: "Materials for developing team leadership and management skills",
                    type: "Course",
                    format: "Interactive",
                    lastUpdated: "2024 Season",
                    link: "#",
                    icon: <Users className="h-6 w-6"/>
                }
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="relative bg-team-blue py-24">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-team-blue to-blue-900 opacity-90"></div>
                    <div
                        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center mix-blend-overlay"></div>
                </div>
                <div className="relative container mx-auto px-4">
                    <div className="max-w-3xl">
                        <h1 className="text-6xl font-bold text-white mb-6">
                            Resources
                            <span className="text-team-gold block mt-4">Knowledge Hub</span>
                        </h1>
                        <p className="text-xl text-gray-200 leading-relaxed">
                            Access our comprehensive collection of technical documentation, educational materials,
                            and team resources to support your robotics journey.
                        </p>
                    </div>
                </div>
            </div>


            {/* Brand Assets Section */}
            <div className="bg-gray-50 py-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <Type className="h-12 w-12 text-team-gold mx-auto mb-6"/>
                            <h2 className="text-4xl font-bold text-team-blue mb-4">Brand Assets</h2>
                            <p className="text-xl text-gray-600">Our official brand guidelines and assets for consistent
                                team representation</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-12">
                            {/* Typography Section */}
                            <div className="bg-white rounded-2xl shadow-lg p-8">
                                <h3 className="text-2xl font-bold text-team-blue mb-6 flex items-center">
                                    <Type className="h-6 w-6 mr-3"/>
                                    Typography
                                </h3>

                                <div className="space-y-8">
                                    {/* Primary Font */}
                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-700 mb-4">Primary Font -
                                            Copperplate Gothic Bold</h4>
                                        <div className="space-y-4">
                                            <div className="p-4 bg-gray-50 rounded-lg">
                                                <p className="text-4xl text-team-blue"
                                                   style={{fontWeight: 700, fontFamily: 'Copperplate'}}>
                                                    Copperplate Bold
                                                </p>
                                                <p className="text-sm text-gray-500 mt-2 ">
                                                    Used for headlines and primary headings
                                                </p>
                                            </div>
                                            <div className="p-4 bg-gray-50 rounded-lg">
                                                <p className="text-2xl text-team-blue"
                                                   style={{fontWeight: 500, fontFamily: 'Copperplate'}}>
                                                    Copperplate Medium
                                                </p>
                                                <p className="text-sm text-gray-500 mt-2">
                                                    Used for subheadings and emphasis
                                                </p>
                                            </div>
                                            <div className="p-4 bg-gray-50 rounded-lg">
                                                <p className="text-xl text-team-blue"
                                                   style={{fontWeight: 400, fontFamily: 'Copperplate'}}>
                                                    Copperplate Regular
                                                </p>
                                                <p className="text-sm text-gray-500 mt-2">
                                                    Used for body text and general content
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Font Examples */}
                                    <div className="border-t pt-8">
                                        <h4 className="text-lg font-semibold text-gray-700 mb-4">Text Examples</h4>
                                        <div className="space-y-6">
                                            <div>
                                                <p className="text-4xl font-bold text-team-blue mb-2"
                                                   style={{fontFamily: 'Copperplate'}}>Headline Text</p>
                                                <p className="text-sm text-gray-500">Copperplate Gothic Bold - 36px</p>
                                            </div>
                                            <div>
                                                <p className="text-2xl font-medium text-team-blue mb-2"
                                                   style={{fontFamily: 'Copperplate'}}>Subheading
                                                    Text</p>
                                                <p className="text-sm text-gray-500">Copperplate Gothic Medium -
                                                    24px</p>
                                            </div>
                                            <div>
                                                <p className="text-base text-gray-600 mb-2"
                                                   style={{fontFamily: 'Copperplate'}}>Body text example with our
                                                    standard paragraph styling. This demonstrates how regular content
                                                    appears on our website.</p>
                                                <p className="text-sm text-gray-500">Copperplate Gothic Regular -
                                                    16px</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Colors Section */}
                            <div className="bg-white rounded-2xl shadow-lg p-8">
                                <h3 className="text-2xl font-bold text-team-blue mb-6 flex items-center">
                                    <Palette className="h-6 w-6 mr-3"/>
                                    Brand Colors
                                </h3>

                                <div className="space-y-8">
                                    {/* Primary Colors */}
                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-700 mb-4">Primary Colors</h4>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <div className="h-24 bg-team-blue rounded-lg shadow-inner"></div>
                                                <p className="font-medium text-gray-700">Team Blue</p>
                                                <p className="text-sm text-gray-500">#012265</p>
                                            </div>
                                            <div className="space-y-2">
                                                <div className="h-24 bg-team-gold rounded-lg shadow-inner"></div>
                                                <p className="font-medium text-gray-700">Team Gold</p>
                                                <p className="text-sm text-gray-500">#d4af37</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Color Usage */}
                                    <div className="border-t pt-8">
                                        <h4 className="text-lg font-semibold text-gray-700 mb-4">Color Usage</h4>
                                        <div className="space-y-4">
                                            <div className="p-4 bg-team-blue text-white rounded-lg">
                                                <p className="font-medium">Primary Background</p>
                                                <p className="text-sm opacity-80">Used for main sections and important
                                                    elements</p>
                                            </div>
                                            <div className="p-4 bg-team-gold text-team-blue rounded-lg">
                                                <p className="font-medium">Accent Color</p>
                                                <p className="text-sm opacity-80">Used for highlights and call-to-action
                                                    elements</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Resource Categories */}
            <div className="container mx-auto px-4 py-12">
                {categories.map((category, index) => (
                    <div key={index} className="mb-16 last:mb-0">
                        <div className="flex items-center mb-8">
                            <div className="bg-team-blue/10 p-4 rounded-xl mr-4">
                                <div className="text-team-blue">
                                    {category.icon}
                                </div>
                            </div>
                            <h2 className="text-3xl font-bold text-team-blue">{category.title}</h2>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {category.resources.map((resource, idx) => (
                                <a
                                    key={idx}
                                    href={resource.link}
                                    className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
                                >
                                    <div className="p-6">
                                        <div className="flex items-start justify-between mb-4">
                                            <div className="bg-team-blue/10 p-3 rounded-lg">
                                                <div
                                                    className="text-team-blue group-hover:text-team-gold transition-colors">
                                                    {resource.icon}
                                                </div>
                                            </div>
                                            <ChevronRight
                                                className="h-5 w-5 text-gray-400 group-hover:text-team-gold transform group-hover:translate-x-1 transition-all"/>
                                        </div>
                                        <h3 className="text-xl font-semibold text-team-blue mb-2 group-hover:text-team-gold transition-colors">
                                            {resource.title}
                                        </h3>
                                        <p className="text-gray-600 mb-4 line-clamp-2">
                                            {resource.description}
                                        </p>
                                        <div className="flex items-center justify-between text-sm">
                      <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
                        {resource.format}
                      </span>
                                            <span className="text-gray-500">
                        Updated: {resource.lastUpdated}
                      </span>
                                        </div>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            {/* Quick Access */}
            <div className="bg-white py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-bold text-team-blue mb-8">Quick Access Downloads</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            <button
                                className="flex items-center justify-center space-x-2 bg-team-blue text-white px-6 py-4 rounded-lg hover:bg-opacity-90 transition">
                                <Download className="h-5 w-5"/>
                                <span>Team Handbook</span>
                            </button>
                            <button
                                className="flex items-center justify-center space-x-2 bg-team-gold text-team-blue px-6 py-4 rounded-lg hover:bg-opacity-90 transition">
                                <Download className="h-5 w-5"/>
                                <span>CAD Files</span>
                            </button>
                            <button
                                className="flex items-center justify-center space-x-2 bg-team-blue text-white px-6 py-4 rounded-lg hover:bg-opacity-90 transition">
                                <Download className="h-5 w-5"/>
                                <span>Safety Manual</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Resources;