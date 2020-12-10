import { InjectionToken } from '@angular/core';
import { Params } from '@angular/router';
import { Action, ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { appInitializer, AppInitializer } from './app-initializer/index.reducer';

export interface RouterStateSnapshot {
	params: Params;
	queryParams: Params;
	url: string;
}

export interface FeatureState {
	appInitializer: AppInitializer;
}

export interface State {
	['frontend']: FeatureState;
}

export const reducers = new InjectionToken<ActionReducerMap<FeatureState, Action>>('frontend', {
	factory: () => ({ appInitializer })
});
