import React from 'react';
import { Map as LeafletMap, TileLayer, Marker } from 'react-leaflet';

const Map = ({ addressCoords }) => (
  <>
    {addressCoords && (
      <LeafletMap
        center={[addressCoords.latitude, addressCoords.longitude]}
        zoom={16}
        style={{ width: '60vw', height: '50vh' }}
      >
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[addressCoords.latitude, addressCoords.longitude]} />
      </LeafletMap>
    )}
  </>
);

export default Map;
