import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IProduct } from '../../../api/models/i-products';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { ModalComponent } from '../../components/modal/modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoaderService } from '../../../core/services/loader.service';
import { SharedModule } from '../../../shared/shared.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-dropdown',
  standalone: true,
  imports: [
    CommonModule,
    SharedModule
  ],
  templateUrl: './product-dropdown.component.html',
  styleUrls: ['./product-dropdown.component.scss']
})
export class ProductDropdownComponent implements OnInit{
  @Input() active: boolean = false;
  @Output() activeChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  products: IProduct[] = []

  constructor(private cartService: CartService, 
              private modalService: NgbModal, 
              private router: Router, 
              private loaderService: LoaderService) {}

  onClickOutside() {
    if (this.active) {
      this.active = false;
      this.activeChange.emit(this.active);
    }
  }

  ngOnInit() {
    this.cartService.cart$.subscribe(items => {
      this.products = items.sort((a, b) => a.productName.localeCompare(b.productName));
    });
  }

  confirmSelection() {
    this.loaderService.start();  
    ModalComponent.open(this.modalService).subscribe(localityId => {
      const lang = this.router.url.split('/')[1] || 'es-AR';
      const barcodes = this.products.map(p => p.productId).join(',');
      
      this.router.navigate([lang, 'comparador', localityId, barcodes]).then(() => {

        this.loaderService.complete();
      });
    });
  }

  removeProduct(product: IProduct) {
    this.cartService.removeFromCart(product.productId);
  }
}
