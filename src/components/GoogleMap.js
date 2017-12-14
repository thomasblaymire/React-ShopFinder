import React, {Component} from 'react';

class GoogleMap extends Component {
    shouldComponentUpdate() {
        return false;
    }

    componentWillReceiveProps(nextProps) {
        this.map.panTo({lat: nextProps.lat, lng: nextProps.lng});
    }

    componentDidMount() {
        this.map = new google.maps.Map(this.refs.map, {
            center: { lat: this.props.lat, lng: this.props.lng },
            zoom:9
        });
    }

    render() {
        return (
                <div id="map" className="google-map" ref="map" />
        );
    }
}

export default GoogleMap;
