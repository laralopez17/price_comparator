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
  @Output() selectionChanged: EventEmitter<any> = new EventEmitter<any>();

  get headings(): IHeading[] {
    return DataResource.headings;
  }

   // Objeto para mantener las selecciones
   selectedOptions: any = {
    headingId: null,
    categoryId: null,
    productTypeId: null
  };

  // Este método se llamará al seleccionar un heading
  onHeadingSelect(headingId: number): void {
    this.selectedOptions.headingId = headingId;
    this.selectedOptions.categoryId = null; // Limpiamos selecciones inferiores
    this.selectedOptions.productTypeId = null;
    this.emitSelection();
  }

  // Este método se llamará al seleccionar una categoría
  onCategorySelect(headingId: number, categoryId: number): void {
    this.selectedOptions.headingId = headingId;
    this.selectedOptions.categoryId = categoryId;
    this.selectedOptions.productTypeId = null; // Limpiamos selección de tipo de producto
    this.emitSelection();
  }

  // Este método se llamará al seleccionar un tipo de producto
  onProductTypeSelect(headingId: number, categoryId: number, productTypeId: number): void {
    this.selectedOptions.headingId = headingId;
    this.selectedOptions.categoryId = categoryId;
    this.selectedOptions.productTypeId = productTypeId;
    this.emitSelection();
  }

  // Emitimos las selecciones actuales
  emitSelection(): void {
    this.selectionChanged.emit(this.selectedOptions);
  }
}
