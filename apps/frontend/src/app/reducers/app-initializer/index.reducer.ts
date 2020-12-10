import { createReducer, on } from '@ngrx/store';
import { produce } from 'immer';
import { µAppInitializerEntered } from '../../actions';

export interface AppInitializer {
	status: 'initial' | 'entered';
}

export const appInitializerStates: {[stateKey: string]: AppInitializer } = {};

appInitializerStates.default = {
	status: 'initial' as 'initial'
}
appInitializerStates.initial = appInitializerStates.default

export const appInitializer = createReducer(
	appInitializerStates.initial,
	on(µAppInitializerEntered, (state): AppInitializer => produce(state, (draft) => {
		draft.status = 'entered';
	}))
);
