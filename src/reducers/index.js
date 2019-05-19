import { combineReducers } from 'redux';
import { FETCH_WHEATHER_POSITION, FETCH_NAME_POSITION, GET_LOCATION, LOADING_LOCATION, CHANGE_CLASS } from '../actions/constType';

const initialState = {
    position: { 
        latitude: 41,
        longitude: 12  
    },
    active: false
};

const positionReducer = (state = initialState.position, action) => {
    switch (action.type) {
        case LOADING_LOCATION:
            return state
        case GET_LOCATION:
            return action.payload.coords
        default:
            return state
    }
};

const baseDatiReducer = (state = [], action) => {
    switch (action.type) {
        case FETCH_WHEATHER_POSITION:
            return action.payload
        default:
            return state
    }
};

const namePositionReducer = (state = [], action) => {
    switch (action.type) {
        case FETCH_NAME_POSITION:
            return action.payload
        default:
            return state
    }
};

const handleHoverReducer = (state = initialState.active, action) => {
    switch (action.type) {
        case CHANGE_CLASS:
            return !state
        default:
            return state
    }
};

const iconListReducers = () => {
    return [
        { id: 'clear-day', href: '/icon/Sun.svg'},
        { id: 'clear-night', href: '/icon/Sun.svg' },
        { id: 'rain', href: '/icon/Rain.svg' },
        { id: 'snow', href: '/icon/Snow.svg' },
        { id: 'sleet', href: '/icon/Snow.svg' },
        { id: 'wind', href: '/icon/Rain.svg' },
        { id: 'fog', href: '/icon/Cloud.svg' },
        { id: 'cloudy', href: '/icon/Cloud.svg' },
        { id: 'partly-cloudy-day', href: '/icon/Cloud.svg' },
        { id: 'partly-cloudy-night', href: '/icon/Cloud.svg' },
    ];
};

export default combineReducers({
    position: positionReducer,
    baseDati: baseDatiReducer,
    icon: iconListReducers,
    positionName: namePositionReducer,
    activeClass: handleHoverReducer
})