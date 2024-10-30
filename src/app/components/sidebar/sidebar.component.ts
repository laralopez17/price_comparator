import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IHeading } from '../../api/models/i-heading';
import { DataResource } from '../../api/resources/data-resource';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

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

  constructor(private router: Router) {}
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

  emitSelection(): void {
    const routeSegments = this.getRouteSegments();
    this.router.navigate(routeSegments);
    this.selectionChanged.emit(this.selectedOptions);
  }

  getRouteSegments(): string[] {
    const routeSegments = ['main'];

    const heading = this.headings.find(h => h.headingId === this.selectedOptions.headingId);
    if (heading) {
      routeSegments.push(this.toKebabCase(heading.headingName));

      const category = heading.categories.find(c => c.categoryId === this.selectedOptions.categoryId);
      if (category) {
        routeSegments.push(this.toKebabCase(category.categoryName));

        const productType = category.productTypes.find(p => p.productTypeId === this.selectedOptions.productTypeId);
        if (productType) {
          routeSegments.push(this.toKebabCase(productType.productTypeName));
        }
      }
    }

    return routeSegments;
  }

  // Convierte un nombre a kebab-case
  toKebabCase(name: string): string {
    return name.toLowerCase().replace(/\s+/g, '-');
  }
}
