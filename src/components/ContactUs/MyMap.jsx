import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css"; // Import Leaflet's default styles

const MyMap = () => {
    return (
      <MapContainer
        center={[51.505, -0.09]} // Set initial coordinates (Latitude, Longitude)
        zoom={13} // Set default zoom level
        className="h-96 w-full rounded-lg shadow-lg"
      >
        {/* Themed TileLayer (Using OpenStreetMap or custom) */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" // Default Theme
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a>'
        />
  
        {/* Add a marker with a popup */}
        <Marker position={[51.505, -0.09]}>
          <Popup>📍 This is a sample location!</Popup>
        </Marker>
      </MapContainer>
    );
  };
  
  export default MyMap;
  