import { Action } from '@ngrx/store';
import { Cities } from '../models/cities.models';

export enum CitiesActionTypes{
    LOAD_CITIES = '[CITIES] Load Cities',
    LOAD_CITIES_SUCCESS = '[CITIES] Load Cities Success',
    LOAD_CITIES_FAILURE = '[CITIES] Load Cities Failure',
    RESET = '[CITIES] Reset',
    // SEND_CITIES = '[CITIES] Send Cities',
    // SEND_CITIES_SUCCESS = '[CITIES] Send Cities Success',
    // SEND_CITIES_FAILURE = '[CITIES] Send Cities Failure',
}
export class LoadCitiesAction implements Action{
    readonly type = CitiesActionTypes.LOAD_CITIES;

    constructor(public payload: string){}
}
export class LoadCitiesSuccessAction implements Action{
    readonly type = CitiesActionTypes.LOAD_CITIES_SUCCESS;

    constructor(public payload: Cities){}
}
export class LoadCitiesFailureAction implements Action{
    readonly type = CitiesActionTypes.LOAD_CITIES_FAILURE;

    constructor(public payload: Error){}
}

export class Reset implements Action{
  readonly type = CitiesActionTypes.RESET;
}

export type CitiesAction = LoadCitiesAction |
    LoadCitiesSuccessAction |
    LoadCitiesFailureAction |
    Reset;
