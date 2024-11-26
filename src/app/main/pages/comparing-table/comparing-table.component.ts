import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IFinalCompared } from '../../../api/models/i-final-compared';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comparing-table',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './comparing-table.component.html',
  styleUrl: './comparing-table.component.scss'
})
export class ComparingTableComponent implements OnInit {
[x: string]: any;
  comparedData: IFinalCompared | null = null;
  noPriceBranches: { branchName: string; superName: string }[] = [];
  @Output() showTable: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.comparedData = data['comparedProducts'];
      this.sortComparedData();

      if (this.comparedData?.totals) {
        this.noPriceBranches = this.comparedData.totals
          .filter((total) => total.totalPrices === null || total.totalPrices === undefined)
          .map((total) => ({
            branchName: total.branchName,
            superName: total.superName
          }));
      }
    });
    window.scrollTo(0, 0);
  }

  sortComparedData() {
    if (this.comparedData) {
      this.comparedData.totals.sort((a, b) => a.superId - b.superId);
  
      this.comparedData.products.forEach(product => {
        product.prices.sort((a, b) => a.superId - b.superId);
      });
    }
  }

  shouldShowColumn(branchName: string): boolean {
    return !this.noPriceBranches.some((branch) => branch.branchName === branchName);
  }

  getImageUrl(productImage: string): string {
    return productImage ? `assets/images/${productImage}` : 'assets/placeholder-png.webp';
  }
}