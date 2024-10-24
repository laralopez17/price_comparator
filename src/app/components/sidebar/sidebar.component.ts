import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IHeading } from '../../api/models/i-heading';
import { DataResource } from '../../api/resources/data-resource';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

  @Input() active: boolean = false;
  @Output() activeChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() url: EventEmitter<IHeading> = new EventEmitter<IHeading>();

  get options(): IHeading[] {
    return DataResource.headings;
  }

  goto(option: IHeading): void {
    this.url.emit(option);
    this.activeChange.emit(false);
  }

}
