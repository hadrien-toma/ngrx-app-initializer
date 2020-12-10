import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { IndexComponent } from './index.component';


describe('IndexComponent', () => {
	beforeEach(async () => {
		await TestBed.configureTestingModule({ imports: [RouterTestingModule], declarations: [IndexComponent] }).compileComponents();
	});
	it('should create the app', () => {
		const fixture = TestBed.createComponent(IndexComponent);
		const app = fixture.componentInstance;
		expect(app).toBeTruthy();
	});
	it('should render title', () => {
		const fixture = TestBed.createComponent(IndexComponent);
		fixture.detectChanges();
		const compiled = fixture.nativeElement;
		expect(compiled.querySelector('h1').textContent).toContain('Welcome to frontend!');
	});
});
