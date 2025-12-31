import Navbar from "./components/Navbar";
import Greeting from "./components/Greeting";
import DashboardGrid from "./components/DashboardGrid";

function App() {
  return 
    <div className="app">
      <Navbar />
      <Greeting />
      <DashboardGrid />
    </div>
  );
}

export default App;
