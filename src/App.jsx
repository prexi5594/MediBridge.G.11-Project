import AdviceList from "./DASHBOARD/Education/AdviceList";
import MedzReminder  from "./DASHBOARD/Medication/MedzReminder";
import HealthOverviewPage from "./PAGES/HealthOverviewPage";
function App() {
  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <h1 className="text-3xl font-bold text-center mb-6">
        MediBridge Education – Chronic Illness Advice
      </h1>
      <AdviceList />
      <MedzReminder />
      <HealthOverviewPage />
    </div>
  );
}

export default App;























