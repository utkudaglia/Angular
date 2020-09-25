import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  LoadCitiesAction, LoadCitiesSuccessAction, LoadCitiesFailureAction,
  SendCitiesAction, SendCitiesSuccessAction, SendCitiesFailureAction
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
  newCity: Cities = { name: 'London' };
  
  constructor(private store: Store<AppState>){}

  ngOnInit(): void{
    this.cities$ = this.store.select (store => store.city.city);
    this.loading$ = this.store.select (store => store.city.loading);
    this.error$ = this.store.select (store => store.city.error);

    this.store.dispatch(new LoadCitiesAction());
  }

  event(input) {
    console.log(input);
  }
}
