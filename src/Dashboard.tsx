import React, {useState, useEffect} from 'react';
import {ref, get, set, update, remove} from 'firebase/database';
import {db} from './utils/firebaseConfig';
import {motion, AnimatePresence} from 'framer-motion';
import {
    Award,
    Users,
    Calendar,
    UserPlus,
    Search,
    Filter,
    Check,
    ChevronLeft,
    ChevronRight,
    Star,
    User
} from 'lucide-react';

interface User {
    username: string;
    email: string;
    role: string;
    status: 'active' | 'inactive';
}

const Dashboard = () => {
    // State for attendance
    const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
    const [presentUsers, setPresentUsers] = useState<string[]>([]);

    // State for users
    const [users, setUsers] = useState<Record<string, User>>({});
    const [newUser, setNewUser] = useState({username: '', email: '', password: '', role: 'member'});
    const [searchTerm, setSearchTerm] = useState('');
    const [roleFilter, setRoleFilter] = useState('all');

    // State for statistics
    const [stats, setStats] = useState({
        totalUsers: 0,
        activeUsers: 0,
        presentToday: 0
    });

    // State for UI
    const [activeTab, setActiveTab] = useState('attendance');
    const [loading, setLoading] = useState(true);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        fetchData();
    }, [selectedDate]);

    const fetchData = async () => {
        try {
            // Fetch users
            const usersRef = ref(db, 'users');
            const usersSnapshot = await get(usersRef);
            if (usersSnapshot.exists()) {
                const userData = usersSnapshot.val();
                setUsers(userData);
                setStats(prev => ({
                    ...prev,
                    totalUsers: Object.keys(userData).length,
                    activeUsers: Object.values(userData).filter((user: any) => user.status === 'active').length
                }));
            }

            // Fetch attendance for selected date
            const attendanceRef = ref(db, `attendance/${selectedDate}`);
            const attendanceSnapshot = await get(attendanceRef);
            if (attendanceSnapshot.exists()) {
                const presentUsersList = attendanceSnapshot.val();
                setPresentUsers(presentUsersList || []);
                setStats(prev => ({
                    ...prev,
                    presentToday: presentUsersList?.length || 0
                }));
            } else {
                setPresentUsers([]);
                setStats(prev => ({...prev, presentToday: 0}));
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false);
        }
    };

    const toggleAttendance = async (username: string) => {
        const updatedUsers = presentUsers.includes(username)
            ? presentUsers.filter(u => u !== username)
            : [...presentUsers, username];

        setPresentUsers(updatedUsers);

        try {
            const attendanceRef = ref(db, `attendance/${selectedDate}`);
            await set(attendanceRef, updatedUsers);
            setSuccess(true);
            setTimeout(() => setSuccess(false), 2000);
        } catch (error) {
            console.error('Error updating attendance:', error);
        }
    };
    const saveAttendance = async () => {
        try {
            const attendanceRef = ref(db, `attendance/${selectedDate}`);
            await set(attendanceRef, presentUsers);
            setSuccess(true);
            setTimeout(() => setSuccess(false), 2000);
            fetchData(); // Refresh data after saving
        } catch (error) {
            console.error('Error saving attendance:', error);
        }
    };

    const handleAddUser = async () => {
        if (!newUser.username || !newUser.email || !newUser.password) return;

        try {
            const userRef = ref(db, `users/${newUser.username}`);
            await set(userRef, {
                ...newUser,
                status: 'active',
                createdAt: new Date().toISOString()
            });
            setNewUser({username: '', email: '', password: '', role: 'member'});
            fetchData();
        } catch (error) {
            console.error('Error adding user:', error);
        }
    };

    const handleDeleteUser = async (username: string) => {
        if (!confirm('Are you sure you want to delete this user?')) return;

        try {
            const userRef = ref(db, `users/${username}`);
            await remove(userRef);
            fetchData();
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

    const filteredUsers = Object.entries(users).filter(([username, user]) => {
        const matchesSearch = username.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.email.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesRole = roleFilter === 'all' || user.role === roleFilter;
        return matchesSearch && matchesRole;
    });

    return (
        <div className="min-h-screen bg-background">
            <header className="border-gray-500 text-white py-6 px-8">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <div className="flex items-center space-x-3">
                        <Award size={32} className="text-secondary"/>
                        <h1 className="text-2xl font-bold">Attendance Manager</h1>
                    </div>
                    <nav className="flex space-x-6">
                        <button
                            onClick={() => setActiveTab('attendance')}
                            className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                                activeTab === 'attendance' ? 'bg-white bg-opacity-10' : 'hover:bg-white hover:bg-opacity-5'
                            }`}
                        >
                            <Calendar size={20}/>
                            <span>Attendance</span>
                        </button>
                        <button
                            onClick={() => setActiveTab('users')}
                            className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                                activeTab === 'users' ? 'bg-white bg-opacity-10' : 'hover:bg-white hover:bg-opacity-5'
                            }`}
                        >
                            <Users size={20}/>
                            <span>Users</span>
                        </button>
                    </nav>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-8 py-6">
                {/* Statistics Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <motion.div
                        className="bg-white rounded-lg shadow-card p-6"
                        whileHover={{y: -4}}
                        transition={{duration: 0.2}}
                    >
                        <div className="flex items-center space-x-3 mb-4">
                            <div className="bg-primary-50 p-3 rounded-lg">
                                <Users size={24} className="text-primary"/>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-primary">{stats.totalUsers}</h3>
                                <p className="text-sm text-text-secondary">Total Users</p>
                            </div>
                        </div>
                        <div className="h-2 bg-gray-100 rounded-full">
                            <div
                                className="h-full bg-primary rounded-full"
                                style={{width: `${(stats.activeUsers / stats.totalUsers) * 100}%`}}
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        className="bg-white rounded-lg shadow-card p-6"
                        whileHover={{y: -4}}
                        transition={{duration: 0.2}}
                    >
                        <div className="flex items-center space-x-3 mb-4">
                            <div className="bg-success bg-opacity-10 p-3 rounded-lg">
                                <Check size={24} className="text-success"/>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-success">{stats.presentToday}</h3>
                                <p className="text-sm text-text-secondary">Present Today</p>
                            </div>
                        </div>
                        <div className="h-2 bg-gray-100 rounded-full">
                            <div
                                className="h-full bg-success rounded-full"
                                style={{width: `${(stats.presentToday / stats.totalUsers) * 100}%`}}
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        className="bg-white rounded-lg shadow-card p-6"
                        whileHover={{y: -4}}
                        transition={{duration: 0.2}}
                    >
                        <div className="flex items-center space-x-3 mb-4">
                            <div className="bg-secondary bg-opacity-10 p-3 rounded-lg">
                                <Star size={24} className="text-secondary"/>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-secondary">{stats.activeUsers}</h3>
                                <p className="text-sm text-text-secondary">Active Users</p>
                            </div>
                        </div>
                        <div className="h-2 bg-gray-100 rounded-full">
                            <div
                                className="h-full bg-secondary rounded-full"
                                style={{width: `${(stats.activeUsers / stats.totalUsers) * 100}%`}}
                            />
                        </div>
                    </motion.div>
                </div>


                <AnimatePresence mode="wait">
                    {activeTab === 'attendance' ? (
                        <motion.div
                            key="attendance"
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            exit={{opacity: 0, y: -20}}
                            className="bg-white rounded-lg shadow-card p-6"
                        >
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-xl font-semibold text-primary">Mark Attendance</h2>
                                <div className="flex items-center space-x-4">
                                    <button
                                        onClick={() => {
                                            const date = new Date(selectedDate);
                                            date.setDate(date.getDate() - 1);
                                            setSelectedDate(date.toISOString().split('T')[0]);
                                        }}
                                        className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                                    >
                                        <ChevronLeft size={20} className="text-primary"/>
                                    </button>
                                    <input
                                        type="date"
                                        value={selectedDate}
                                        onChange={(e) => setSelectedDate(e.target.value)}
                                        className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                    />
                                    <button
                                        onClick={() => {
                                            const date = new Date(selectedDate);
                                            date.setDate(date.getDate() + 1);
                                            setSelectedDate(date.toISOString().split('T')[0]);
                                        }}
                                        className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                                    >
                                        <ChevronRight size={20} className="text-primary"/>
                                    </button>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                                {Object.entries(users).map(([username, user]) => (
                                    <motion.div
                                        key={username}
                                        className={`rounded-lg p-4 border transition-colors ${
                                            presentUsers.includes(username)
                                                ? 'bg-success bg-opacity-10 border-success border-4 shadow-lg'
                                                : 'bg-gray-50 border-gray-100'
                                        }`}
                                        whileHover={{scale: 1.05}}
                                        transition={{duration: 0.2}}
                                        onClick={() => toggleAttendance(username)}
                                    >
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center space-x-3">
                                                <div className={`rounded-full p-2 ${
                                                    presentUsers.includes(username)
                                                        ? 'bg-success bg-opacity-20 '
                                                        : 'bg-primary-100 '
                                                }`}>
                                                    <User size={18} className={
                                                        presentUsers.includes(username)
                                                            ? 'text-success'
                                                            : 'text-primary'
                                                    }/>
                                                </div>
                                                <div>
                                                    <h3 className={`font-medium ${
                                                        presentUsers.includes(username)
                                                            ? 'text-success'
                                                            : 'text-text-primary'
                                                    }`}>{username}</h3>
                                                    <p className="text-xs text-text-secondary">{user.role}</p>
                                                </div>
                                            </div>
                                            <div
                                                className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                                                    presentUsers.includes(username)
                                                        ? 'border-success bg-success bg-team-blue'
                                                        : 'border-gray-300 '
                                                }`}>
                                                {presentUsers.includes(username) && (
                                                    <Check size={14} className="text-white"/>
                                                )}
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Save Button */}
                            <motion.button
                                onClick={saveAttendance}
                                className="w-full py-3 bg-primary text-team-blue rounded-lg flex justify-center items-center space-x-2 hover:bg-primary-dark transition-colors border-team-blue"
                                whileHover={{scale: 1.02}}
                                whileTap={{scale: 0.98}}
                            >
                                <Calendar size={20}/>
                                <span>Save Attendance</span>
                            </motion.button>
                            <motion.button
                                onClick={saveAttendance}
                                className={`w-full py-3 rounded-lg flex justify-center items-center space-x-2 transition-colors ${
                                    success
                                        ? 'bg-success text-white'
                                        : 'bg-primary text-white hover:bg-primary-dark'
                                }`}
                                whileHover={{scale: 1.02}}
                                whileTap={{scale: 0.98}}
                            >
                                {success ? (
                                    <>
                                        <Check size={20}/>
                                        <span>Attendance Saved!</span>
                                    </>
                                ) : (
                                    <>
                                        <Calendar size={20}/>
                                        <span>Save Attendance</span>
                                    </>
                                )}
                            </motion.button>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="users"
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            exit={{opacity: 0, y: -20}}
                            className="space-y-6"
                        >
                            {/* Add User Form */}
                            <div className="bg-white rounded-lg shadow-card p-6">
                                <div className="flex items-center space-x-2 mb-6">
                                    <UserPlus size={24} className="text-primary"/>
                                    <h2 className="text-xl font-semibold text-primary">Add New User</h2>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                                    <input
                                        type="text"
                                        placeholder="Username"
                                        value={newUser.username}
                                        onChange={(e) => setNewUser({...newUser, username: e.target.value})}
                                        className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                    />
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        value={newUser.email}
                                        onChange={(e) => setNewUser({...newUser, email: e.target.value})}
                                        className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                    />
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        value={newUser.password}
                                        onChange={(e) => setNewUser({...newUser, password: e.target.value})}
                                        className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                    />
                                    <select
                                        value={newUser.role}
                                        onChange={(e) => setNewUser({...newUser, role: e.target.value})}
                                        className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                    >
                                        <option value="member">Member</option>
                                        <option value="team lead">Team Lead</option>
                                        <option value="captain">Captain</option>
                                        <option value="admin">Admin</option>
                                    </select>
                                </div>

                                <motion.button
                                    onClick={handleAddUser}
                                    className="w-full py-3 bg-primary text-white rounded-lg flex justify-center items-center space-x-2 hover:bg-primary-dark transition-colors"
                                    whileHover={{scale: 1.02}}
                                    whileTap={{scale: 0.98}}
                                >
                                    <UserPlus size={20}/>
                                    <span>Add User</span>
                                </motion.button>
                            </div>

                            {/* User List */}
                            <div className="bg-white rounded-lg shadow-card p-6">
                                <div className="flex items-center justify-between mb-6">
                                    <div className="flex items-center space-x-2">
                                        <Users size={24} className="text-primary"/>
                                        <h2 className="text-xl font-semibold text-primary">User Directory</h2>
                                    </div>

                                    <div className="flex items-center space-x-4">
                                        <div className="relative">
                                            <Search size={20}
                                                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"/>
                                            <input
                                                type="text"
                                                placeholder="Search users..."
                                                value={searchTerm}
                                                onChange={(e) => setSearchTerm(e.target.value)}
                                                className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                            />
                                        </div>

                                        <select
                                            value={roleFilter}
                                            onChange={(e) => setRoleFilter(e.target.value)}
                                            className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                        >
                                            <option value="all">All Roles</option>
                                            <option value="admin">Admin</option>
                                            <option value="captain">Captain</option>
                                            <option value="team lead">Team Lead</option>
                                            <option value="member">Member</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {filteredUsers.map(([username, user]) => (
                                        <motion.div
                                            key={username}
                                            className="bg-gray-50 rounded-lg p-4 border border-gray-100"
                                            whileHover={{scale: 1.02}}
                                            transition={{duration: 0.2}}
                                        >
                                            <div className="flex items-center space-x-3 mb-3">
                                                <div className="bg-primary-100 rounded-full p-2">
                                                    <User size={18} className="text-primary"/>
                                                </div>
                                                <div>
                                                    <h3 className="font-medium text-text-primary">{username}</h3>
                                                    <p className="text-xs text-text-secondary">{user.email}</p>
                                                </div>
                                            </div>

                                            <div className="flex items-center justify-between mb-4">
                        <span className={`text-xs px-2 py-1 rounded-full ${
                            user.role === 'admin' ? 'bg-error bg-opacity-10 text-error' :
                                user.role === 'captain' ? 'bg-primary bg-opacity-10 text-primary' :
                                    user.role === 'team lead' ? 'bg-secondary bg-opacity-10 text-secondary' :
                                        'bg-gray-100 text-text-secondary'
                        }`}>
                          {user.role}
                        </span>
                                                <span className={`text-xs px-2 py-1 rounded-full ${
                                                    user.status === 'active' ? 'bg-success bg-opacity-10 text-success' : 'bg-error bg-opacity-10 text-error'
                                                }`}>
                          {user.status}
                        </span>
                                            </div>

                                            <div className="flex space-x-2">
                                                <button
                                                    onClick={() => handleDeleteUser(username)}
                                                    className="flex-1 py-2 bg-error bg-opacity-10 text-error rounded-md hover:bg-opacity-20 transition-colors"
                                                >
                                                    Delete User
                                                </button>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

            </main>
        </div>
    );
};

export default Dashboard;