import React, {useState} from "react";
import {Clock, Users, Award, CheckCircle, AlertCircle} from "lucide-react";
import {ref, set, get} from "firebase/database";
import {db} from "./utils/firebaseConfig";

const names = [
    "עמית סוכר", "אורי פאר", "אורי פייסט", "אורי קורנגוט", "אילון בן שושן", "איתמר דודאי",
    "איתמר כהן אליאס", "איתמר מורגינשטיין", "איתן ברמן", "איתן גוטליב", "אליה בן לולו",
    "אליה קלפון", "אלעד כהן", "אלעד שייר", "גילעד קלר", "זאב ישראל סיימונס", "חגי רוזן",
    "יאיר לוי", "יאר ניות", "יהודה רוטשטיין", "יונתן בן שלמה", "ישי גרינפלד", "ישי לברן",
    "מלאכי צדוק", "נדב יורמן", "נדב פיליפסון", "נועם נובוסלסקי", "נתנאל אקשטיין", "עזרא נגאר",
    "עזריאל סער", "עמיחי סדלי", "רועי דובדבני", "רועי חדד", "רמיאל וולדוקס", "שלו לוין",
    "נדב עמיאל", "אריאל פרידמן", "נוה נפתלי", "אליאב שפירא", "יאיר אדרי", "יפתח שטוסל",
    "שחר רוזביץ", "מתן קלר", "ידידיה ברדוגו", "לביא אברהמי", "אורי סימינובסקי", "איתן קריגר",
    "אריאל ליפסקר", "אסיף לשם", "אריאל ברגסון", "נווה ישפה"
];

const projects = [
    {
        name: "ביציקופטר + מדעני העתיד",
        icon: <Award className="w-5 h-5"/>, // Award icon for achievements
    },
    {
        name: "התנדבות במרכז אקי\"ם",
        icon: <Users className="w-5 h-5"/>, // Users icon for community involvement
    },
    {
        name: "הרצאות מדע וטכנולוגיה",
        icon: <Clock className="w-5 h-5"/>, // Clock icon for time-based activities
    },
    {
        name: "סדנאות AI ליסודי",
        icon: <Award className="w-5 h-5"/>, // Award icon for educational workshops
    },
    {
        name: "STEM לגנים",
        icon: <CheckCircle className="w-5 h-5"/>, // CheckCircle icon for verified STEM activities
    },
    {
        name: "יריד קיימות",
        icon: <AlertCircle className="w-5 h-5"/>, // AlertCircle icon for sustainability awareness
    },
    {
        name: "ExcaliWEB",
        icon: <Clock className="w-5 h-5"/>, // Clock icon for web-related projects
    },
    {
        name: "תחרויות הבבאדע השנתיות",
        icon: <Award className="w-5 h-5"/>, // Award icon for competitions
    },
    {
        name: "קייטנת תשעת הימים",
        icon: <Users className="w-5 h-5"/>, // Users icon for group activities
    },
    {
        name: "פסטיבל רואים אחרת",
        icon: <AlertCircle className="w-5 h-5"/>, // AlertCircle icon for awareness events
    },
    {
        name: " מנטור קבוצות FLL",
        icon: <AlertCircle className="w-5 h-5"/>, // AlertCircle icon for awareness events
    },
    {
        name: "מנטור קבוצות FLL חרדיות",
        icon: <CheckCircle className="w-5 h-5"/>, // CheckCircle icon for mentoring
    },
    {
        name: "קייטנת רובוטיקה | בית ספר אריאל",
        icon: <Clock className="w-5 h-5"/>, // Clock icon for robotics camps
    },
    {
        name: "קייטנת רובוטיקה | משואות נריה",
        icon: <Clock className="w-5 h-5"/>, // Clock icon for robotics camps
    },
    {
        name: "ExcaliAcademy",
        icon: <Award className="w-5 h-5"/>, // Award icon for educational programs
    },
    {
        name: "קורס מנטורים",
        icon: <CheckCircle className="w-5 h-5"/>, // CheckCircle icon for mentor training
    },
];

