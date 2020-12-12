import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FeatureState, State } from '../reducers';

export const $feature = createFeatureSelector<State, FeatureState>('appInitializer');
