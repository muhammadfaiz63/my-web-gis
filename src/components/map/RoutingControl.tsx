import React, { useEffect, useState } from 'react';
import { useMap } from 'react-leaflet';
import L, { LatLngTuple } from 'leaflet';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css'; // Import CSS for Leaflet Routing Machine
import 'leaflet-routing-machine'; // Import Leaflet Routing Machine
import 'leaflet-control-geocoder'

interface RoutingControlProps {
  waypoints: LatLngTuple[];
}

const RoutingControl: React.FC<RoutingControlProps> = ({ waypoints }) => {
  const map = useMap();
  // const [routingControl, setRoutingControl] = useState<any>(null); // State to store routing control
  // const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    if (!waypoints || waypoints.length < 2 || !map) return;

    const newRoutingControl = L.Routing.control({
      waypoints: waypoints.map(([lat, lng]) => L.latLng(lat, lng)),
      routeWhileDragging: true,
      lineOptions: {
        styles: [{color: 'blue', weight: 5}],
        extendToWaypoints: true,
        missingRouteTolerance: 10
      },
      geocoder: (L.Control as any).Geocoder.photon()
    //   router: new L.Routing.osrmv1({
    //     language: 'en',
    //     profile: 'car',
    //   }),
    });

    newRoutingControl.addTo(map);
    return () => {
      if (map && newRoutingControl) map.removeControl(newRoutingControl)
    }
  }, []);

  // Render null while loading or if map is not available
  return null;
};

export default RoutingControl;
