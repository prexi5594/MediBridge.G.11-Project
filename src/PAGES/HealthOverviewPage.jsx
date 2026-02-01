import { useState } from 'react';
import WelcomeBanner from '../HealthOverview/WelcomeBanner';
import HealthForm from '../HealthOverview/HealthForm';
import HealthDataCard from '../HealthOverview/HealthDataCard';

const HealthOverviewPage = () => {
  const user = {
    name: 'John Doe',
    disease: 'Type 1 Diabetes',
  };

  const [showForm, setShowForm] = useState(false);
  const [records, setRecords] = useState([]);

  const advice = [
    { title: 'Blood Pressure', message: 'Your blood pressure looks stable.' },
    { title: 'Blood Sugar', message: 'Blood sugar is within range.' },
    { title: 'Weight', message: 'Maintain a healthy lifestyle.' },
    { title: 'General', message: 'Stay hydrated and take medications.' },
  ];

  const submitForm = (data) => {
    setRecords([data]);
    setShowForm(false);
  };


  return (
    <div>
      <WelcomeBanner user={user} />
      <button
        onClick={() => setShowForm(true)}
        className='bg-blue-500'
      >
        Submit Health Data
      </button>
      {showForm && (
        <HealthForm
          onSubmit={submitForm}
          onCancel={() => setShowForm(false)}
        />
      )}
    <div>
      <div>
        {advice.length === 0 ? (
          <HealthDataCard title="Personalized Health Advice">
            <p>Submit health data to receive personalized advice!</p>
          </HealthDataCard>
        ) :(
          advice.map((a, index) => (
            <HealthDataCard key={index} title={a.title}>
              <p>{a.message}</p>
            </HealthDataCard>
          ))
        )}
      </div>
      <HealthDataCard title="Recent Entries">
        {records.length === 0 ? (
          <p>No health records yet</p>
        ) : (
          records.map((record, index) => (
            <div key={index}>
              <p>Blood Pressure: {record.bloodPressure}</p>
              <p>Blood Sugar: {record.bloodSugar}</p>
              <p>Weight: {record.weight}</p>
            </div>
          ))
        )}
      </HealthDataCard>
    </div>
    </div>
  );
};

export default HealthOverviewPage;