const QuestionnairePage: React.FC = () => {
        const [formData, setFormData] = useState({
            name: "",
            project: "",
            hours: "",
            role: "", // New field for dropdown
        });

        const [isSubmitting, setIsSubmitting] = useState(false);
        const [errors, setErrors] = useState<{ [key: string]: string }>({});
        const [success, setSuccess] = useState(false);

        const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
            const {name, value, type, checked} = e.target;
            setFormData((prevData) => ({
                ...prevData,
                [name]: type === "checkbox" ? checked : value, // Handle checkbox
            }));

            if (errors[name]) {
                setErrors((prev) => ({
                    ...prev,
                    [name]: "",
                }));
            }
        };

        const validateForm = () => {
            const newErrors: { [key: string]: string } = {};

            if (!formData.name) newErrors.name = "נא לבחור שם";
            if (!formData.project) newErrors.project = "נא לבחור פרויקט";
            if (!formData.hours) newErrors.hours = "נא להזין מספר שעות";
            else if (parseInt(formData.hours) <= 0) newErrors.hours = "מספר השעות חייב להיות חיובי";

            setErrors(newErrors);
            return Object.keys(newErrors).length === 0;
        };

        const handleSubmit = async (e: React.FormEvent) => {
            e.preventDefault();

            if (!validateForm()) return;

            setIsSubmitting(true);

            try {
                const nameRef = ref(db, `questionnaireResponses/${formData.name}`);
                const snapshot = await get(nameRef);
                const responseCount = snapshot.exists() ? Object.keys(snapshot.val()).length : 0;

                const hoursToSubmit = formData.role === "manager"
                    ? parseInt(formData.hours) * 2 // Double hours if project manager
                    : parseInt(formData.hours);

                await set(ref(db, `questionnaireResponses/${formData.name}/${responseCount + 1}`), {
                    project: formData.project,
                    hours: hoursToSubmit,
                });

                setSuccess(true);
                setFormData({
                    name: "",
                    project: "",
                    hours: "",
                    isProjectManager: false,
                });

                setTimeout(() => setSuccess(false), 3000);
            } catch (error) {
                console.error("Error submitting questionnaire:", error);
                alert(`Failed to submit the form. Error: ${error.message}`);
            } finally {
                setIsSubmitting(false);
            }
        };
        const selectedProject = projects.find(p => p.name === formData.project);

        return (
            <div className="min-h-screen bg-gradient-to-br from-navy-50 via-white to-gold-50 py-8 px-4">
                <div className="max-w-2xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-8 animate-fade-in">
                        <div
                            className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-navy-900 to-navy-800 rounded-2xl mb-4 shadow-lg">
                            <Users className="w-8 h-8 text-gold-400"/>
                        </div>
                        <h1 className="text-4xl font-bold text-navy-900 mb-2">שאלון דיווח פעילות</h1>
                        <p className="text-navy-600 text-lg">דווח על השעות שהשקעת בפרויקטים קהילתיים</p>
                    </div>

                    {/* Success Message */}
                    {success && (
                        <div
                            className="mb-6 p-4 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl animate-slide-up">
                            <div className="flex items-center">
                                <CheckCircle className="w-5 h-5 text-green-600 mr-3"/>
                                <span className="text-green-800 font-medium text-right">הטופס נשלח בהצלחה!</span>
                            </div>
                        </div>
                    )}

                    {/* Main Form Card */}
                    <div
                        className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-white/20 animate-slide-up">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Name Selection */}
                            <div className="space-y-2">
                                <label htmlFor="name" className="block text-navy-800 font-semibold text-lg mb-3 text-right">
                                    שם מלא
                                </label>
                                <div className="relative">
                                    <select
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-4 bg-white border-2 rounded-xl text-navy-800 font-medium 
                    focus:border-gold-400 focus:ring-2 focus:ring-gold-100 focus:outline-none 
                    transition-all duration-200 appearance-none cursor-pointer
                    ${errors.name ? 'border-red-300 focus:border-red-400 focus:ring-red-100' : 'border-navy-100 hover:border-navy-200'}`}
                                        dir="rtl"
                                    >
                                        <option value="" disabled className="text-navy-400">בחר את שמך מהרשימה</option>
                                        {names.map((name) => (
                                            <option key={name} value={name} className="text-navy-800">
                                                {name}
                                            </option>
                                        ))}
                                    </select>
                                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                                        <div
                                            className="w-2 h-2 border-r-2 border-b-2 border-navy-400 transform rotate-45"></div>
                                    </div>
                                </div>
                                {errors.name && (
                                    <div className="flex items-center mt-2">
                                        <AlertCircle className="w-4 h-4 text-red-500 mr-2"/>
                                        <span className="text-red-600 text-sm">{errors.name}</span>
                                    </div>
                                )}
                            </div>

                            {/* Project Selection */}
                            <div className="space-y-2">
                                <label htmlFor="project"
                                       className="block text-navy-800 font-semibold text-lg mb-3 text-right">
                                    פרויקט קהילתי
                                </label>
                                <div className="grid gap-3">
                                    {projects.map((project) => (
                                        <label
                                            key={project.name}
                                            className={`relative flex items-center p-4 rounded-xl border-2 cursor-pointer transition-all duration-200
                      ${formData.project === project.name
                                                ? 'border-gold-400 bg-gradient-to-r from-gold-50 to-yellow-50 shadow-md'
                                                : 'border-navy-100 hover:border-navy-200 hover:bg-navy-50/50'
                                            }`}
                                        >
                                            <input
                                                type="radio"
                                                name="project"
                                                value={project.name}
                                                checked={formData.project === project.name}
                                                onChange={handleChange}
                                                className="sr-only"
                                            />
                                            <div className={`flex items-center justify-center w-10 h-10 rounded-lg mr-4 transition-colors
                      ${formData.project === project.name ? 'bg-team-blue text-team-gold' : 'bg-navy-100 text-navy-600'}`}>
                                                {project.icon}
                                            </div>
                                            <div className="flex-1 text-right">
                                                <div className={`font-semibold transition-colors
                        ${formData.project === project.name ? 'text-team-gold' : 'text-navy-800'}`}>
                                                    {project.name}
                                                </div>
                                                <div className="text-navy-600 text-sm mt-1">
                                                    {project.description}
                                                </div>
                                            </div>
                                            {formData.project === project.name && (
                                                <div className="absolute top-2 left-2 ">
                                                    <CheckCircle className="w-5 h-5 text-gold-500"/>
                                                </div>
                                            )}
                                        </label>
                                    ))}
                                </div>
                                {errors.project && (
                                    <div className="flex items-center mt-2">
                                        <AlertCircle className="w-4 h-4 text-red-500 mr-2"/>
                                        <span className="text-red-600 text-sm">{errors.project}</span>
                                    </div>
                                )}
                            </div>

                            {/* Hours Input */}
                            <div className="space-y-2">
                                <label htmlFor="hours"
                                       className="block text-navy-800 font-semibold text-lg mb-3 text-right">
                                    מספר שעות
                                </label>
                                <div className="relative">
                                    <input
                                        type="number"
                                        id="hours"
                                        name="hours"
                                        value={formData.hours}
                                        onChange={handleChange}
                                        min="1"
                                        placeholder="הזן מספר שעות"
                                        className={`w-full px-4 py-4 bg-white border-2 rounded-xl text-navy-800 font-medium 
                    focus:border-gold-400 focus:ring-2 focus:ring-gold-100 focus:outline-none 
                    transition-all duration-200 text-right
                    ${errors.hours ? 'border-red-300 focus:border-red-400 focus:ring-red-100' : 'border-navy-100 hover:border-navy-200'}`}
                                        dir="rtl"
                                    />
                                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                                        <Clock className="w-5 h-5 text-navy-400"/>
                                    </div>
                                </div>
                                {errors.hours && (
                                    <div className="flex items-center mt-2">
                                        <AlertCircle className="w-4 h-4 text-red-500 mr-2"/>
                                        <span className="text-red-600 text-sm">{errors.hours}</span>
                                    </div>
                                )}
                            </div>

                            {/* Submit Error */}
                            {errors.submit && (
                                <div className="p-4 bg-red-50 border border-red-200 rounded-xl">
                                    <div className="flex items-center">
                                        <AlertCircle className="w-5 h-5 text-red-600 mr-3"/>
                                        <span className="text-red-800">{errors.submit}</span>
                                    </div>
                                </div>
                            )}

                            {/* Project Manager Dropdown */}
                            <div className="space-y-4">
                                <label htmlFor="role" className="block text-navy-800 font-semibold text-lg mb-3 text-right">
                                    תפקיד
                                </label>
                                <div className="relative">
                                    <select
                                        id="role"
                                        name="role"
                                        value={formData.role}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-4 bg-white border-2 rounded-xl text-navy-800 font-medium
                focus:border-gold-400 focus:ring-2 focus:ring-gold-100 focus:outline-none
                transition-all duration-200 appearance-none cursor-pointer
                ${errors.role ? 'border-red-300 focus:border-red-400 focus:ring-red-100' : 'border-navy-100 hover:border-navy-200'}`}
                                        dir="rtl"
                                    >
                                        <option value="" disabled className="text-navy-400">בחר תפקיד</option>
                                        <option value="manager" className="text-navy-800">אחראי פרוייקט</option>
                                        <option value="volunteer" className="text-navy-800">מתנדב</option>
                                    </select>
                                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                                        <div
                                            className="w-2 h-2 border-r-2 border-b-2 border-navy-400 transform rotate-45"></div>
                                    </div>
                                </div>
                                {errors.role && (
                                    <div className="flex items-center mt-2">
                                        <AlertCircle className="w-4 h-4 text-red-500 mr-2"/>
                                        <span className="text-red-600 text-sm">{errors.role}</span>
                                    </div>
                                )}
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full py-4 px-6 rounded-xl font-bold text-lg transition-all duration-200 bg-team-blue
                ${isSubmitting
                                    ? 'bg-navy-300 text-navy-100 cursor-not-allowed text-team-gold'
                                    : 'bg-gradient-to-r from-navy-900 to-navy-800 hover:from-navy-800 text-team-gold hover:to-navy-700 text-red shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'
                                }`}
                            >
                                {isSubmitting ? (
                                    <div className="flex items-center justify-center">
                                        <div
                                            className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-3"></div>
                                        שולח...
                                    </div>
                                ) : (
                                    'שלח דיווח'
                                )}
                            </button>
                        </form>
                    </div>

                    {/* Bottom Note */}
                    <div className="text-center mt-8 animate-fade-in">
                        <p className="text-navy-600 text-sm">
                            הדיווח מסייע לנו לעקוב אחר התרומה הקהילתית שלכם
                        </p>
                    </div>
                </div>
            </div>
        );
    }
;

export default QuestionnairePage;