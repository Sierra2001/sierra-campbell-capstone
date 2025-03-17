import { useParams } from "react-router-dom";

function WorkoutDetails() {
  const { id } = useParams();
  return <h1>Workout Details for ID: {id}</h1>;
}

export default WorkoutDetails;
