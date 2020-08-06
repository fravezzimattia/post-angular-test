import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class MathService {
	public sum(x: number, y: number) {
		return x + y;
	}

	public difference(x: number, y: number) {
		return x - y;
	}

	public product(x: number, y: number) {
		return x * y;
	}

	public quotient(x: number, y: number) {
		return x / y;
	}

	public pow(x: number, y: number) {
		return Math.pow(x, isNaN(y) ? 1 : y);
	}

	public getValueAsObservable(value: number): Observable<number> {
		return of(value);
	}
}
