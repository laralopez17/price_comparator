import { Component, Input } from '@angular/core';
import { IBranch } from '../../../api/models/i-branch';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-branch',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './branch.component.html',
  styleUrl: './branch.component.scss'
})
export class BranchComponent {
  @Input() branch!: IBranch;

  constructor() {}
}