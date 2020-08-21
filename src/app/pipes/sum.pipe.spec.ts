import { SumPipe } from './sum.pipe';
import { MathService } from '../services/math.service';
import { TestBed } from '@angular/core/testing';

describe('SumPipe', () => {
	it('transform should return faked correct value from a fake object', () => {
		const fake: any = { pow: () => 8 };
		const pipe = new SumPipe(fake as MathService);

		expect(pipe.transform(2, 3)).toBe(8);
	});

	it('transform should return faked correct value from a mock math service', () => {
		const pipe = new SumPipe(new MockMathService());

		expect(pipe.transform(5, 2)).toBe(25);
	});

	it('transform should return stubbed value from a spy', () => {
		const mathServiceSpy = jasmine
			.createSpyObj('MathService', ['pow']);

		const stubValue = 9;
		mathServiceSpy.pow.and.returnValue(stubValue);

		const pipe = new SumPipe(mathServiceSpy);

		expect(pipe.transform(3, 2)).toBe(stubValue);
	});
});

export class MockMathService extends MathService {
	pow() {
		return 25;
	}
}
