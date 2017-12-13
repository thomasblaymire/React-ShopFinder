import React, {Component} from 'react';
import {connect} from 'react-redux';
import GoogleMap from '../components/GoogleMap';
import SearchBar from './SearchBar'

class ParcelshopList extends Component {

    renderLocations(locationData) {
        const lat = locationData.geomerty.bounds.northeast.lat;
        const lng = locationData.geomerty.bounds.northeast.lat;
    }

    render() {
        return (
            <div>
                <SearchBar />
                <GoogleMap />
            </div>

        );
    }
}

export default ParcelshopList;
