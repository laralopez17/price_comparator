import { Component, EventEmitter, Output } from '@angular/core';
import { IProduct } from '../../../api/models/i-products';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '../../components/product/product.component';
import { Input } from '@angular/core';
import { CoreModule } from '../../../core/core.module';
import { ProductEventService } from '../../services/product-event.service';
import { FilterProductsPipe } from "../../../shared/pipes/filter-products.pipe";

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    ProductComponent,
    CoreModule,
    FilterProductsPipe
],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})

export class ProductListComponent {
  @Input() products: IProduct[] = [];
  @Output() productAdded = new EventEmitter<string>();
  searchTerm: string = '';
  filteredProducts: IProduct[] = [];

  constructor(private _route: ActivatedRoute, private productEventService: ProductEventService) {}

  ngOnInit(): void {
    this._route.data.subscribe((data) => {
      if (data['productos'] && Array.isArray(data['productos'])) {
        this.products = data['productos'];
        this.applyFilter();
      }
    });
    this._route.queryParams.subscribe((params) => {
      this.searchTerm = params['search'] || '';
      this.applyFilter();
    });
  }

  onProductAdded(product: string): void {
    this.productEventService.emitProductAdded(product);
  }

  applyFilter(): void {
    console.log('Filtrando productos con término:', this.searchTerm);
    this.filteredProducts = this.products.filter(product =>
      product.productName.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
