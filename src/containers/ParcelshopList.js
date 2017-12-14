import React, {Component} from 'react';
import {connect} from 'react-redux';
import GoogleMap from '../components/GoogleMap';
import SearchBar from './SearchBar';

class ParcelshopList extends Component {
    constructor(props) {
        super(props);

        this.state = {lat:-34.397 , lng: 150.644}

    }

    renderLocation() {
        this.
        console.log('Render location hit');
    }

    render() {
        return (
            <div>
                <SearchBar />
                <button onClick={() => this.setState({lat: 53.800755, lng: -1.549077})}>Leeds</button>
                <GoogleMap lat={this.state.lat} lng={this.state.lng}  />
            </div>

        );
    }
}

export default ParcelshopList;
