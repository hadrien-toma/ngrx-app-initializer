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

export function failureLogger(reducer: ActionReducer<any>): ActionReducer<any> {
	return function <T>(state, action: { type: string; [key: string]: any }) {
		const isFailureAction = action.type.endsWith('failure') || action.type.endsWith('Failure');
		if (isFailureAction) {
			console.error({ ...action });
		}
		return reducer(state, action);
	};
}

export const metaReducers: MetaReducer<{}>[] = [failureLogger];
