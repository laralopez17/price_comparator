import { Component } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { IHeading } from '../../api/models/i-heading';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { ProductComponent } from '../product/product.component';
import { IProduct } from '../../api/models/i-products';
import { DataResource } from '../../api/resources/data-resource';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    CommonModule,
    SidebarComponent,
    ProductComponent
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

  active: boolean = false;
  products: IProduct[] = [];
  selectedOptions: any = {};
  hasSelection: boolean = false; // Nueva propiedad para controlar si se ha hecho una selección


  constructor(private _sanitizer: DomSanitizer) {
    this.products = DataResource.products;
  }

  toggle(): void {
    this.active = !this.active;
  }

  // Maneja los cambios de selección desde el sidebar
  onSelectionChange(selectedOptions: any): void {
    this.selectedOptions = selectedOptions;
    this.hasSelection = !!(this.selectedOptions.headingId || this.selectedOptions.categoryId || this.selectedOptions.productTypeId);
    console.log('Selección actualizada:', this.selectedOptions);
  }
}
