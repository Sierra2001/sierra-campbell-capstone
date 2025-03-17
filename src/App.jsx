import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Workouts from "./pages/Workouts/Workouts";
import WorkoutDetails from "./pages/WorkoutDetails/WorkoutDetails";
import Gyms from "./pages/Gyms/Gyms";
import "./styles/global.scss";

function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/workouts" element={<Workouts />} />
        <Route path="/workouts/:id" element={<WorkoutDetails />} />
        <Route path="/find-gym" element={<Gyms />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
