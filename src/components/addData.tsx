import { getDatabase, ref, set, onValue, remove } from "firebase/database";
import { app } from '../firebase';
import { useEffect, useState } from "react";

const AddData = () => {
    const [rollNo, setRollNo] = useState('');
    const [name, setName] = useState('');
    const [phoneNo, setPhoneNo] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [studentData, setStudentData] = useState<{ [key: string]: { studentName: string; studentPhoneNumber: string } }>({});
    const inputHandler = async (event: React.FormEvent) => {
        event.preventDefault();
        setLoading(true);
        setMessage('');

        try {
            const db = getDatabase(app);
            await set(ref(db, 'student/' + rollNo), {
                studentName: name,
                studentPhoneNumber: phoneNo,
            });
            setMessage("Data added successfully!");
        } catch (error) {
            setMessage("Failed to add data. Please try again.");
            console.error("Error writing to database:", error);
        } finally {
            setLoading(false);
            setRollNo('');
            setName('');
            setPhoneNo('');
        }
    };

    useEffect(() => {
        const db = getDatabase(app)
        const studentRef = ref(db, "student")
        const unsubscribe = onValue(studentRef, (snapShort) => {
            const data = snapShort.val()
            console.log(data);

            setStudentData(data)

        })
        return () => unsubscribe();
    }, [])


    const handelDeleteData = (key: string) => {
        const db = getDatabase(app)
        const studentRef = ref(db, "student/" + key)
        remove(studentRef)
    }


    return (
        <div className="flex flex-col items-center mt-8">
            {loading ? (
                <div>Loading...</div>
            ) : (
                <>
                    {message && <p className="text-center mb-4">{message}</p>}
                    <form onSubmit={inputHandler} className="space-x-5">
                        <input
                            type="text"
                            placeholder="Enter Student Roll No"
                            className="px-12 py-2 bg-slate-300 rounded-xl outline-none"
                            value={rollNo}
                            onChange={(e) => setRollNo(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Enter Student Name"
                            className="px-12 py-2 bg-slate-300 rounded-xl outline-none"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Enter Student Phone No"
                            className="px-12 py-2 bg-slate-300 rounded-xl outline-none"
                            value={phoneNo}
                            onChange={(e) => setPhoneNo(e.target.value)}
                        />
                        <div className="flex justify-center mt-5">
                            <button
                                type="submit"
                                className="px-10 py-2 bg-blue-200 rounded-xl"
                                disabled={loading}
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </>
            )}
            <div className="mt-6 w-full max-w-lg">
                {Object.entries(studentData).slice().reverse().map(([key, item]) => (
                    <h2 key={key} className="mb-2 p-2 bg-gray-100 rounded-lg shadow-md   ">
                        <div>
                            <p><strong>Name :</strong>{item.studentName}</p>
                            <p><strong>Phone Number :</strong>{item.studentPhoneNumber}</p>
                            <span className="flex justify-end">
                                <button className=" px-5 py-2 bg-red-400 text-white rounded-xl"
                                    onClick={() => handelDeleteData(key)}
                                >Delete</button>
                            </span>
                        </div>
                    </h2>


                ))}

            </div>
        </div>
    );
}

export default AddData;
