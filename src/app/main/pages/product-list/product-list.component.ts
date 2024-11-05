import { Component } from '@angular/core';
import { IProduct } from '../../../api/models/i-products';
import { RouterModule } from '@angular/router';
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
  @Input() branches: IBranch[] = []; 
  @Input() hasSelection: boolean = false; 
  @Input() showBranches: boolean = false;
  @Input() hasBranches: boolean = false;
}
