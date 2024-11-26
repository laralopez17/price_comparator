import { Component, OnInit  } from '@angular/core';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { CommonModule } from '@angular/common';
import { ProductDropdownComponent } from '../../components/product-dropdown/product-dropdown.component';
import { Router, RouterModule } from '@angular/router';
import { IndecResourceService } from '../../../api/resources/indec-resource.service';
import { SharedModule } from '../../../shared/shared.module';
import { ModalComponent } from '../../components/modal/modal.component';
import { NgbAlertModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoaderService } from '../../../core/services/loader.service';
import { ProductEventService } from '../../services/product-event.service';
import { BarraBusquedaComponent } from "../../../shared/components/barra-busqueda/barra-busqueda.component";

@Component({
  selector: 'app-main',
  standalone: true,
  providers: [IndecResourceService],
  imports: [
    RouterModule,
    CommonModule,
    SidebarComponent,
    ProductDropdownComponent,
    SharedModule,
    NgbAlertModule,
    BarraBusquedaComponent
],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent implements OnInit {
  activeSideBar: boolean = false;
  activeDropDown: boolean = false;
  showAlert: boolean = false;
  alertMessage: string = '';

  constructor(private modalService: NgbModal,
    private router: Router,
    private loaderService: LoaderService,
    private productEventService: ProductEventService) {
    }

  ngOnInit() {
      this.productEventService.productAdded$.subscribe((product: string) => {
        this.triggerAlert(product);
      });
  }

  toggleSideBar(): void {
    this.activeSideBar = !this.activeSideBar;
  }
  
  toggleDropDown(): void {
    this.activeDropDown = !this.activeDropDown;
  }

  toggleBranches(): void {
    this.loaderService.start();
    ModalComponent.open(this.modalService).subscribe(localityId => {
      const lang = this.router.url.split('/')[1] || 'es-AR';
      this.router.navigate([lang, 'sucursales', localityId]);
      this.loaderService.complete();
    });
  }

  triggerAlert(product: string): void {
    this.alertMessage = $localize`¡${product} fue agregado al carrito!`;
    this.showAlert = true;

    setTimeout(() => {
      this.showAlert = false;
    }, 3000);
  }

  changeLanguage(lang: string): void {
    localStorage.setItem('locale_id', lang);
    document.documentElement.lang = lang;
    const baseHref = lang === 'en' ? '/en/' : '/'; 
    document.querySelector('base')?.setAttribute('href', baseHref);
    this.router.navigate([`${lang}`]).then(() => {
      window.location.reload();
    });
  }
}