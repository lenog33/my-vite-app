import Leaflet from "leaflet";
import "leaflet/dist/leaflet.css";

// const WBS = [52.457131, 13.54007]; // WBS coordinates
// const map = Leaflet.map("map").setView(WBS, 13); // create a map object with a center and zoom level

const NZ = [-37.5, 175.0]; // NZ coordinates
const map = Leaflet.map("map").setView(NZ, 6);

const markerIcon = Leaflet.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

Leaflet.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors',
}).addTo(map);

const myLocations = [
  {
    name: "Mount Maunganui",
    location: [-37.632389, 176.171944],
    description: "A dormant volcano towering over a famous surf beach",
  },
  {
    name: "Tongariro National Park",
    location: [-39.200833, 175.580278],
    description: "The oldest national park in New Zealand",
  },
  {
    name: "Rotorua",
    location: [-38.136848, 176.249746],
    description: "The geothermal capital of New Zealand",
  },
  {
    name: "Coromandel",
    location: [-36.760833, 175.4975],
    description: "A peninsula famous for its beaches and rainforest",
  },
  {
    name: "Cape Reinga",
    location: [-34.428611, 172.680833],
    description: "Where the Tasman Sea meets the Pacific Ocean",
  },
  /*   {
    name: "WBS CODING SCHOOL",
    location: [52.457131, 13.54007],
    description: "The best coding school in the world",
  },
  {
    name: "Alexanderplatz",
    location: [52.521918, 13.413215],
    description: "The most famous square in Berlin",
  },
  {
    name: "Brandenburg Gate",
    location: [52.516275, 13.377704],
    description: "The most famous gate in Berlin",
  },
  {
    name: "Berlin Wall",
    location: [52.507541, 13.39032],
    description: "The most famous wall in Berlin",
  }, */
];

// Add markers to the map with a popup
myLocations.forEach((location) => {
  Leaflet.marker(location.location, { icon: markerIcon })
    .bindPopup(`<h3>${location.name}</h3><p>${location.description}</p>`)
    .addTo(map);
});

// Set the view to the bounds of all markers
const bounds = Leaflet.latLngBounds(
  myLocations.map((location) => location.location),
);
map.fitBounds(bounds, { padding: [50, 50] });
