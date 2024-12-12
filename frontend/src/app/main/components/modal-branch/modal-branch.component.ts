import { Component, OnInit } from '@angular/core';
import { BranchComponent } from '../branch/branch.component';
import { IBranch } from '../../../api/models/i-branch';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IndecResourceService } from '../../../api/resources/indec-resource.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal-branch',
  standalone: true,
  imports: [ 
    BranchComponent,
    CommonModule
  ],
  templateUrl: './modal-branch.component.html',
  styleUrl: './modal-branch.component.scss'
})
export class ModalBranchComponent {
  private _superId!: number;
  branches: IBranch[] = []; 

  constructor(
    public activeModal: NgbActiveModal,
    public branchesServices: IndecResourceService
  ) {}

  set superId(value: number) {
    this._superId = value;
    if (value) {
      this.loadBranches(); // Llama al método para cargar las sucursales.
    }
  }
  
  get superId(): number {
    return this._superId;
  }
  
  loadBranches(): void {
    this.branchesServices.getBranchesBySuper(this.superId).subscribe({
      next: (data) => {
        this.branches = data;
        console.log(this.branches);
      },
      error: (err) => console.error($localize`Error al cargar las sucursales:`, err)
    });
  }
}
