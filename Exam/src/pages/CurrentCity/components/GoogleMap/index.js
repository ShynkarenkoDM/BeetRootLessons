import React from 'react';
import { geolocated } from 'react-geolocated';
import { Map, GoogleApiWrapper } from 'google-maps-react';

// Components

// Styles
import './styles.scss';

// --------------------

const GoogleMap = props => {
  const mapStyles = {
    width: '860px',
    height: '708px',
  };

  const defaultProps = {
    center: {
      lat: 47.83918,
      lng: 35.122242,
    },
    zoom: 14,
  };

  return (
    <div className="google-map">
      <Map
        google={props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={defaultProps.center}
      />
    </div>
  );
};

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 1000,
})(
  GoogleApiWrapper({
    apiKey: 'AIzaSyDjIKv60uxhDYT5Revk8JT9n8DNa16RO2Q',
  })(GoogleMap),
);
