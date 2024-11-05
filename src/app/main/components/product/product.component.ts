import { Component, Input } from '@angular/core';
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

  constructor(private cartService: CartService) {}

  addToCart() {
    this.cartService.addToCart(this.product);
  }

  getImageUrl(productImage: string): string {
    console.log(productImage);
    return productImage ? `assets/images/${productImage}` : 'assets/placeholder.png';
  }

}

