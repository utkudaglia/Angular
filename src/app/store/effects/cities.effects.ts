import { Injectable, Input, Pipe } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators'
import { CitiesAction, CitiesActionTypes, LoadCitiesAction, LoadCitiesFailureAction, LoadCitiesSuccessAction } from '../actions/cities.actions';
import { of } from 'rxjs'
import { WeatherService } from 'src/app/weather.service';
import { InjectableCompiler } from '@angular/compiler/src/injectable_compiler';
import { AppComponent } from '../../app.component';


@Injectable()
export class CitiesEffects {
    @Effect()
    loadCities$ = createEffect(
        () => this.actions$.pipe(
            ofType('[CITIES] Load Cities'),
            mergeMap((cityName: string) => this.weatherService.getWeatherResult(cityName)
                .pipe(
                    map(cities => ({ type: '[CITIES] Load Cities Success', payload: cities })),
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