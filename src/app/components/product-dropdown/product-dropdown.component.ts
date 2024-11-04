import { Component, ElementRef, EventEmitter, Input, HostListener, OnInit, Output } from '@angular/core';
import { IProduct } from '../../api/models/i-products';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { ModalComponent } from '../modal/modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoaderService } from '../../core/services/loader.service';

@Component({
  selector: 'app-product-dropdown',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './product-dropdown.component.html',
  styleUrls: ['./product-dropdown.component.scss']
})
export class ProductDropdownComponent implements OnInit{
  @Input() active: boolean = false;
  @Output() activeChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  products: IProduct[] = []

  constructor(private cartService: CartService, private elRef: ElementRef, private _modal: NgbModal, private loaderService: LoaderService) {}

  // Método para cerrar el dropdown al hacer clic fuera
  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
    if (this.active && !this.elRef.nativeElement.contains(event.target)) {
      this.active = false;
      this.activeChange.emit(this.active);
    }
  }

  toggleDropDown() {
    this.active = !this.active;
  }

  ngOnInit() {
    this.cartService.cart$.subscribe(items => {
      this.products = items.sort((a, b) => a.productName.localeCompare(b.productName));
    });
  }

  confirmSelection() {
    this.loaderService.start();
    const modalRef = this._modal.open(ModalComponent);

  modalRef.result.finally(() => {
    this.loaderService.complete(); // Desactivá el loader cuando el modal se cierra
  });
  }

  removeProduct(product: IProduct) {
    this.cartService.removeFromCart(product.productId);
  }
}
