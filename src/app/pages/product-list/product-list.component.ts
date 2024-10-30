import { Component } from '@angular/core';
import { IProduct } from '../../api/models/i-products';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '../../components/product/product.component';
import { Input } from '@angular/core';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    ProductComponent
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})

export class ProductListComponent {
  @Input() products: IProduct[] = [];
  @Input() hasSelection: boolean = false; 
}
