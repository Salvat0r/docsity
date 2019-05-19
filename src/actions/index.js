import YahooWeather from '../apis/YahooWeather';
import GeoCoding from '../apis/GeoCoding';

import { FETCH_WHEATHER_POSITION, FETCH_NAME_POSITION, GET_LOCATION, LOADING_LOCATION, CHANGE_CLASS } from './constType';
import { API_GEOCODING } from '../apis/AppID';

export const getLocation = () => async dispatch => {
    dispatch({type: LOADING_LOCATION });
    const geolocation = navigator.geolocation;
    await geolocation.getCurrentPosition((position) => {
        dispatch({
            type: GET_LOCATION,
            payload: position
        });
        dispatch(fetchWeatherPosition(position));
        dispatch(geoCodingPositionName(position));
    });
} 

export const fetchWeatherPosition = (position) => async dispatch => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const promise = await YahooWeather.get( '/' + lat + ',' + lon + '?lang=it&units=si');
    dispatch({
        type: FETCH_WHEATHER_POSITION,
        payload: promise.data
    });
};

export const geoCodingPositionName = (position) => async dispatch => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const promise = await GeoCoding.get('json?latlng=' + lat + ',' + lon + '&key=' + API_GEOCODING);
    dispatch({
        type: FETCH_NAME_POSITION,
        payload: promise.data
    });
};

export const handleHoverAction = () => {
    return {
        type: CHANGE_CLASS
    }
};