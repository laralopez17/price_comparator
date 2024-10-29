import { Component } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { IHeading } from '../../api/models/i-heading';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { ProductComponent } from '../product/product.component';
import { IProduct } from '../../api/models/i-products';
import { DataResource } from '../../api/resources/data-resource';
import { CommonModule } from '@angular/common';
import { ProductDropdownComponent } from '../product-dropdown/product-dropdown.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    CommonModule,
    SidebarComponent,
    ProductComponent,
    ProductDropdownComponent
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  activeSideBar: boolean = false;
  activeDropDown: boolean = false;
  src!: SafeResourceUrl;
  products: IProduct[] = [];

  constructor(private _sanitizer: DomSanitizer) {
    this.products = DataResource.products;
  }

  toggleSideBar(): void {
    this.activeSideBar = !this.activeSideBar;
  }

  toggleDropDown() {
    this.activeDropDown = !this.activeDropDown;
  }

  go(option: IHeading): void {
    this.src = this._sanitizer.bypassSecurityTrustResourceUrl(`/${option.headingName}`);
  } 

}
