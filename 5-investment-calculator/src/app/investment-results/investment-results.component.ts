import { CurrencyPipe, NgFor, NgIf } from '@angular/common';
import { Component, input, Input } from '@angular/core';
import { AnnualData } from '../../annual-data.model';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [NgFor, NgIf, CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {
  // @Input() results?: AnnualData[] = [];
  results = input<AnnualData[]>();
}
