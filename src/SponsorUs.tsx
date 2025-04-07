import {
    Trophy,
    Target,
    Rocket,
    Users,
    ChevronRight,
    Award,
    Lightbulb,
    Globe,
    Gift,
    HandHeart,
    Star
} from 'lucide-react';

function SponsorUs() {
    const sponsorshipLevels = [
        {
            name: "Diamond",
            amount: "$1,000+",
            color: "bg-blue-500",
            benefits: [
                "Large logo on robot",
                "Premium placement on team uniforms",
                "Featured on website homepage",
                "Social media spotlight",
                "VIP access to team events",
                "Exclusive mentoring opportunities",
                "Recognition in all presentations",
                "Team demonstration at sponsor location"
            ],
            icon: <Trophy className="h-8 w-8 text-blue-500"/>
        },
        {
            name: "Platinum",
            amount: "$500+",
            color: "bg-gray-300",
            benefits: [
                "Medium logo on robot",
                "Logo on team uniforms",
                "Website recognition",
                "Social media mentions",
                "Team event invitations",
                "Recognition in presentations",
                "Team demonstration"
            ],
            icon: <Award className="h-8 w-8 text-gray-600"/>
        },
        {
            name: "Gold",
            amount: "$250+",
            color: "bg-team-gold",
            benefits: [
                "Small logo on robot",
                "Website recognition",
                "Social media mention",
                "Team event invitations",
                "Recognition in presentations"
            ],
            icon: <Star className="h-8 w-8 text-team-gold"/>
        },
        {
            name: "Silver",
            amount: "$100",
            color: "bg-gray-200",
            benefits: [
                "Website recognition",
                "Social media mention",
                "Team event invitations"
            ],
            icon: <HandHeart className="h-8 w-8 text-gray-400"/>
        }
    ];

    const impactMetrics = [
        {
            metric: "1,000+",
            label: "Students Reached",
            icon: <Users className="h-6 w-6"/>
        },
        {
            metric: "30+",
            label: "Community Events",
            icon: <Globe className="h-6 w-6"/>
        },
        {
            metric: "50+",
            label: "Team Members",
            icon: <Target className="h-6 w-6"/>
        },
        {
            metric: "8+",
            label: "Years of Excellence",
            icon: <Trophy className="h-6 w-6"/>
        }
    ];

    const benefits = [
        {
            title: "Brand Visibility",
            description: "Showcase your brand to thousands at competitions and community events",
            icon: <Rocket className="h-6 w-6"/>
        },
        {
            title: "Community Impact",
            description: "Make a lasting difference in STEM education and youth development",
            icon: <HandHeart className="h-6 w-6"/>
        },
        {
            title: "Innovation Connection",
            description: "Connect with next-generation talent and cutting-edge robotics",
            icon: <Lightbulb className="h-6 w-6"/>
        },
        {
            title: "Tax Benefits",
            description: "Receive tax deductions for your charitable contribution",
            icon: <Gift className="h-6 w-6"/>
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <div className="relative h-[70vh] bg-team-blue overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-team-blue to-blue-900 opacity-90"></div>
                    <div
                        className="absolute inset-0 bg-[url('/img/')] bg-cover bg-center mix-blend-overlay"></div>
                </div>
                <div className="relative h-full flex items-center">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl">
                            <h1 className="text-7xl font-bold text-white mb-8">
                                Partner With Us
                                <span className="text-team-gold block mt-6">Invest in Innovation</span>
                            </h1>
                            <p className="text-2xl text-gray-200 leading-relaxed mb-12">
                                Join Team Excalibur in shaping the future of robotics and STEM education.
                                Your support makes a lasting impact on young innovators.
                            </p>
                            <a
                                href="https://www.jgive.com/new/he/ils/donation-targets/148695"
                                className="bg-team-gold text-team-blue px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition flex items-center text-lg"
                            >
                                Become a Sponsor <ChevronRight className="ml-2 h-5 w-5"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Impact Metrics */}
            <div className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-4 gap-8">
                        {impactMetrics.map((metric, index) => (
                            <div key={index} className="bg-white p-8 rounded-xl shadow-sm text-center">
                                <div
                                    className="bg-team-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <div className="text-team-blue">
                                        {metric.icon}
                                    </div>
                                </div>
                                <div className="text-4xl font-bold text-team-blue mb-2">{metric.metric}</div>
                                <div className="text-gray-600">{metric.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Sponsorship Levels */}
            <div className="py-24">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-team-blue mb-6">Sponsorship Levels</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Choose the partnership level that best aligns with your organization's goals.
                            Each tier offers unique benefits and opportunities for engagement.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {sponsorshipLevels.map((level, index) => (
                            <div key={index} className="relative group">
                                <div
                                    className="relative bg-white rounded-2xl p-8 transform group-hover:translate-y-[-4px] transition-transform duration-300">
                                    <div
                                        className="bg-team-blue/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                                        {level.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold text-team-blue mb-2">{level.name}</h3>
                                    <div className="text-3xl font-bold text-team-gold mb-6">{level.amount}</div>
                                    <ul className="space-y-3">
                                        {level.benefits.map((benefit, idx) => (
                                            <li key={idx} className="flex items-start">
                                                <ChevronRight className="h-5 w-5 text-team-gold mr-2 mt-0.5"/>
                                                <span className="text-gray-600">{benefit}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-12 text-center">
                        <div
                            className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
                            <a
                                href="https://www.jgive.com/new/he/ils/donation-targets/148695"
                                className="inline-block bg-team-blue text-white py-3 px-6 rounded-lg font-semibold hover:bg-opacity-90 transition"
                            >
                                Donate Online
                            </a>
                        </div>
                        <p className="text-center text-gray-600 mt-8">* All sponsorship levels are tax-deductible.</p>
                        <p className="text-center text-gray-600 mt-8">** For any Questions or just to hear about us: +972 50-895-1108.</p>

                    </div>
                </div>
            </div>

            {/* Benefits Section */}
            <div className="py-24 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-team-blue mb-6">Why Sponsor Us?</h2>
                            <p className="text-xl text-gray-600">
                                Partner with Team Excalibur and make a lasting impact while gaining valuable benefits
                                for your organization.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8">
                            {benefits.map((benefit, index) => (
                                <div key={index}
                                     className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                                    <div className="flex items-start">
                                        <div className="bg-team-blue/10 p-3 rounded-lg mr-4">
                                            <div className="text-team-blue">
                                                {benefit.icon}
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold text-team-blue mb-2">{benefit.title}</h3>
                                            <p className="text-gray-600">{benefit.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SponsorUs;