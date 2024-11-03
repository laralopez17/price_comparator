import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IProduct } from '../api/models/i-products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: IProduct[] = JSON.parse(localStorage.getItem('cart') || '[]');
  private cartSubject = new BehaviorSubject<IProduct[]>(this.cartItems);
  
  cart$ = this.cartSubject.asObservable(); // Observable para los cambios en el carrito

  addToCart(product: IProduct) {
    this.cartItems.push(product); // Agregar el producto
    this.updateCart(); // Actualizar el carrito y notificar a los observadores
  }

  removeFromCart(productId: string) {
    this.cartItems = this.cartItems.filter(item => item.productId !== productId); // Quitar producto
    this.updateCart();
  }

  private updateCart() {
    localStorage.setItem('cart', JSON.stringify(this.cartItems)); // Guardar en localStorage
    this.cartSubject.next(this.cartItems); // Emitir la actualización a los suscriptores
  }
}
