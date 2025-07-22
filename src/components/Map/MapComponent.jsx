import React, { useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  ZoomControl,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix icon issue in Leaflet for React (Webpack)
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

// Set default marker icon
let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});
L.Marker.prototype.options.icon = DefaultIcon;

// City coordinates
const locations = [
  { name: "Delhi", lat: 28.6139, lng: 77.209 },
  { name: "Mumbai", lat: 19.073, lng: 72.883 },
  { name: "Bangalore", lat: 12.9724, lng: 77.5806 },
  { name: "Patna", lat: 25.5941, lng: 85.1376 },
  { name: "Amritsar", lat: 31.634, lng: 74.8723 },
];

// Auto-fit map to markers
const FitBounds = ({ locations }) => {
  const map = useMap();

  useEffect(() => {
    const bounds = L.latLngBounds(locations.map((loc) => [loc.lat, loc.lng]));
    map.fitBounds(bounds, { padding: [50, 50] });
  }, [locations, map]);

  return null;
};

const MapComponent = () => {
  return (
    <MapContainer
      className="leaflet-map"
      center={[27.5, 80]}
      zoom={6}
      zoomControl={false} // We'll use custom zoom position
      scrollWheelZoom={false}
      style={{ height: "500px", width: "100%", borderRadius: "10px" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {/* Add zoom control to bottom right */}
      <ZoomControl position="bottomright" />

      {/* Auto-fit to bounds */}
      <FitBounds locations={locations} />

      {/* Add markers */}
      {locations.map((loc, index) => (
        <Marker key={index} position={[loc.lat, loc.lng]}>
          <Popup>{loc.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapComponent;
