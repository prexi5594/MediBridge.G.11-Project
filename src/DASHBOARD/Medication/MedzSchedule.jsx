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

