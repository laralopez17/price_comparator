import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IOption } from '../../api/models/i-option';
import { DataResource } from '../../api/resources/data-resource';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  @Input() active: boolean = false;
  @Output() activeChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() url: EventEmitter<IOption> = new EventEmitter<IOption>();

  get options(): IOption[] {
    return DataResource.options;
  }

  goto(option: IOption): void {
    this.url.emit(option);
    this.activeChange.emit(false);
  }

}
