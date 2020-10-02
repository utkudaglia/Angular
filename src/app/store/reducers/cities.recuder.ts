import { CitiesAction, CitiesActionTypes } from '../actions/cities.actions';
import { Cities } from '../models/cities.models';

export interface CitiesState {
    city: Cities;
    loading: boolean;
    error: any;
}

const initialState: CitiesState = {
    city: {
        coord: {
            lon: 0,
            lat: 0,
        },
        weather: [{
            id: 0,
            main: '',
            description: '',
            icon: '',
        }],
        base: '',
        main: {
            temp: 0,
            feels_like: 0,
            temp_min: 0,
            temp_max: 0,
            pressure: 0,
            humidity: 0,
        },
        visibility: 0,
        wind: {
            speed: 0,
            deg: 0,
        },
        cloud: {
            all: 0,
        },
        dt: 0,
        sys: {
            type: 0,
            id: 0,
            country: '',
            sunrise: 0,
            sunset: 0,
        },
        timezone: 0,
        id: 0,
        name: '',
        cod: 0,
    },
    loading: false,
    error: undefined,
};

export function citiesReducer(state: CitiesState = initialState, action: CitiesAction): CitiesState {
    switch (action.type) {
        case CitiesActionTypes.LOAD_CITIES: {
          return {
            ...state,
            loading: true,
          };
        }
        case CitiesActionTypes.LOAD_CITIES_SUCCESS: {
          return {
            ...state,
            city: action.payload,
            loading: false,
          };
        }
        case CitiesActionTypes.LOAD_CITIES_FAILURE: {
          return {
            ...state,
            error: action.payload,
            loading: false,
          };
        }
        default:
          return state;
        // case CitiesActionTypes.SEND_CITIES:
        //     return {
        //         ...state,
        //         loading: true,
        //     };
        // case CitiesActionTypes.SEND_CITIES_SUCCESS:
        //     return {
        //         ...state,
        //         city: action.payload,
        //         loading: false,
        //     };
        // case CitiesActionTypes.SEND_CITIES_FAILURE:
        //     return{
        //         ...state,
        //         error: action.payload,
        //         loading: false,
        //     };
    }
};
