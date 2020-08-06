import { Pipe, PipeTransform } from '@angular/core';
import { MathService } from '../services/math.service';

@Pipe({
	name: 'sum'
})
export class SumPipe implements PipeTransform {
	constructor(
		public mathService: MathService
	) { }

	transform(value: number, exponent: number): number {
		return this.mathService.pow(value, isNaN(exponent) ? 1 : exponent);
	}
}
