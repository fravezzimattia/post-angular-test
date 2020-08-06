import { TestBed } from '@angular/core/testing';

import { MathService } from './math.service';

describe('MathService', () => {
	let service: MathService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.get(MathService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	it('sum should return correct value', () => {
		expect(service.sum(2, 3)).toBe(5);
	});

	it('difference should return correct value', () => {
		expect(service.difference(5, 3)).toBe(2);
	});

	it('quotient should return correct value', () => {
		expect(service.quotient(10, 2)).toBe(5);
	});

	it('product should return correct value', () => {
		expect(service.product(5, 3)).toBe(15);
	});

	it('pow should return correct value', () => {
		expect(service.pow(5, 2)).toBe(25);
	});

	it('getValueAsObservable should return correct value',
		(done: DoneFn) => {
			service.getValueAsObservable(5)
				.subscribe(value => {
					expect(value).toBe(5);
					done();
				});
		});
});
