function MedzSchedule({ time, medications }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 space-y-4">
      <div className="flex items-center gap-2 text-sm font-semibold text-gray-700">
        <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
        {time}
      </div>

      {medications.map((med) => (
        <div key={med.id} className="flex justify-between items-start">
          <div>
            <p className="text-gray-900 font-medium">
              {med.name} – {med.dosage}
            </p>
            {med.notes && (
              <p className="text-sm text-gray-500">{med.notes}</p>
            )}
          </div>

          <div className="w-5 h-5 rounded-full border border-green-400 flex items-center justify-center">
            <span className="w-2 h-2 bg-green-400 rounded-full"></span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MedzSchedule;
