import { ChangeDetectionStrategy, Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { $feature } from '../selectors';
import { tap } from 'rxjs/operators'

@Component({
	selector: 'workspace-index',
	templateUrl: './index.component.html',
	styleUrls: ['./index.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class IndexComponent {
	feature$ = this.store.pipe(select($feature), tap(feature => {
		console.log({ feature })
	}))

	constructor(private store: Store<{}>) {
	}
}