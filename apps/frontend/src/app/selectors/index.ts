import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FeatureState, State } from '../reducers';

export const $appInitializer = createFeatureSelector<FeatureState>('appInitializer');
export const $appInitializerStatus = createSelector($appInitializer, (appInitializer) => appInitializer);
// export const $appInitializerStatus = createSelector($appInitializer, (appInitializer) => appInitializer.status);
 