import React, {Component} from 'react';

class GoogleMap extends Component {
    componentDidMount() {
        new google.maps.Map(this.refs.map, {
            zoom: 12,
            center: {
                lat: 53.798333,
                lng: -1.538291
            }
        });
    }

    render() {
        return (
            <div>
                <div className="google-map" ref="map" />
            </div>
        );
    }
}

export default GoogleMap;
