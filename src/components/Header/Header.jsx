import { Link } from "react-router-dom";
import "./Header.scss"; // ✅ Use relative path

function Header() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/workouts">Find a Workout</Link>
      <Link to="/gyms">Find a Gym</Link>
    </nav>
  );
}

export default Header;
