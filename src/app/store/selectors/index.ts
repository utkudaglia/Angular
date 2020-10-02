import {createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';
import * as store from '../';
import {CitiesState} from '../reducers/cities.recuder';
import {Cities} from '../models/cities.models';

export const cityState: MemoizedSelector<store.State, CitiesState> = createFeatureSelector<CitiesState>('cities');

export const getCitySelector: MemoizedSelector<store.State, Cities> = createSelector(
  cityState,
  (state: CitiesState) => state.city
);
