import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap } from 'react-leaflet';
import L, { LatLngExpression, LatLngTuple, icon } from 'leaflet';
import 'leaflet.locatecontrol'; 
import "leaflet.locatecontrol/dist/L.Control.Locate.min.css";
import RoutingControl from './RoutingControl'; // Adjust the path as needed

interface Warehouse {
  name: string;
  position: LatLngTuple;
}

interface Route {
  positions: LatLngExpression[];
}

const MapComponent: React.FC = () => {
  const headquarters: LatLngExpression = [-6.1390, 106.8650]; // Jakarta Utara
  const [warehouses, setWarehouses] = useState<Warehouse[]>([
    { name: "Jakarta Pusat", position: [-6.1751, 106.8650] },
    { name: "Jakarta Selatan", position: [-6.2895, 106.7576] },
    { name: "Jakarta Barat", position: [-6.1683, 106.7583] },
    { name: "Jakarta Timur", position: [-6.2250, 106.9005] }
  ]);

  const ICON = icon({
    iconUrl: "/images/marker-icon.png",
    iconSize: [22, 32],
  });

  const handleMarkerDrag = (index: number, newPosition: LatLngTuple) => {
    setWarehouses(prevWarehouses => {
      const updatedWarehouses = [...prevWarehouses];
      updatedWarehouses[index].position = newPosition;
      return updatedWarehouses;
    });
  };

  return (
    <MapContainer center={headquarters} zoom={11} style={{ height: '100vh', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="© OpenStreetMap contributors"
      />
      {/* <Marker position={headquarters} icon={ICON}>
        <Popup>Headquarters: Jakarta Utara</Popup>
      </Marker> */}
      {/* {routes.map((route, index) => (
        <Polyline key={index} positions={route.positions} color='blue' />
      ))} */}
      {/* <LocateControl /> */}
      <RoutingControl
          waypoints={[headquarters, ...(warehouses.map(w => w.position))]}
        />
    </MapContainer>
  );
};

export default MapComponent;
