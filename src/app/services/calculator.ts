import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CalculatorService {
  calculate(expression: string): number | string {
    try {
      const expr = expression.replace(/\^/g, '**');

      if (!/^[0-9+\-*/^().\s]+$/.test(expression)) {
        return 'Invalid characters';
      }

      const calculateExpression = new Function('return ' + expr);
      const result = calculateExpression();

      if (typeof result === 'number' && !isNaN(result) && isFinite(result)) {
        return result;
      } else {
        return 'Error in calculation';
      }
    } catch {
      return 'Invalid expression';
    }
  }
}
