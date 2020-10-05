import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  LoadCitiesAction, LoadCitiesFailureAction, LoadCitiesSuccessAction, CitiesActionTypes, CitiesAction, Reset
} from './store/actions/cities.actions';
import { Cities } from './store/models/cities.models';
import { getCitySelector, getErrorSelector } from './store/selectors';
import { map } from 'rxjs/operators';
import { State } from './store';
import {initialState} from './store/reducers/cities.recuder';
import {Action} from '@ngrx/store/src/models';
import {Actions} from '@ngrx/effects';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  public cities$: Observable<Cities> = this.store.pipe(
    select(getCitySelector),
    map((cities: Cities) => cities),
  );

  public error$: Observable<Error> = this.store.pipe(
    select(getErrorSelector),
    map((err: Error) => err),
  );

  loading$: Observable<boolean>;

  cityName = 'london';

  constructor(private store: Store<State>) { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  getWeather(input: string) {
    this.store.dispatch(new Reset());
    this.store.dispatch(new LoadCitiesAction(input));
  }
  // tslint:disable-next-line:typedef
  checkSuccessType(actionType){
    if ( actionType === CitiesActionTypes.LOAD_CITIES_SUCCESS){
      return true;
    }
  }
}
