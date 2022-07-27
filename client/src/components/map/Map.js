import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '300px',
  height: '300px'
};

const center = {
  lat: -31.416479418470136,
  lng: -64.18349501420751
};

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
        <></>
      </GoogleMap>
    </LoadScript>
    </div>
  )
}

