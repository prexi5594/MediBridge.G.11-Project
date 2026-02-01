import { useState } from "react";
import MedzSchedule from "./MedzSchedule";

function MedzReminder() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [showAllMeds, setShowAllMeds] = useState(false);
  const [medications, setMedications] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    dosage: "",
    frequency: "Once daily",
    notes: "",
  });

  // Map medications by time for Today’s Schedule
  const scheduleMap = medications.reduce((acc, med) => {
    med.times.forEach((time) => {
      if (!acc[time]) acc[time] = [];
      acc[time].push(med);
    });
    return acc;
  }, {});

  const handleSubmit = () => {
    const times =
      formData.frequency === "Once daily" ? ["08:00"] : ["08:00", "20:00"];

    setMedications((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        name: formData.name,
        dosage: formData.dosage,
        frequency: formData.frequency,
        times,
        notes: formData.notes,
      },
    ]);

    setFormData({
      name: "",
      dosage: "",
      frequency: "Once daily",
      notes: "",
    });

    setIsFormOpen(false);
  };

  const handleDelete = (id) => {
    setMedications((prev) => prev.filter((med) => med.id !== id));
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">
            Medication Reminders
          </h2>
          <p className="text-sm text-gray-500">
            Manage and track your daily medications
          </p>
        </div>

        <div className="flex gap-3">
          <button
            onClick={() => setIsFormOpen(true)}
            className="px-4 py-2 bg-indigo-600 text-white text-sm rounded-lg"
          >
            + Add Medication
          </button>

          <button
            onClick={() => setShowAllMeds((prev) => !prev)}
            className="px-4 py-2 bg-green-500 text-white text-sm rounded-lg"
          >
            {showAllMeds ? "Hide Medications" : "Open Medications"}
          </button>
        </div>
      </div>

      {/* Add Medication Form */}
      {isFormOpen && (
        <div className="bg-white border border-gray-200 rounded-xl p-6 space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">New Medication</h3>

          <div className="grid grid-cols-2 gap-4">
            <input
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              placeholder="Medication name"
              className="border rounded-lg p-2"
            />

            <input
              value={formData.dosage}
              onChange={(e) =>
                setFormData({ ...formData, dosage: e.target.value })
              }
              placeholder="Dosage"
              className="border rounded-lg p-2"
            />

            <select
              value={formData.frequency}
              onChange={(e) =>
                setFormData({ ...formData, frequency: e.target.value })
              }
              className="border rounded-lg p-2"
            >
              <option>Once daily</option>
              <option>Twice daily</option>
            </select>

            <input
              value={formData.notes}
              onChange={(e) =>
                setFormData({ ...formData, notes: e.target.value })
              }
              placeholder="Notes"
              className="border rounded-lg p-2"
            />
          </div>

          <div className="flex gap-3">
            <button
              onClick={handleSubmit}
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg"
            >
              Add Medication
            </button>

            <button
              onClick={() => setIsFormOpen(false)}
              className="px-4 py-2 bg-gray-200 rounded-lg"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Today’s Schedule */}
      <section className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-900">Today’s Schedule</h3>
        {Object.keys(scheduleMap).length === 0 ? (
          <p className="text-sm text-gray-500">No medications scheduled yet.</p>
        ) : (
          Object.entries(scheduleMap).map(([time, meds]) => (
            <MedzSchedule key={time} time={time} medications={meds} />
          ))
        )}
      </section>

      {/* All Medications */}
      {showAllMeds && (
        <section className="space-y-4 mt-4">
          <h3 className="text-lg font-semibold text-gray-900">All Medications</h3>

          {medications.length === 0 ? (
            <p className="text-sm text-gray-500">No medications added yet.</p>
          ) : (
            medications.map((med) => (
              <div
                key={med.id}
                className="bg-white border rounded-xl p-4 flex justify-between"
              >
                <div>
                  <p className="font-semibold text-gray-900">{med.name}</p>
                  <p className="text-sm text-gray-500">Dosage: {med.dosage}</p>
                  <p className="text-sm text-gray-500">Frequency: {med.frequency}</p>
                  <p className="text-sm text-gray-500">Time: {med.times.join(", ")}</p>
                  <p className="text-sm text-gray-500">Notes: {med.notes}</p>
                </div>

                <button
                  onClick={() => handleDelete(med.id)}
                  className="text-red-500 text-sm"
                >
                  Delete
                </button>
              </div>
            ))
          )}
        </section>
      )}

      {/* Reminder Info */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-sm text-yellow-800">
        Reminder: You’ll receive notifications when it’s time to take your
        medications.
      </div>
    </div>
  );
}

export default MedzReminder;
