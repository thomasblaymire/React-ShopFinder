import { FETCH_LOCATION } from '../actions/index';

export default function(state = [], action) {
    switch (action.type) {
        case FETCH_LOCATION:
            return [action.payload.data, ...state];
    }
    return state;
}
