import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { IProduct } from '../../api/models/i-products';
import { CommonModule } from '@angular/common';
import { ProductDropdownComponent } from '../../components/product-dropdown/product-dropdown.component';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from '../product-list/product-list.component';
import { IndecResourceService } from '../../api/resources/indec-resource.service';

@Component({
  selector: 'app-main',
  standalone: true,
  providers: [IndecResourceService],
  imports: [
    RouterModule,
    CommonModule,
    SidebarComponent,
    ProductDropdownComponent,
    ProductListComponent 
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

  activeSideBar: boolean = false;
  activeDropDown: boolean = false;
  products: IProduct[] = [];
  selectedOptions: any = {};
  hasSelection: boolean = false; 

  constructor(private _sanitizer: DomSanitizer, private indecResourceService: IndecResourceService) {
  }

  toggleSideBar(): void {
    this.activeSideBar = !this.activeSideBar;
  }

  toggleDropDown() {
    this.activeDropDown = !this.activeDropDown;
  }

  // Maneja los cambios de selección desde el sidebar
  onSelectionChange(selectedOptions: any): void {
    this.selectedOptions = selectedOptions;
    this.hasSelection = !!(this.selectedOptions.headingId || this.selectedOptions.categoryId || this.selectedOptions.productTypeId);
    console.log('Selección actualizada:', this.selectedOptions);
    this.onSelectionChanged(this.selectedOptions);
  }

  onSelectionChanged(filters: { headingId?: number, categoryId?: number, productTypeId?: number }) {
    this.indecResourceService.getProducts(filters).subscribe({
      next: (data) => this.products = data,
      error: (err) => console.error('Error al obtener productos:', err)
    });
  }
  
}
