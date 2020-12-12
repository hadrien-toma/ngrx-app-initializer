import { createReducer, on } from '@ngrx/store';

export interface Other {
	status: 'initial' | 'entered';
}

export const other = createReducer(
	{
		status: 'initial' as Other['status']
	}
);
