import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CalculatorService } from '../../services/calculator';

@Component({
  selector: 'app-root',
  templateUrl: './calculator.html',
  imports: [CommonModule, FormsModule],
  styleUrls: ['./calculator.scss'],
})
export class CalculatorComponent {
  expression = '';
  buttons: string[] = [
    '^',
    '/',
    '7',
    '8',
    '9',
    '*',
    '4',
    '5',
    '6',
    '-',
    '1',
    '2',
    '3',
    '+',
    '.',
    '0',
  ];

  private calculatorService = inject(CalculatorService);

  press(value: string) {
    this.expression += value;
  }

  onCalculate() {
    const result = this.calculatorService.calculate(this.expression);
    this.expression = result.toString();
  }

  onClear() {
    this.expression = '';
  }
}
