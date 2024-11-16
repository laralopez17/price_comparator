import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { CommonModule } from '@angular/common';
import { ProductDropdownComponent } from '../../components/product-dropdown/product-dropdown.component';
import { ActivatedRoute, NavigationEnd, Router, RouterModule } from '@angular/router';
import { ProductListComponent } from '../product-list/product-list.component';
import { IndecResourceService } from '../../../api/resources/indec-resource.service';
import { SharedModule } from '../../../shared/shared.module';
import { ModalComponent } from '../../components/modal/modal.component';
import { NgbAlertModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoaderService } from '../../../core/services/loader.service';
import { BranchListComponent } from "../branch-list/branch-list.component";
import { ComparingTableComponent } from "../comparing-table/comparing-table.component";
import { WelcomeComponent } from "../welcome/welcome.component";
import { filter } from 'rxjs';
import { CartService } from '../../services/cart.service';

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
    BranchListComponent,
    ComparingTableComponent,
    WelcomeComponent,
    NgbAlertModule
],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent implements OnInit {
  activeSideBar: boolean = false;
  activeDropDown: boolean = false;
  showWelcome: boolean = true;
  showBranches: boolean = false;
  showComparedTable: boolean = false;
  hasSelection: boolean = false;

  constructor(private modalService: NgbModal,
    private router: Router,
    private loaderService: LoaderService) {
    }

  ngOnInit() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        // Verificar si la ruta actual es exactamente '/main'
        this.showWelcome = event.urlAfterRedirects === '/main';
      });
  }

  toggleSideBar(): void {
    this.activeSideBar = !this.activeSideBar;
  }
  
  toggleDropDown(): void {
    this.activeDropDown = !this.activeDropDown;
  }

  toggleBranches(): void {
    this.showBranches = !this.showBranches;
    this.showWelcome = false;
    if (this.showBranches) {
      this.loaderService.start();
      ModalComponent.open(this.modalService).subscribe(localityId => {
        this.router.navigate(['main', 'localidad', localityId]);
        this.loaderService.complete();
      });
    }
  }
}