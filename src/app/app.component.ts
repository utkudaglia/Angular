import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  LoadCitiesAction,
} from './store/actions/cities.actions';
import { Cities } from './store/models/cities.models';
import { getCitySelector } from './store/selectors';
import { map } from 'rxjs/operators';
import { State } from './store';

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

  loading$: Observable<boolean>;
  error$: Observable<Error>;

  cityName = 'london';

  constructor(private store: Store<State>) { }

  ngOnInit(): void {
    // this.loading$ = this.store.select (store => store.city.loading);
    // this.error$ = this.store.select (store => store.city.error);

    // this.store.dispatch(new LoadCitiesAction());
  }
  // tslint:disable-next-line:typedef
  getWeather(input: string) {
    this.store.dispatch(new LoadCitiesAction(input));
  }

}
