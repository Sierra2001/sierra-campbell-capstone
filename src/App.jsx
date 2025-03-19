import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Workouts from "./pages/Workouts/Workouts";
import WorkoutDetails from "./pages/WorkoutDetails/WorkoutDetails";
import Gyms from "./pages/Gyms/Gyms";
import Strength from "./pages/Strength/Strength";
import Cardio from "./pages/Cardio/Cardio";
import Flexibility from "./pages/Flexibility/Flexibility";
import "./styles/global.scss";

function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/find-workout" element={<Workouts />} />
        <Route path="/workouts/:id" element={<WorkoutDetails />} />
        <Route path="/find-gym" element={<Gyms />} />
        <Route path="/strength" element={<Strength />} />
        <Route path="/cardio" element={<Cardio />} />
        <Route path="/flexibility" element={<Flexibility />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
