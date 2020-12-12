import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Store, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { µAppInitializerEntered } from './actions';
import { IndexComponent } from './components/index.component';
import { reducers } from './reducers';

@NgModule({
	bootstrap: [IndexComponent],
	declarations: [IndexComponent],
	imports: [
		BrowserModule,
		StoreModule.forRoot(reducers, {
			runtimeChecks: {
				strictActionImmutability: true,
				strictActionSerializability: true,
				strictStateImmutability: true,
				strictStateSerializability: true
			}
		}),
		StoreDevtoolsModule.instrument({
			maxAge: 5000,
			name: 'frontend'
		})
	],
	providers: [
		{
			provide: APP_INITIALIZER,
			useFactory: (store: Store<{}>) => () => store.dispatch(µAppInitializerEntered()),
			multi: true,
			deps: [Store]
		}
	]
})
export class AppModule {
}
