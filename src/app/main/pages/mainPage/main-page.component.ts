import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { CommonModule } from '@angular/common';
import { ProductDropdownComponent } from '../../components/product-dropdown/product-dropdown.component';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ProductListComponent } from '../product-list/product-list.component';
import { IndecResourceService } from '../../../api/resources/indec-resource.service';
import { ISelectedOptions } from '../../models/i-selected-options';
import { SharedModule } from '../../../shared/shared.module';
import { ModalComponent } from '../../components/modal/modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoaderService } from '../../../core/services/loader.service';
import { BranchComponent } from '../../components/branch/branch.component';
import { BranchListComponent } from "../branch-list/branch-list.component";

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
    SharedModule,
    BranchComponent,
    BranchListComponent
],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

  activeSideBar: boolean = false;
  activeDropDown: boolean = false;
  showBranches: boolean = false;
  hasSelection: boolean = false;

  constructor(private _route: ActivatedRoute, private router: Router,private _sanitizer: DomSanitizer, private _modal: NgbModal, private loaderService: LoaderService) {
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
      this.openBranchSelectionModal();
    } 
  }

  openBranchSelectionModal() {
    this.loaderService.start();
    const modalRef = this._modal.open(ModalComponent);
    modalRef.componentInstance.selectionConfirmed.subscribe((localityId: number) => {
      this.router.navigate(['main', 'localidad', localityId]);
      this.loaderService.complete();
    });
  }
}