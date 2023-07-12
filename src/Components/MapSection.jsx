import React, {useMemo} from 'react';
import {GoogleMap, useLoadScript, MarkerF} from '@react-google-maps/api';

const MapSection = () => {
  const {isLoaded, loadError} = useLoadScript({
    // googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    googleMapsApiKey: 'AIzaSyDa7HO7FT5xZ5wLdM1Jn_JGxr9UCeJJ-5o',
  });
  if (loadError) return 'Error loading maps';
  if (!isLoaded) {
    return <div>Loading ...</div>;
  }
  return <Map />;

  function Map() {
    const center = useMemo(
      () => ({lat: 49.03568820464277, lng: -122.24952215576592}),
      []
    );

    const mapOptions = {
      styles: [
        {
          featureType: 'poi.business',
          stylers: [{visibility: 'off'}],
        },
        {
          featureType: 'road',
          elementType: 'all',
          stylers: [{saturation: -100}, {lightness: 45}],
        },
      ],
    };
    const markerPosition = center;
    return (
      <div className="flex justify-center bg-primary py-4">
        <GoogleMap
          zoom={17}
          center={center}
          options={mapOptions}
          mapContainerClassName="w-96 h-96"
        >
          <MarkerF position={markerPosition} />
        </GoogleMap>
      </div>
    );
  }
};

export default MapSection;
