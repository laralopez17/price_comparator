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
  src!: SafeResourceUrl;
  products: IProduct[] = [];

  constructor(private _sanitizer: DomSanitizer) {
    this.products = DataResource.products;
  }

  toggle(): void {
    this.active = !this.active;
  }

  go(option: IHeading): void {
    this.src = this._sanitizer.bypassSecurityTrustResourceUrl(`/${option.headingName}`);
  } 

}
