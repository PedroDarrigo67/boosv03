import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import MyMarker from './MyMarker'
import "./styles.css";

const containerStyle = {
  width: '300px',
  height: '300px'
};

const center = {
  lat: -31.416479418470136,
  lng: -64.18349501420751
};

const points = [
  { id: 1, title: "Round Pond", lat: -31.425188870219415, lng: -64.1882807054326 },
  { id: 2, title: "Second Pond", lat: -31.401196894459815, lng: -64.12224259407479 }
];

export function MapCarga() {
  return (
    <div>
       <LoadScript
      googleMapsApiKey="AIzaSyCgURtcoZHEI3GaNthBjBEjBwsjV5llAKc"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={11}
        /**  onClick={ev => {
          console.log("lactitud = ", ev.latLng.lat());
          console.log("longitud = ", ev.latLng.lng()); 
          
    }}*/
      >
        {points.map(({lat, lng, id, title}) => {  
          return ( 
            <MyMarker key={id} lat={lat} lng={lng} text={id} tooltip={title}/>
           )
         })};
        <></>
      
      </GoogleMap>
    </LoadScript>
    </div>
  )
}

