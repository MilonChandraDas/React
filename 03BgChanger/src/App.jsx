import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div className="w-full h-screen" style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-10 inset-x-0 gap-3">
        <button
          onClick={() => setColor("red")}
          className="bg-red-500 py-2 px-5 rounded-full outline-0 text-white hover:text-2xl ease-in-out duration-300">
          Red
        </button>
        <button
          onClick={() => setColor("blue")}
          className="bg-blue-500 py-2 px-5 rounded-full outline-0 text-white hover:text-2xl ease-in-out duration-300">
          Blue
        </button>
        <button
          onClick={() => setColor("orange")}
          className="bg-orange-500 py-2 px-5 rounded-full outline-0 text-white hover:text-2xl ease-in-out duration-300">
          Orange
        </button>
        <button
          onClick={() => setColor("green")}
          className="bg-green-500 py-2 px-5 rounded-full outline-0 text-white hover:text-2xl ease-in-out duration-300">
          Green
        </button>
        <button
          onClick={() => setColor("yellow")}
          className="bg-yellow-500 py-2 px-5 rounded-full outline-0 text-white hover:text-2xl ease-in-out duration-300">
          Yellow
        </button>
        <button
          onClick={() => setColor("purple")}
          className="bg-purple-500 py-2 px-5 rounded-full outline-0 text-white hover:text-2xl ease-in-out duration-300">
          Purple
        </button>
        <button
          onClick={() => setColor("darkblue")}
          className="bg-pink-500 py-2 px-5 rounded-full outline-0 text-white hover:text-2xl ease-in-out duration-300">
          Darkblue
        </button>
      </div>
    </div>
  );
}

export default App;
