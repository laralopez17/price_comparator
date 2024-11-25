import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { BranchComponent } from '../../components/branch/branch.component';
import { IBranch } from '../../../api/models/i-branch';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../../../core/core.module';

@Component({
  selector: 'app-branch-list',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    BranchComponent,
    CoreModule
  ],
  templateUrl: './branch-list.component.html',
  styleUrl: './branch-list.component.scss'
})
export class BranchListComponent {
  @Input() branches: IBranch[] = []; 

  constructor(private _route: ActivatedRoute) {}

  ngOnInit(): void {
    this._route.data.subscribe((data) => {
      if (data['sucursales'] && Array.isArray(data['sucursales'])) {
        this.branches = data['sucursales'];
      }
    });
  }
}