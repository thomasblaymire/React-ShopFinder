import React, {Component} from 'react';
import {connect} from 'react-redux';
import GoogleMap from '../components/GoogleMap';
import SearchBar from './SearchBar'

class ParcelshopList extends Component {

    renderLocation(location) {
        const lat = locationData.geomerty.bounds.northeast.lat;
        const lng = locationData.geomerty.bounds.northeast.lat;

        console.log('hit');
        console.log(lat);
        console.log(lng);

    }

    render() {
        return (
            <div>
                <SearchBar />
                <GoogleMap  />
                {(this.renderLocation)}
            </div>

        );
    }
}

function mapStateToProps({ location }) {
    return { location };
    console.log(location);
}

export default connect(mapStateToProps)(ParcelshopList);
