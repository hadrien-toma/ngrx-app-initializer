import { InjectionToken } from '@angular/core';
import { Action, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { appInitializer, AppInitializer } from './app-initializer/index.reducer';
import { other, Other } from './other/index.reducer';

export interface FeatureState {
	appInitializer: AppInitializer;
	other: Other;
}

export interface State {
	frontend: FeatureState;
}

export const reducers = new InjectionToken<ActionReducerMap<FeatureState, Action>>('frontend', {
	factory: () => ({ appInitializer, other })
});
