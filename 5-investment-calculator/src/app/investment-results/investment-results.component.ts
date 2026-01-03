import { CurrencyPipe, NgFor, NgIf } from '@angular/common';
import { Component, computed, inject, input, Input } from '@angular/core';
import { AnnualData } from '../../annual-data.model';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investment-results',
  // standalone: true,
  // imports: [NgFor, NgIf, CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {
  // @Input() results?: AnnualData[] = [];
  // results = input<AnnualData[]>();

  private investmentService = inject(InvestmentService);

  // results = computed(() => this.investmentService.resultsData());

  results = this.investmentService.resultsData.asReadonly();

  // get results() {
  //   return this.investmentService.resultsData;
  // }
}
