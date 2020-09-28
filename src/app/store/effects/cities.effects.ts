import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators'
import { CitiesAction, CitiesActionTypes, LoadCitiesAction, LoadCitiesFailureAction, LoadCitiesSuccessAction } from '../actions/cities.actions';
import { of } from 'rxjs'
import { WeatherService } from 'src/app/weather.service';
import { InjectableCompiler } from '@angular/compiler/src/injectable_compiler';


@Injectable()
export class CitiesEffects {
    @Effect()
    loadCities$ = this.actions$.pipe(
        ofType<LoadCitiesAction>(CitiesActionTypes.LOAD_CITIES),
        mergeMap(
            () => this.weatherService.getWeatherResult()
                .pipe(
                    map(data =>{
                        return new LoadCitiesSuccessAction(data)
                    }),
                    catchError(error => of(new LoadCitiesFailureAction(error)))
                )
        )
    )

    constructor(
        private actions$: Actions,
        private weatherService: WeatherService,
    ) { }
}