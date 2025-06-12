import React, { useEffect, useState } from "react";
import { ref, get, update } from "firebase/database";
import { db } from "./utils/firebaseConfig";
import { AlertCircle, Save } from "lucide-react";

const EditSubmissionsPage: React.FC = () => {
    const [submissions, setSubmissions] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    useEffect(() => {
        const fetchSubmissions = async () => {
            try {
                const snapshot = await get(ref(db, "questionnaireResponses"));
                if (snapshot.exists()) {
                    const data = snapshot.val();
                    const formattedData = Object.entries(data).map(([name, responses]) => ({
                        name,
                        responses: Object.entries(responses).map(([id, response]) => ({
                            id,
                            ...response,
                        })),
                    }));
                    setSubmissions(formattedData);
                } else {
                    setSubmissions([]);
                }
            } catch (err) {
                console.error("Error fetching submissions:", err);
                setError("Failed to load submissions.");
            } finally {
                setLoading(false);
            }
        };

        fetchSubmissions();
    }, []);

    const handleHoursChange = (name: string, id: string, newHours: number) => {
        setSubmissions((prev) =>
            prev.map((submission) =>
                submission.name === name
                    ? {
                          ...submission,
                          responses: submission.responses.map((response: any) =>
                              response.id === id ? { ...response, hours: newHours } : response
                          ),
                      }
                    : submission
            )
        );
    };

    const handleSave = async (name: string, id: string, updatedHours: number) => {
        try {
            await update(ref(db, `questionnaireResponses/${name}/${id}`), { hours: updatedHours });
            setSuccessMessage("Hours updated successfully!");
            setTimeout(() => setSuccessMessage(""), 3000);
        } catch (err) {
            console.error("Error updating hours:", err);
            setError("Failed to update hours.");
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p className="text-xl font-semibold text-gray-700">Loading submissions...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center bg-white p-8 rounded-2xl shadow-lg">
                    <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
                    <p className="text-xl font-semibold text-red-600">{error}</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <h1 className="text-3xl font-bold text-center mb-8">Edit Submissions</h1>
            {successMessage && (
                <div className="text-center mb-4">
                    <p className="text-green-600 font-semibold">{successMessage}</p>
                </div>
            )}
            <div className="overflow-x-auto">
                <table className="w-full bg-white rounded-xl shadow-lg">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="px-6 py-4 text-right text-sm font-semibold text-gray-600">Name</th>
                            <th className="px-6 py-4 text-right text-sm font-semibold text-gray-600">Project</th>
                            <th className="px-6 py-4 text-right text-sm font-semibold text-gray-600">Hours</th>
                            <th className="px-6 py-4 text-right text-sm font-semibold text-gray-600">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {submissions.map((submission) =>
                            submission.responses.map((response: any) => (
                                <tr key={`${submission.name}-${response.id}`}>
                                    <td className="px-6 py-4 text-right">{submission.name}</td>
                                    <td className="px-6 py-4 text-right">{response.project}</td>
                                    <td className="px-6 py-4 text-right">
                                        <input
                                            type="number"
                                            value={response.hours}
                                            onChange={(e) =>
                                                handleHoursChange(
                                                    submission.name,
                                                    response.id,
                                                    parseInt(e.target.value, 10)
                                                )
                                            }
                                            className="w-20 px-2 py-1 border rounded"
                                        />
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <button
                                            onClick={() =>
                                                handleSave(submission.name, response.id, response.hours)
                                            }
                                            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                                        >
                                            <Save className="w-4 h-4 inline-block mr-1" />
                                            Save
                                        </button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default EditSubmissionsPage;