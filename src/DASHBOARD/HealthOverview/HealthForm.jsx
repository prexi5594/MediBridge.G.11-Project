//Health data form & display
//Display form to add current health metrics and list of previous records


//Health Data Form
//Purpose

//To allow patients to submit their daily/regular health measurements, such as:
//Blood sugar (for diabetes)
//Blood pressure (for hypertension)
//Weight or BMI (optional)
//Notes about symptoms or feelings
//.

//Health Data Display
//What it entails

//Input Fields – fields for the user to type or select their metrics:

//Example: <input type="number" placeholder="Blood Sugar" />

//Submit Button – to save the data.

//Validation – ensure inputs are in correct formats (e.g., numbers >0).

//State Management – using useState or context to store the input temporarily.

//Event Handling – a function like handleSubmit to save the data either:
//To local state for now (student project)

//Or to a backend/API later.

import { useState } from 'react';

const HealthForm = ({ onSubmit, onCancel }) => {
    const [formData, setFormData] = useState({
        bloodPressure: '',
        bloodSugar: '',
        weight: '',
        symptoms: '',
        notes: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const submitForm = (e) => {
        e.preventDefault();
         onSubmit(formData);
         setFormData({
            bloodPressure: '',
            bloodSugar: '',
            weight: '',
            symptoms: '',
            notes: '',
        });
    };

    return (
        <form onSubmit={submitForm} className="bg-gray-50 rounded-2xl shadow-sm mb-2">
            <div>
                <h2>New Health Entry</h2>
                <label className="block w-full text-xs"> BloodPressure</label>
            <input
                name="bloodPressure"
                value={formData.bloodPressure}
                placeholder="e.g 120 mg/dl"
                onChange={handleChange}
                className="block w-full mb-3  p-2 rounded bg-slate-300"
            />
            <label className="block w-full text-xs ">BloodSugar</label>
            <input
                name="bloodSugar"
                value={formData.bloodSugar}
                placeholder="100 mg/dl"
                onChange={handleChange}
                className="block w-full mb-3  p-2 rounded  bg-slate-300"
            />
            <label className="block w-full text-xs">Weight</label>
            <input
                name="weight"
                value={formData.weight}
                placeholder="70"
                onChange={handleChange}
                className="block w-full  mb-3 p-2 rounded  bg-slate-300"
            />
            <div>
                <label>
                    symptoms
                </label>
                <textarea name="symptoms"
                value={formData.symptoms} 
                onChange={handleChange}
                rows={3}
                                className="block w-full  mb-3 p-2 rounded  bg-gray-200"
                />
            </div>
            <div>
                <label>
                    Additional Notes
                </label>
                <textarea name="notes" 
                value={formData.notes}
                onChange={handleChange}
                rows={4}
                className="block w-full  mb-3 p-2 rounded  bg-gray-200"
                />
            </div>
            <div className="flex gap-2">
                <button type="submit" className="bg-blue-600 ">
                    Submit
                </button>
                <button
                    type="button"
                    onClick={onCancel}
                    className="bg-slate-200 "
                >
                    Cancel
                </button >
            </div>
            </div>
        </form>
    );
};

export default HealthForm;