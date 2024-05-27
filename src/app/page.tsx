"use client"
import 'leaflet/dist/leaflet.css';
import dynamic from 'next/dynamic';
const MyMap = dynamic(() => import("../components/map/index"), { ssr:false })

const Home = () =>{
  return (
      <MyMap/>
  );
}

export default Home;
