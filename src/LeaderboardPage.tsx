import React, {useEffect, useState} from "react";
import {ref, get} from "firebase/database";
import {db} from "./utils/firebaseConfig";
import { Trophy, Crown, Medal, Star, Users, TrendingUp } from "lucide-react";


// Define project factors
const projectFactors: { [projectName: string]: number } = {
    "ביציקופטר + מדעני העתיד": 1.5,
    "הרצאות מדע וטכנולוגיה": 2,
    "קורס מנטורים": 1,
};

const LeaderboardPage: React.FC = () => {
    const [leaderboardData, setLeaderboardData] = useState<{ name: string; totalPoints: number }[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const snapshot = await get(ref(db, "questionnaireResponses"));
                if (snapshot.exists()) {
                    const data = snapshot.val();
                    const leaderboard = Object.entries(data).map(([name, responses]) => {
                        let totalPoints = 0;

                        Object.values(responses).forEach((response: any) => {
                            const hours = parseInt(response.hours || 0);
                            const factor = projectFactors[response.project] || 1;
                            totalPoints += hours * factor;
                        });

                        return {name, totalPoints};
                    });

                    leaderboard.sort((a, b) => b.totalPoints - a.totalPoints);
                    setLeaderboardData(leaderboard);
                } else {
                    setLeaderboardData([]);
                }
            } catch (err) {
                console.error("Error fetching leaderboard data:", err);
                setError("Failed to load leaderboard data.");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const getPodiumHeight = (position: number) => {
        switch (position) {
            case 0:
                return "h-32"; // 1st place - tallest
            case 1:
                return "h-24"; // 2nd place - medium
            case 2:
                return "h-20"; // 3rd place - shortest
            default:
                return "h-16";
        }
    };

    const getPodiumColors = (position: number) => {
        switch (position) {
            case 0:
                return "from-yellow-400 to-yellow-600"; // Gold
            case 1:
                return "from-gray-300 to-gray-500"; // Silver
            case 2:
                return "from-orange-400 to-orange-600"; // Bronze
            default:
                return "from-blue-400 to-blue-600";
        }
    };

    const getRankIcon = (position: number) => {
        switch (position) {
            case 0:
                return <Crown className="w-8 h-8 text-yellow-600"/>;
            case 1:
                return <Trophy className="w-7 h-7 text-gray-600"/>;
            case 2:
                return <Medal className="w-6 h-6 text-orange-600"/>;
            default:
                return <Star className="w-5 h-5 text-blue-600"/>;
        }
    };

    if (loading) {
        return (
            <div
                className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center">
                <div className="text-center">
                    <div
                        className="animate-spin rounded-full h-16 w-16 border-b-2 border-indigo-600 mx-auto mb-4"></div>
                    <p className="text-xl font-semibold text-gray-700">Loading leaderboard...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div
                className="min-h-screen bg-gradient-to-br from-red-50 via-white to-pink-50 flex items-center justify-center">
                <div className="text-center bg-white p-8 rounded-2xl shadow-lg">
                    <div className="text-red-500 mb-4">
                        <TrendingUp className="w-16 h-16 mx-auto"/>
                    </div>
                    <p className="text-xl font-semibold text-red-600">{error}</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
            {/* Header */}
            <div className="pt-8 pb-4">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="text-center mb-8">
                        <div className="flex items-center justify-center mb-4">
                            <Trophy className="w-12 h-12 text-indigo-600 mr-3"/>
                            <h1 className="text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                                טבלת ביצועים
                            </h1>
                        </div>
                        <p className="text-gray-600 text-lg">בדקו את מצב הנקודות הקהילתיות שלכם</p>
                    </div>

                    {/* Podium Section */}
                    {leaderboardData.length > 0 && (
                        <div className="mb-12">
                            <div className="flex items-end justify-center space-x-8 mb-8">
                                {/* 2nd Place */}
                                {leaderboardData[1] && (
                                    <div className="flex flex-col items-center animate-fade-in-up\"
                                         style={{animationDelay: '0.2s'}}>
                                        <div
                                            className="bg-white rounded-2xl p-6 shadow-lg mb-4 transform hover:scale-105 transition-transform duration-300">
                                            <div className="text-center">
                                                <div className="flex justify-center mb-3">
                                                    {getRankIcon(1)}
                                                </div>
                                                <h3 className="font-bold text-lg text-gray-800 mb-1">{leaderboardData[1].name}</h3>
                                                <p className="text-2xl font-bold text-gray-600">{leaderboardData[1].totalPoints.toFixed(1)}</p>
                                                <p className="text-sm text-gray-500">נקודות</p>
                                            </div>
                                        </div>
                                        <div
                                            className={`w-24 ${getPodiumHeight(1)} bg-gradient-to-t ${getPodiumColors(1)} rounded-t-lg shadow-lg flex items-center justify-center`}>
                                            <span className="text-white font-bold text-2xl">2</span>
                                        </div>
                                    </div>
                                )}

                                {/* 1st Place */}
                                {leaderboardData[0] && (
                                    <div className="flex flex-col items-center animate-fade-in-up"
                                         style={{animationDelay: '0.1s'}}>
                                        <div
                                            className="bg-white rounded-2xl p-8 shadow-xl mb-4 border-2 border-yellow-200 transform hover:scale-105 transition-transform duration-300">
                                            <div className="text-center">
                                                <div className="flex justify-center mb-4">
                                                    {getRankIcon(0)}
                                                </div>
                                                <h3 className="font-bold text-xl text-gray-800 mb-2">{leaderboardData[0].name}</h3>
                                                <p className="text-3xl font-bold text-yellow-600">{leaderboardData[0].totalPoints.toFixed(1)}</p>
                                                <p className="text-sm text-gray-500">נקודות</p>
                                                <div className="mt-3">
                          <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-s font-semibold">
                            מוביל
                          </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className={`w-28 ${getPodiumHeight(0)} bg-gradient-to-t ${getPodiumColors(0)} rounded-t-lg shadow-xl flex items-center justify-center`}>
                                            <span className="text-white font-bold text-3xl">1</span>
                                        </div>
                                    </div>
                                )}

                                {/* 3rd Place */}
                                {leaderboardData[2] && (
                                    <div className="flex flex-col items-center animate-fade-in-up"
                                         style={{animationDelay: '0.3s'}}>
                                        <div
                                            className="bg-white rounded-2xl p-6 shadow-lg mb-4 transform hover:scale-105 transition-transform duration-300">
                                            <div className="text-center">
                                                <div className="flex justify-center mb-3">
                                                    {getRankIcon(2)}
                                                </div>
                                                <h3 className="font-bold text-lg text-gray-800 mb-1">{leaderboardData[2].name}</h3>
                                                <p className="text-2xl font-bold text-gray-600">{leaderboardData[2].totalPoints.toFixed(1)}</p>
                                                <p className="text-sm text-gray-500">נקודות</p>
                                            </div>
                                        </div>
                                        <div
                                            className={`w-24 ${getPodiumHeight(2)} bg-gradient-to-t ${getPodiumColors(2)} rounded-t-lg shadow-lg flex items-center justify-center`}>
                                            <span className="text-white font-bold text-2xl">3</span>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}

                    {/* Full Leaderboard Table */}
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-4">
                            <div className="flex items-center">
                                <Users className="w-6 h-6 text-white mr-3"/>
                                <h2 className="text-xl font-bold text-white">טבלה מלאה</h2>
                            </div>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">מיקום</th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">שם</th>
                                    <th className="px-6 py-4 text-right text-sm font-semibold text-gray-600 uppercase tracking-wider">ניקוד</th>
                                </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                {leaderboardData.map((entry, index) => (
                                    <tr
                                        key={entry.name}
                                        className={`hover:bg-gray-50 transition-colors duration-200 ${
                                            index < 3 ? 'bg-gradient-to-r from-yellow-50 to-transparent' : ''
                                        }`}
                                    >
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="flex-shrink-0 mr-3">
                                                    {getRankIcon(index)}
                                                </div>
                                                <span className={`text-lg font-bold ${
                                                    index === 0 ? 'text-yellow-600' :
                                                        index === 1 ? 'text-gray-600' :
                                                            index === 2 ? 'text-orange-600' : 'text-gray-800'
                                                }`}>
                            #{index + 1}
                          </span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-lg font-semibold text-gray-900">{entry.name}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right">
                                            <div className={`text-2xl font-bold ${
                                                index === 0 ? 'text-yellow-600' :
                                                    index === 1 ? 'text-gray-600' :
                                                        index === 2 ? 'text-orange-600' : 'text-gray-800'
                                            }`}>
                                                {entry.totalPoints.toFixed(1)}
                                            </div>
                                            <div className="text-sm text-gray-500">נקודות</div>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {leaderboardData.length === 0 && (
                        <div className="text-center py-12">
                            <Users className="w-16 h-16 text-gray-400 mx-auto mb-4"/>
                            <p className="text-xl text-gray-600">No leaderboard data available yet.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

// Add custom animations
const style = document.createElement('style');
style.textContent = `
  @keyframes fade-in-up {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .animate-fade-in-up {
    animation: fade-in-up 0.6s ease-out forwards;
    opacity: 0;
  }
`;
document.head.appendChild(style);

export default LeaderboardPage;