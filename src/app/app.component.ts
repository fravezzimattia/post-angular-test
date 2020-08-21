import { Component } from '@angular/core';
import { MathService } from './services/math.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	public titolo = 'La mia calcolatrice';
	public num1: number;
	public num2: number;
	public result: number;
	public operator: number;

	constructor(
		public mathService: MathService
	) { }

	public calculate() {
		switch (+this.operator) {
			case 1:
				this.result = this.mathService.sum(+this.num1, +this.num2);
				break;
			case 2:
				this.result = this.mathService.difference(+this.num1, +this.num2);
				break;
			case 3:
				this.result = this.mathService.product(+this.num1, +this.num2);
				break;
			case 4:
				this.result = this.mathService.quotient(+this.num1, +this.num2);
				break;
			case 5:
				this.result = this.mathService.pow(+this.num1, +this.num2);
				break;
		}
	}
}
