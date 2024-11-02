import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../../api/models/i-products';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-dropdown',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './product-dropdown.component.html',
  styleUrls: ['./product-dropdown.component.scss']
})
export class ProductDropdownComponent {
  @Input() active: boolean = false;
  @Output() activeChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() url: EventEmitter<IProduct> = new EventEmitter<IProduct>();
  private _products: IProduct[] = []

  get products(): IProduct[] {
    return this._products;
  }
  
  confirmSelection() {
    throw new Error('Method not implemented.');
  }

  removeProduct(_t8: IProduct) {
    throw new Error('Method not implemented.');
  }
}
