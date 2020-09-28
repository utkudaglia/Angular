import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  LoadCitiesAction, LoadCitiesSuccessAction, LoadCitiesFailureAction,
  // SendCitiesAction, SendCitiesSuccessAction, SendCitiesFailureAction
} from './store/actions/cities.actions';
import { AppState } from './store/models/app-state.model';
import { Cities } from './store/models/cities.models'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  cities$: Observable<Cities>;
  loading$: Observable<Boolean>;
  error$: Observable<Error>;
  newCity: Cities = {
    coord: {
        lon: -0.13,
        lat: 51.51,
    },
    weather: [{
        id: 801,
        main: "Clouds",
        description: "few clouds",
        icon: "04d",
    }],
    base: "stations",
    main: {
        temp: 15.73,
        feels_like: 10.74,
        temp_min: 13.89,
        temp_max: 17.22,
        pressure: 1013,
        humidity: 71,
    },
    visibility: 10000,
    wind: {
        speed: 4.1,
        deg: 290,
    },
    cloud: {
        all: 20,
    },
    dt: 1601283313,
    sys: {
        type: 1,
        id: 1414,
        country: "GB",
        sunrise: 1601272604,
        sunset: 1601315117,
    },
    timezone: 3600,
    id: 2643743,
    name: "London",
    cod: 200,
};
  cityName = "london"
  
  constructor(private store: Store<AppState>){}
  
  

  ngOnInit(): void{
    this.cities$ = this.store.select (store => store.city.city);
    this.loading$ = this.store.select (store => store.city.loading);
    this.error$ = this.store.select (store => store.city.error);

    this.store.dispatch(new LoadCitiesAction());
  }
  getWeather(input) {
    this.store.dispatch(new LoadCitiesSuccessAction());
  }
  
}
