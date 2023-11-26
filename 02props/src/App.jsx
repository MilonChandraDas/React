import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <div className="flex gap-2">
      <Card item="Headphone" btn="Buy Now" />
      <Card item="SoundBox" btn="Click Now" />
    </div>
  );
}

export default App;
