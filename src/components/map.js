import React from 'react';
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '60vw',
  height: '60vh',
};

const center = {
  lat: 38.603851, // Replace with your latitude
  lng: -121.2652861, // Replace with your longitude
};


function MapLocation() {

    const markerOptions = {
        position: center,
        icon: 'https://maps.google.com/mapfiles/ms/icons/blue-dot.png', // Use the URL for the blue marker icon
      };
    
      return (
        <LoadScript googleMapsApiKey="AIzaSyBxKOOK23kjb44vaZ4YpJanEgUQwYi6h7E">
          <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
            <Marker {...markerOptions} />
          </GoogleMap>
        </LoadScript>
      );
    };

export default MapLocation;
