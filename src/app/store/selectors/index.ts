import {Action, createFeatureSelector, createSelector, MemoizedSelector} from '@ngrx/store';
import * as store from '../';
import {CitiesState} from '../reducers/cities.recuder';
import {Cities} from '../models/cities.models';
import {types} from 'util';
import {Actions} from '@ngrx/effects';

export const cityState: MemoizedSelector<store.State, CitiesState> = createFeatureSelector<CitiesState>('cities');

export const getCitySelector: MemoizedSelector<store.State, Cities> = createSelector(
  cityState,
  (state: CitiesState) => state.city
);

export const getErrorSelector: MemoizedSelector<store.State, Error> = createSelector(
  cityState, (state: CitiesState) => state.error
);
