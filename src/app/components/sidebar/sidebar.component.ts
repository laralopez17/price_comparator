import { Component, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { IHeading } from '../../api/models/i-heading';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { IndecResourceService } from '../../api/resources/indec-resource.service';
import { ISelectedOptions } from '../../models/i-selected-options';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  providers: [IndecResourceService],
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})

export class SidebarComponent {
  @Input() active: boolean = false;
  @Output() activeChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() selectionChanged: EventEmitter<ISelectedOptions> = new EventEmitter<ISelectedOptions>();
  headings: IHeading[] = [];

  selectedOptions: ISelectedOptions = {
    headingId: null,
    categoryId: null,
    productTypeId: null
  };

  constructor(private indecResourceService: IndecResourceService, private elRef: ElementRef, private router: Router) {}

  // Método para cerrar el dropdown al hacer clic fuera
  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
    if (this.active && !this.elRef.nativeElement.contains(event.target)) {
      this.active = false;
      this.activeChange.emit(this.active);
    }
  }

  ngOnInit(): void {
    this.indecResourceService.getCaterogies().subscribe({
      next: (data) => {
        this.headings = data;
        console.log('Headings cargados:', this.headings);
      },
      error: (err) => console.error('Error al cargar los headings:', err)
    });
  }

  onSelect(headingId: number, categoryId?: number, productTypeId?: number): void {
    this.selectedOptions = { 
      headingId, 
      categoryId: categoryId ?? null, 
      productTypeId: productTypeId ?? null 
    };
    
    this.selectionChanged.emit(this.selectedOptions);
    this.router.navigate(this.getRouteSegments());
  }

   getRouteSegments(): string[] {
    const routeSegments = ['main'];
    const currentHeading = this.headings.find(h => h.headingId === this.selectedOptions.headingId);

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

  toKebabCase(name: string): string {
    return name.toLowerCase().replace(/\s+/g, '-');
  }
}