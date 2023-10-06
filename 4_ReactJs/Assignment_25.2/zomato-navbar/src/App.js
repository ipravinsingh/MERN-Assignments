import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Delivery from "./pages/Delivery";
import DiningOut from "./pages/DiningOut";
import Nightlife from "./pages/Nightlife";


function App() {
  return (
    <div className="App">
      <h1>Zomato</h1>
      <Navbar />
      <h2>Nightlife Restaurants in Delhi NCR</h2>
      <Routes>
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/diningOut" element={<DiningOut />} />
        <Route path="/nightlife" element={<Nightlife />} />
      </Routes>
    </div>
  );
}

export default App;
