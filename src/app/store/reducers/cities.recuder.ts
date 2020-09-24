import { createReducer, on } from '@ngrx/store';
import { CitiesAction, CitiesActionTypes } from '../actions/cities.actions';
import { Cities } from '../models/cities.models';

export interface CitiesState {
    city: Cities;
    loading: Boolean,
    error: Error,
}

const initialState: CitiesState = {
    city: {name: ''},
    loading: false,
    error: undefined,
}

export function citiesReducer(state: CitiesState = initialState, action: CitiesAction) {
    switch(action.type){
        case CitiesActionTypes.LOAD_CITIES:
            return{
                ...state,
                loading: true,
            };
        case CitiesActionTypes.LOAD_CITIES_SUCCESS:
            return{
                ... state,
                city: action.payload,
                loading:false,
            };
        case CitiesActionTypes.LOAD_CITIES_FAILURE:
            return{
                ...state,
                error: action.payload,
                loading: false,
            };
        case CitiesActionTypes.SEND_CITIES:
            return {
                ...state,
                loading: true,
            };
        case CitiesActionTypes.SEND_CITIES_SUCCESS:
            return {
                ...state,
                city: action.payload,
                loading: false,
            };
        case CitiesActionTypes.SEND_CITIES_FAILURE:
            return{
                ...state,
                error: action.payload,
                loading: false,
            };
    }
}
