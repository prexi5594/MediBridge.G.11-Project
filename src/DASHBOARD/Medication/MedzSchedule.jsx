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

