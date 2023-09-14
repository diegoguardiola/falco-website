import React from 'react';
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';

const sizes = {
  desktop: 992,
  tablet: 768,
  phone: 576
};

function getMapWidth() {
  const width = window.innerWidth;

  if (width > sizes.desktop) {
    return '60vw'; // for desktop
  } else if (width > sizes.tablet && width <= sizes.desktop) {
    return '80vw'; // for tablets
  } else if (width > sizes.phone && width <= sizes.tablet) {
    return '90vw'; // for larger phones
  } else {
    return '90vw'; // for smaller phones
  }
}


const center = {
  lat: 38.603851, // Replace with your latitude
  lng: -121.2652861, // Replace with your longitude
};


function MapLocation() {

  const [mapWidth, setMapWidth] = React.useState(getMapWidth());

  React.useEffect(() => {
    function handleResize() {
      setMapWidth(getMapWidth());
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const containerStyle = {
    width: mapWidth,
    height: '60vh',
  };

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
