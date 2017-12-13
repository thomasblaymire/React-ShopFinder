// https://maps.googleapis.com/maps/api/geocode/json?address=leeds&key=

import axios from 'axios';

const API_KEY = 'AIzaSyC5QlVt_e5UhmKPTeJrzHEN7LWQAFDNe50';
const ROOT_URL = 'https://maps.googleapis.com/maps/api/geocode/json?address=';

export const FETCH_LOCATION = 'FETCH_LOCATION'

export function fetchLocation(city) {
    const url = `${ROOT_URL}+${city}&key=${API_KEY}`
    const request = axios.get(url);

    console.log(url);

    return {
        type: FETCH_LOCATION,
        payload: request
    };
}
