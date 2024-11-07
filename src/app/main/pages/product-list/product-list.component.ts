import { Component } from '@angular/core';
import { IProduct } from '../../../api/models/i-products';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '../../components/product/product.component';
import { Input } from '@angular/core';
import { BranchComponent } from '../../components/branch/branch.component';
import { IBranch } from '../../../api/models/i-branch';
import { CoreModule } from '../../../core/core.module';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    ProductComponent,
    BranchComponent,
    CoreModule
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})

export class ProductListComponent {
  @Input() products: IProduct[] = [];
  @Input() showProducts: boolean = false; 

  constructor(private _route: ActivatedRoute) {}

  ngOnInit(): void {
    this._route.data.subscribe((data) => {
      console.log('Datos del resolver en ProductListComponent:', data);
      if (data['productos'] && Array.isArray(data['productos'])) {
        this.products = data['productos'];
        this.showProducts = this.products.length > 0;
      }
    });
  }
}
