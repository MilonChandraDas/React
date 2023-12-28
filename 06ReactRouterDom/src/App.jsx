import Footer from "./components/Footer";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Header /> 
      {/* outlet change element  */}
      <Outlet /> 
      <Footer />
    </>
  );
}

export default App;
