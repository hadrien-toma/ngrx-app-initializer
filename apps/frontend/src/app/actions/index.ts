import { createAction, props } from '@ngrx/store';

export interface AppInitializerEnteredConfig { }

export const µAppInitializerEntered = createAction(`[${'frontend'}] µAppInitializerEntered`, props<{ config: AppInitializerEnteredConfig }>());
