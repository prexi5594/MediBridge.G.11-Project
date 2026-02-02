import { useState } from "react";
import Login from "./AUTHENTICATION/Login";
import Register from "./AUTHENTICATION/Register";

 function App() {
  const [showLogin, setShowLogin] = useState(true);

  return showLogin ? (
    <Login onSwitch={() => setShowLogin(false)} />
  ) : (
    <Register onSwitch={() => setShowLogin(true)} />
  );
}


export default App;























