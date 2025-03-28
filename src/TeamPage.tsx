import React from 'react';

const TeamPage = () => {
    return (
        <div className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-team-blue text-center mb-12">Our Team</h2>

                {/* Leadership */}
                <div className="mb-12">
                    <h3 className="text-2xl font-bold text-team-blue mb-6">Leadership</h3>
                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            {name: "Asaf Kloot", role: "Captain"},
                            {name: "Amit Sucher", role: "Co-Captain"},
                            {name: "Yoav Cohen", role: "Software Lead"},
                            {name: "Yishay Greenfeld", role: "Mechanical Lead"},
                            {name: "Eylon Ben Shushan", role: "Electrical Lead"},
                            {name: "Itamar Dudai", role: "Community Lead"},
                            {name: "Amichai Sedley", role: "Media Lead"},
                        ].map((leader, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                                <img src={`/team/${leader.name.replace(" ", "_")}.jpg`} alt={leader.name} className="w-24 h-24 rounded-full mx-auto mb-4"/>
                                <h4 className="font-semibold text-team-blue text-lg">{leader.name}</h4>
                                <p className="text-sm text-gray-600">{leader.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamPage;