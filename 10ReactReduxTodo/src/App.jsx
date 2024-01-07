import "./App.css";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <>
      <div className="container mx-auto">
        <h1 className="text-center text-4xl font-bold text-white mb-10">
          Todo App
        </h1>
        <AddTodo  />
        <Todos />
      </div>
    </>
  );
}

export default App;
