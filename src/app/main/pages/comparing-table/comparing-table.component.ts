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
  comparedData: IFinalCompared | null = null;
  @Input() showComparedTable: boolean = false;
  @Output() showTable: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.comparedData = data['comparedProducts'];
      console.log(this.comparedData);
      this.sortComparedData()
      this.showComparedTable = true;
    });
  }

  sortComparedData() {
    if (this.comparedData) {
      this.comparedData.totals.sort((a, b) => a.superId - b.superId);
  
      this.comparedData.products.forEach(product => {
        product.prices.sort((a, b) => a.superId - b.superId);
      });
    }
  }

  getImageUrl(productImage: string): string {
    return productImage ? `assets/images/${productImage}` : 'assets/placeholder-png.webp';
  }
}