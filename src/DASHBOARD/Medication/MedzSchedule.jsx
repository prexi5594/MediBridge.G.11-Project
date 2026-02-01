<<<<<<< HEAD
//(Optional) Allows adding/editing medication schedules
//Planning the Medication schedule component
// Acontainer component that;
/*
1. Adds medications
2.Sets time(s) and frequency
3.Views their medication plan

What it entails

Input fields:
1.Medication name
2.Dosage
3.Time (morning / evening / custom time)
4.Save button
5.Stores data in state or context
 */  

/*import { useState } from "react";

const MedicationSchedule = () => {
  const [meds, setMeds] = useState([]);
  const [name, setName] = useState("");
  const [time, setTime] = useState("");

  const addMedication = () => {
    setMeds([...meds, { name, time }]);
    setName("");
    setTime("");
  };

  return (
    <div>
      <h3>Medication Schedule</h3>

      <input
        placeholder="Medication Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />

      <button onClick={addMedication}>Save</button>

      {meds.map((med, index) => (
        <p key={index}>
          {med.name} at {med.time}
        </p>
      ))}
    </div>
  );
};

export default MedicationSchedule;
 */

=======
function MedzSchedule () {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 space-y-4">
      {/* Time */}
      <div className="flex items-center gap-2 text-sm font-semibold text-gray-700">
        <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
        08:00
      </div>

      {/* Medication Item */}
      <div className="flex justify-between items-start">
        <div>
          <p className="text-gray-900 font-medium">
            Metformin – 500mg
          </p>
          <p className="text-sm text-gray-500">
            Take with meals
          </p>
        </div>

        {/* Status Icon Placeholder */}
        <div className="w-5 h-5 rounded-full border border-green-400 flex items-center justify-center">
          <span className="w-2 h-2 bg-green-400 rounded-full"></span>
        </div>
      </div>

      <div className="flex justify-between items-start">
        <div>
          <p className="text-gray-900 font-medium">
            Lisinopril – 10mg
          </p>
          <p className="text-sm text-gray-500">
            For blood pressure control
          </p>
        </div>

        <div className="w-5 h-5 rounded-full border border-green-400 flex items-center justify-center">
          <span className="w-2 h-2 bg-green-400 rounded-full"></span>
        </div>
      </div>
    </div>
  );
};

export default MedzSchedule;
>>>>>>> 39e1e4adb902b18a0035e64b68fcd07edf539284
