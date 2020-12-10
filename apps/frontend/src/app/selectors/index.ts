import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FeatureState, State } from '../reducers';

export const $feature = createFeatureSelector<State, FeatureState>('frontend');
export const $appInitializer = createSelector($feature, (feature) => feature?.appInitializer);
export const $appInitializerEntered = createSelector($appInitializer, (appInitializer) => appInitializer?.status);
