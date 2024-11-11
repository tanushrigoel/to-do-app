import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold text-blue-500">Hello, Tailwind!</h1>
      <p className="text-lg text-gray-600">Testing Tailwind setup</p>
      <div className="grid grid-cols-2 gap-2">
        <div className="bg-red-600 py-2 m-3">1</div>
        <div className="bg-orange-500 py-2 m-3">2</div>
      </div>
    </div>
  );
}

export default App;
