import { createReducer, on } from '@ngrx/store';
import { produce } from 'immer';
import { µAppInitializerEntered } from '../../actions';

export interface AppInitializer {
	status: 'initial' | 'entered';
}

export const appInitializer = createReducer(
	{
		status: 'initial' as AppInitializer['status']
	},
	on(µAppInitializerEntered, (state): AppInitializer => produce(state, (draft) => {
		draft.status = 'entered';
	}))
);
