import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IProduct } from '../../api/models/i-products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: IProduct[] = JSON.parse(localStorage.getItem('cart') || '[]');
  private cartSubject = new BehaviorSubject<IProduct[]>(this.cartItems);
  
  cart$ = this.cartSubject.asObservable(); // Observable para los cambios en el carrito

  addToCart(product: IProduct) {
    const productExists = this.cartItems.some(item => item.productId === product.productId);

    if (productExists) {
      throw new Error($localize`El producto ya está en el carrito.`);
    }
    
    this.cartItems.push(product);
    this.updateCart();
  }

  isInCart(productId: string): boolean {
    return this.cartItems.some(item => item.productId === productId);
  }

  removeFromCart(productId: string) {
    this.cartItems = this.cartItems.filter(item => item.productId !== productId);
    this.updateCart();
  }

  private updateCart() {
    localStorage.setItem('cart', JSON.stringify(this.cartItems));
    this.cartSubject.next(this.cartItems);
  }
}
