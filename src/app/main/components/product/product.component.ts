import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../../../api/models/i-products';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})

export class ProductComponent {
  @Input() product!: IProduct;
  @Output() addedProduct = new EventEmitter<boolean>();

  constructor(public cartService: CartService) {}

  addToCart() {
    this.cartService.addToCart(this.product);
    this.addedProduct.emit(true);
  }

  getImageUrl(productImage: string): string {
    return productImage ? `assets/images/${productImage}` : 'assets/placeholder.png';
  }

}

