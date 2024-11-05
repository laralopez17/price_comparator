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
import { IBranch } from '../../../api/models/i-branch';
import { ModalComponent } from '../../components/modal/modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoaderService } from '../../../core/services/loader.service';

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
  showBranches: boolean = false;
  products: IProduct[] = [];
  branches: IBranch[] = [];
  selectedOptions: ISelectedOptions = {}; 
  hasSelection: boolean = false;

  constructor(private _sanitizer: DomSanitizer, private indecResourceService: IndecResourceService, private _modal: NgbModal, private loaderService: LoaderService) {
  }

  toggleSideBar(): void {
    this.activeSideBar = !this.activeSideBar;
  }
  
  toggleDropDown(): void {
    this.activeDropDown = !this.activeDropDown;
  }

  toggleBranches(): void {
    this.showBranches = !this.showBranches;
    
    if (this.showBranches) {
      // Limpiamos los productos cuando se muestran sucursales
      this.products = [];
      this.openBranchSelectionModal();
    } else {
      // Si volvemos a productos, vaciamos sucursales y recargamos productos
      this.branches = [];
      this.loadProducts();
    }
  }

  onSelectionChange(selectedOptions: ISelectedOptions): void {
    this.selectedOptions = selectedOptions;
    this.hasSelection = !!(this.selectedOptions.headingId || this.selectedOptions.categoryId || this.selectedOptions.productTypeId);
    this.showBranches = false;
    this.loadProducts();
  }

  loadProducts(): void {
    this.indecResourceService.getProducts(this.selectedOptions).subscribe({
      next: (data) => {
        this.products = data;
        this.hasSelection = this.products.length > 0;
      },
      error: (err) =>  {throw new Error(err)}
    });
  }

  openBranchSelectionModal() {
    this.loaderService.start();
    this.branches = [];
    const modalRef = this._modal.open(ModalComponent);
  
    modalRef.componentInstance.selectionConfirmed.subscribe((localityId: number) => {
      this.indecResourceService.getBranches(localityId).subscribe({
        next: (data) => {
          this.branches = data;
          this.showBranches = true;
        },
        error: (err) => {throw new Error(err)}
      });
      this.loaderService.complete();
    });
  }
}
