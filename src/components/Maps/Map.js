import React, { Component } from 'react';

import { Map, GoogleApiWrapper } from 'google-maps-react';
import { API_GOOGLEMAPS } from '../../apis/AppID';

const mapStyles = {
    width: '100%',
    height: '100%'
};

export class MapContainer extends Component {
    render(props) {
        const lat = this.props.coords.latitude;
        const lon = this.props.coords.longitude;
        return (
            <Map
                google={this.props.google}
                zoom={14}
                style={mapStyles}
                initialCenter={{
                    lat: lat,
                    lng: lon
                }}
            />
        );
    }
}

export default GoogleApiWrapper({
    apiKey: API_GOOGLEMAPS
})(MapContainer);