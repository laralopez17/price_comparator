import { Component, Input } from '@angular/core';
import { IBranch } from '../../../api/models/i-branch';
import { CommonModule } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';

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
  horariosList: string[] = [];

  constructor(public sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.horariosList = this.branch.branchSchedule
      .split('.')
      .map((dia) => dia.trim())
      .filter((dia) => dia);  // Elimina cualquier string vacío
  }
}