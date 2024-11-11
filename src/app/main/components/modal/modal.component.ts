import { CommonModule } from '@angular/common';
import { Component, OnInit, AfterViewInit, ChangeDetectorRef, Output, EventEmitter } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IndecResourceService } from '../../../api/resources/indec-resource.service';
import { IProvince } from '../../../api/models/i-province';
import { ILocality } from '../../../api/models/i-locality';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

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
  @Output() selectionConfirmed = new EventEmitter<number>();

  
  provincias: IProvince[] = [];
  localidades: ILocality[] = [];
 
  constructor(private _activeModal: NgbActiveModal, 
              private locationService: IndecResourceService) {}

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
    const localityId = Number(this.localidadCtrl.value);
    if (localityId) {
      this.selectionConfirmed.emit(localityId);
      this._activeModal.close();
    } else {
      console.warn('Por favor selecciona una localidad.');
    }
  }

  static open(modalService: NgbModal): Observable<number> {
    const modalRef = modalService.open(ModalComponent);
    return new Observable<number>(observer => {
      modalRef.componentInstance.selectionConfirmed.subscribe((localityId: number) => {
        observer.next(localityId);
        observer.complete();
      });
      modalRef.dismissed.subscribe(() => observer.complete());
    });
  }

  close(): void {
    this._activeModal.dismiss();
  }
}