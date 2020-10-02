import { Injectable, Input, Pipe } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError, switchMap } from 'rxjs/operators'
import { CitiesAction, CitiesActionTypes, LoadCitiesAction, LoadCitiesFailureAction, LoadCitiesSuccessAction } from '../actions/cities.actions';
import { of } from 'rxjs'
import { WeatherService } from 'src/app/weather.service';
import { InjectableCompiler } from '@angular/compiler/src/injectable_compiler';
import { AppComponent } from '../../app.component';
import { Action } from 'rxjs/internal/scheduler/Action';
import { Cities } from '../models/cities.models';


@Injectable()
export class CitiesEffects {
    @Effect()
    loadCities$ = createEffect(
        () => this.actions$.pipe(
            ofType(CitiesActionTypes.LOAD_CITIES),
            map((action: LoadCitiesAction) => action.payload),
            switchMap((cityName: string) => this.weatherService.getWeatherResult(cityName)
                .pipe(
                    map((cities: Cities) => new LoadCitiesSuccessAction(cities)),
                    catchError(error => of(new LoadCitiesFailureAction(error)))
                )
            )
        )
    )

    constructor(
        private actions$: Actions,
        private weatherService: WeatherService,
    ) { }
}