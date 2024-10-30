import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IHeading } from '../../api/models/i-heading';
import { DataResource } from '../../api/resources/data-resource';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})

export class SidebarComponent {

  constructor(private router: Router) {}

  @Input() active: boolean = false;
  @Output() activeChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() selectionChanged: EventEmitter<any> = new EventEmitter<any>();
  
  headings: IHeading[] = DataResource.headings;

  // Interfaz más clara para selectedOptions
  selectedOptions: { headingId: number | null, categoryId: number | null, productTypeId: number | null } = {
    headingId: null,
    categoryId: null,
    productTypeId: null
  };

  // Mapeo de headings para acceso rápido
  private headingMap = new Map(this.headings.map(h => [h.headingId, h]));

  onSelect(headingId: number, categoryId?: number, productTypeId?: number): void {
    // Si no se proporcionan categoryId o productTypeId, se asigna null
    this.selectedOptions = { 
      headingId: headingId, 
      categoryId: categoryId ?? null, 
      productTypeId: productTypeId ?? null 
    };
    this.emitSelection();
  }

  emitSelection(): void {
    const routeSegments = this.getRouteSegments();
    this.router.navigate(routeSegments);
    this.selectionChanged.emit(this.selectedOptions);
  }

  getRouteSegments(): string[] {
    const routeSegments = ['main'];

    // Lógica simplificada para extraer los segmentos de la ruta
    let currentHeading = this.headingMap.get(this.selectedOptions.headingId!);

    if (currentHeading) {
      routeSegments.push(this.toKebabCase(currentHeading.headingName));
      const currentCategory = currentHeading.categories.find(c => c.categoryId === this.selectedOptions.categoryId);
      
      if (currentCategory) {
        routeSegments.push(this.toKebabCase(currentCategory.categoryName));
        const currentProductType = currentCategory.productTypes.find(p => p.productTypeId === this.selectedOptions.productTypeId);

        if (currentProductType) {
          routeSegments.push(this.toKebabCase(currentProductType.productTypeName));
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