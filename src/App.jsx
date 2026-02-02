<<<<<<< HEAD
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
=======
import { useState } from "react";
import Login from "./AUTHENTICATION/Login";
import Register from "./AUTHENTICATION/Register";

 function App() {
  const [showLogin, setShowLogin] = useState(true);

  return showLogin ? (
    <Login onSwitch={() => setShowLogin(false)} />
  ) : (
    <Register onSwitch={() => setShowLogin(true)} />
>>>>>>> b5856026b2ab50aa9998f2767fade5a2bfcc317e
  );
}


export default App;























