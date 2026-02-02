import { useState } from 'react';
import useAuth from '../HOOKS/UseAuth';

import WelcomeBanner from '../DASHBOARD/HealthOverview/WelcomeBanner';
import HealthForm from '../DASHBOARD/HealthOverview/HealthForm';
import HealthDataCard from '../DASHBOARD/HealthOverview/HealthDataCard';

const HealthOverviewPage = () => {
  const { user, submitHealthData, getPatientRecords } = useAuth();
  const [showForm, setShowForm] = useState(false);

  const records = getPatientRecords(user.id);
  const latestRecord = records[0];

  const advice = [];

  if (!latestRecord) {
    advice.push({
      title: 'Health Advice',
      message: 'Submit your health data to receive personalized advice.',
    });
  } else {
    advice.push({
      title: 'Blood Pressure',
      message: 'Keep monitoring your blood pressure regularly.',
    });

    advice.push({
      title: 'Blood Sugar',
      message: 'Maintain a balanced diet to keep blood sugar stable.',
    });

    advice.push({
      title: 'Weight',
      message: 'Maintain a healthy lifestyle with regular exercise.',
    });
  }

  const submitForm = (data) => {
    submitHealthData(data);
    setShowForm(false);
  };

  return (
    <div className="p-4">
      <WelcomeBanner user={user} />

      <button
        onClick={() => setShowForm(true)}
        className="bg-blue-500 text-white px-3 py-1 rounded mt-3"
      >
        Submit Health Data
      </button>

      {showForm && (
        <HealthForm
          onSubmit={submitForm}
          onCancel={() => setShowForm(false)}
        />
      )}

      {advice.map((a, index) => (
        <HealthDataCard key={index} title={a.title}>
          <p>{a.message}</p>
        </HealthDataCard>
      ))}

      <HealthDataCard title="Recent Entries">
        {records.length === 0 ? (
          <p>No health records yet</p>
        ) : (
          records.map((record) => (
            <div key={record.id}>
              <p>Blood Pressure: {record.bloodPressure}</p>
              <p>Blood Sugar: {record.bloodSugar}</p>
              <p>Weight: {record.weight}</p>
            </div>
          ))
        )}
      </HealthDataCard>
    </div>
  );
};

export default HealthOverviewPage;
