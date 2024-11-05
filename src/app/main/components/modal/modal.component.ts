import { CommonModule } from '@angular/common';
import { Component, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { IndecResourceService } from '../../../api/resources/indec-resource.service';
import { IProvince } from '../../../api/models/i-province';
import { ILocality } from '../../../api/models/i-locality';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [IndecResourceService],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent implements OnInit {
  provinciaCtrl = new FormControl('');
  localidadCtrl = new FormControl('');
  
  
  provincias: IProvince[] = [];
  localidades: ILocality[] = [];
 
  constructor(private _activeModal: NgbActiveModal, private locationService: IndecResourceService) {}

  ngOnInit() {
    this.locationService.getProvincias().subscribe({
      next: (data) => {
        this.provincias = data;
      },
      error: (err) => console.error('Error al cargar las provincias:', err)
    });
  }

  onProvinciaChange() {
    const provinceCode = this.provinciaCtrl.value;
    this.localidadCtrl.setValue('');
    this.loadLocalidades(provinceCode || '');
  }

  loadLocalidades(provinceCode: string) {
    this.locationService.getLocalidades(provinceCode).subscribe({
      next: (data) => {
        this.localidades = data;
      },
      error: (err) => console.error('Error al cargar las localidades:', err)
    });
  }

  ok(): void {
    if (!this.provinciaCtrl.value || !this.localidadCtrl.value) {
        console.warn('Por favor selecciona una provincia y localidad.');
        return;
    }

    const selectedData = {
        provincia: this.provinciaCtrl.value,
        localidad: this.localidadCtrl.value
    };
    this._activeModal.close(selectedData);
}

  close(): void {
    this._activeModal.close();
  }
}