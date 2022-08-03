//https://react-google-maps-api-docs.netlify.app/#section-introduction

import React from 'react'
import { GoogleMap, LoadScript, Marker} from '@react-google-maps/api';


const containerStyle = {
  width: '475px',
  height: '475px'
};

const center = {
  lat: -31.416479418470136,
  lng: -64.18349501420751
};

const points = [
  { id: 1, title: "🏡", lat: -31.425188870219415, lng: -64.1882807054326 },
  { id: 2, title:"🛑", lat: -31.401196894459815, lng: -64.12224259407479 }
];


export function Map() {
  return (
    <div>
       <LoadScript
      googleMapsApiKey="AIzaSyCgURtcoZHEI3GaNthBjBEjBwsjV5llAKc"
    >
    
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={11}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        {points.map(({lat, lng, id, title}) => {  
          return ( 
            <Marker key={id} lat={lat} lng={lng} text={id} tooltip={title}/>
           )
         })};
        <></>
        
          
        
      </GoogleMap>
      
    </LoadScript>
    </div>
  )
}

