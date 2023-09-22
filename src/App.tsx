import { useState } from "react";
import "./App.css";
import LoginPage from "./pages/LoginPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="h-full grid place-items-center">
      <LoginPage></LoginPage>
    </div>
  );
}

export default App;
