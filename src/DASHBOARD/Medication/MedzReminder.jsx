import MedzSchedule from "./MedzSchedule";

function MedzReminder() {
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

        <button className="px-4 py-2 bg-indigo-600 text-white text-sm rounded-lg hover:bg-indigo-700">
          + Add Medication
        </button>
      </div>

      {/* Today's Schedule */}
      <section className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-900">
          Today’s Schedule
        </h3>

        <div className="space-y-4">
          <MedzSchedule />

          {/* Second time block */}
          <div className="bg-white border border-gray-200 rounded-xl p-4 space-y-4">
            <div className="flex items-center gap-2 text-sm font-semibold text-gray-700">
              <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
              20:00
            </div>

            <div className="flex justify-between items-start">
              <div>
                <p className="text-gray-900 font-medium">
                  Metformin – 500mg
                </p>
                <p className="text-sm text-gray-500">
                  Take with meals
                </p>
              </div>

              <div className="w-5 h-5 rounded-full border border-green-400 flex items-center justify-center">
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Medications */}
      <section className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-900">
          All Medications
        </h3>

        <div className="space-y-4">
          {/* Medication Card */}
          <div className="bg-white border border-gray-200 rounded-xl p-4 flex justify-between">
            <div>
              <p className="font-semibold text-gray-900">
                Metformin
              </p>
              <p className="text-sm text-gray-500">
                Dosage: 500mg
              </p>
              <p className="text-sm text-gray-500">
                Frequency: Twice daily
              </p>
              <p className="text-sm text-gray-500">
                Time: 08:00, 20:00
              </p>
              <p className="text-sm text-gray-500">
                Notes: Take with meals
              </p>
            </div>

            <button className="text-red-500 hover:text-red-600 text-sm">
              Delete
            </button>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-4 flex justify-between">
            <div>
              <p className="font-semibold text-gray-900">
                Lisinopril
              </p>
              <p className="text-sm text-gray-500">
                Dosage: 10mg
              </p>
              <p className="text-sm text-gray-500">
                Frequency: Once daily
              </p>
              <p className="text-sm text-gray-500">
                Time: 08:00
              </p>
              <p className="text-sm text-gray-500">
                Notes: For blood pressure control
              </p>
            </div>

            <button className="text-red-500 hover:text-red-600 text-sm">
              Delete
            </button>
          </div>
        </div>
      </section>

      {/* Reminder Banner */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-sm text-yellow-800">
        Reminder: You’ll receive notifications when it’s time to take your
        medications. Ensure notifications are enabled.
      </div>
    </div>
  );
};

export default MedzReminder;

