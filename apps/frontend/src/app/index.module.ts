import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Store, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { µAppInitializerEntered } from './actions';
import { IndexComponent } from './components/index.component';
import { metaReducers, reducers } from './reducers';

@NgModule({
	bootstrap: [IndexComponent],
	declarations: [IndexComponent],
	imports: [
		BrowserModule.withServerTransition({ appId: 'serverApp' }),
		StoreModule.forRoot(reducers, {
			runtimeChecks: {
				strictActionImmutability: true,
				strictActionSerializability: true,
				strictStateImmutability: true,
				strictStateSerializability: true
			},
			metaReducers
		}),
		StoreDevtoolsModule.instrument({
			maxAge: 5000,
			name: 'frontend'
		})
	],
	providers: [
		{
			provide: APP_INITIALIZER,
			useFactory: (store: Store<{}>) => () => store.dispatch(µAppInitializerEntered({ config: { } })),
			multi: true,
			deps: [Store]
		}
	]
})
export class AppModule {
}
