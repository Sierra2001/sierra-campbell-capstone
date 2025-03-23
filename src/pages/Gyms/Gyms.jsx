import "./Gyms.scss";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const containerStyle = {
  width: "350px",
  height: "350px",
  borderRadius: "50%",
  overflow: "hidden",
  position: "absolute",
  top: "70%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  marginTop: "50px",
};

const DEFAULT_LOCATION = { lat: 43.7, lng: -79.42 };
const API_KEY = import.meta.env.VITE_API_KEY;
const LIBRARIES = ["places"];

function Gyms() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: API_KEY,
    libraries: LIBRARIES,
  });

  const [location, setLocation] = useState(null);
  const [gyms, setGyms] = useState([]);
  const [error, setError] = useState(null);
  const [loadingGyms, setLoadingGyms] = useState(false);

  // Fetch nearby gyms based on location
  useEffect(() => {
    if (!isLoaded || !location) return;

    const fetchGyms = () => {
      setLoadingGyms(true);
      const service = new window.google.maps.places.PlacesService(
        document.createElement("div")
      );
      console.log(service);

      const request = {
        location: new window.google.maps.LatLng(location.lat, location.lng),
        radius: 5000,
        keyword: "gym",
      };

      service.nearbySearch(request, (results, status) => {
        console.log(window.google.maps.places.PlacesServiceStatus.OK);
        console.log(results, status);
        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
          setGyms(results);
        } else {
          console.error("Error fetching gyms:", status);
          setError("Failed to fetch gyms. Try again later.");
        }
        setLoadingGyms(false);
      });
    };

    fetchGyms();
  }, [isLoaded, location]);

  // Function to get location using Google Geolocation API
  const getLocationFromAPI = async () => {
    const apiKey = API_KEY;
    const url = `https://www.googleapis.com/geolocation/v1/geolocate?key=${apiKey}`;

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to get geolocation");
      }

      const data = await response.json();
      const { lat, lng } = data.location;

      setLocation({ lat, lng });
    } catch (error) {
      console.error("Geolocation error:", error);
      setError("Failed to fetch location. Showing gyms in Toronto.");
      setLocation(DEFAULT_LOCATION);
    }
  };

  useEffect(() => {
    getLocationFromAPI();
  }, []);

  if (!isLoaded) return <p>Loading map...</p>;
  if (!location) return <p>Detecting your location...</p>;

  return (
    <div className="gyms-container">
      {error && <p className="error-message">⚠️ {error}</p>}

      <div className="gyms-header">
        <h2>See gyms near you</h2>
        <Link to="/find-workout" className="button find-workout">
          Find Workouts
        </Link>
      </div>

      {/* Added wrapper for map */}
      <div className="map-wrapper">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={location}
          zoom={14}
        >
          <Marker position={location} label="You" />
          {loadingGyms ? (
            <p>Loading gyms...</p>
          ) : (
            gyms.map((gym) => (
              <Marker
                key={gym.place_id}
                position={{
                  lat: gym.geometry.location.lat(),
                  lng: gym.geometry.location.lng(),
                }}
                title={gym.name}
              />
            ))
          )}
        </GoogleMap>
      </div>
    </div>
  );
}

export default Gyms;
