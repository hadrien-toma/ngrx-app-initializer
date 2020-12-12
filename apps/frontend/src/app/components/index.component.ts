import { ChangeDetectionStrategy, Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { $appInitializer, $appInitializerStatus } from '../selectors';
import { tap } from 'rxjs/operators'

@Component({
	selector: 'workspace-index',
	templateUrl: './index.component.html',
	styleUrls: ['./index.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class IndexComponent {
	appInitializer$ = this.store.pipe(select($appInitializer), tap(appInitializer => {
		console.log({ appInitializer })
	}))
	appInitializerStatus$ = this.store.pipe(select($appInitializerStatus), tap(appInitializerStatus => {
		console.log({ appInitializerStatus })
	}))

	constructor(private store: Store<{}>) {
	}
}