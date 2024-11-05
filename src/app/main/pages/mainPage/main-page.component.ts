import { Component, } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { IProduct } from '../../../api/models/i-products';
import { CommonModule } from '@angular/common';
import { ProductDropdownComponent } from '../../components/product-dropdown/product-dropdown.component';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from '../product-list/product-list.component';
import { IndecResourceService } from '../../../api/resources/indec-resource.service';
import { ISelectedOptions } from '../../models/i-selected-options';
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-main',
  standalone: true,
  providers: [IndecResourceService],
  imports: [
    RouterModule,
    CommonModule,
    SidebarComponent,
    ProductDropdownComponent,
    ProductListComponent,
    SharedModule
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

  activeSideBar: boolean = false;
  activeDropDown: boolean = false;
  products: IProduct[] = [];
  selectedOptions: ISelectedOptions = {}; 
  hasSelection: boolean = false;

  constructor(private _sanitizer: DomSanitizer, private indecResourceService: IndecResourceService) {
  }

  toggleSideBar(): void {
    this.activeSideBar = !this.activeSideBar;
  }
  
  toggleDropDown(): void {
    this.activeDropDown = !this.activeDropDown;
  }

  onSelectionChange(selectedOptions: ISelectedOptions): void {
    this.selectedOptions = selectedOptions;
    this.hasSelection = !!(this.selectedOptions.headingId || this.selectedOptions.categoryId || this.selectedOptions.productTypeId);

    this.indecResourceService.getProducts(this.selectedOptions).subscribe({
      next: (data) => {
        this.products = data;
        this.hasSelection = this.products.length > 0;
      },
      error: (err) =>  {throw new Error(err)}
    });
  }
}
