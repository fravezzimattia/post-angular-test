import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { BrowserModule, By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TestBed, async, fakeAsync, tick, ComponentFixture } from '@angular/core/testing';

import { SumPipe } from './pipes/sum.pipe';
import { AppComponent } from './app.component';
import { MathService } from './services/math.service';
import { MockMathService } from './pipes/sum.pipe.spec';
import { AppRoutingModule } from './app-routing.module';

describe('AppComponent', () => {
	let nativeElement: any;
	let component: AppComponent;
	let fixture: ComponentFixture<AppComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [
				BrowserModule,
				AppRoutingModule,
				FormsModule,
				MatInputModule,
				MatSelectModule,
				MatButtonModule,
				NoopAnimationsModule
			],
			declarations: [
				AppComponent,
				SumPipe
			]
		}).compileComponents();

		TestBed.overrideComponent(
			AppComponent,
			{ set: { providers: [{ provide: MathService, useClass: MockMathService }] } }
		);
		fixture = TestBed.createComponent(AppComponent);
		component = fixture.debugElement.componentInstance;
		nativeElement = fixture.debugElement.nativeElement;
		fixture.autoDetectChanges();
	}));

	it('should create the app', () => {
		expect(component).toBeTruthy();
	});

	it('should render title in a h1 tag', () => {
		expect(nativeElement.querySelector('h1').textContent).toContain('La mia calcolatrice');
	});

	it('should 5 in component variable num1 ', () => {
		const num1Input = nativeElement.querySelector('#num1');
		num1Input.value = 5;
		num1Input.dispatchEvent(new Event('input'));

		expect(+component.num1).toEqual(5);
	});

	it('should 4 in component variable num2', () => {
		const num2Input = nativeElement.querySelector('#num2');
		num2Input.value = 4;
		num2Input.dispatchEvent(new Event('input'));

		expect(+component.num2).toEqual(4);
	});

	it('should 1 in component variable operator', () => {
		const operatorSelect = nativeElement.querySelector('#operator');
		operatorSelect.value = 1;
		operatorSelect.dispatchEvent(new Event('change'));

		expect(+component.operator).toEqual(1);
	});

	it('should button pressed', fakeAsync(() => {
		spyOn(fixture.debugElement.componentInstance, 'calculate');

		const calculateButton = nativeElement.querySelector('#calculate')
		calculateButton.click();
		tick();

		expect(fixture.debugElement.componentInstance.calculate).toHaveBeenCalled();
	}));

	it('should render result', fakeAsync(() => {
		component.result = 10;
		fixture.detectChanges();
		tick();

		const resultInput = nativeElement.querySelector('#result');
		expect(+resultInput.value).toEqual(10);
	}));


});
