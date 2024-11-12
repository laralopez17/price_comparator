import { Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import { IHeading } from '../../../api/models/i-heading';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { IndecResourceService } from '../../../api/resources/indec-resource.service';
import { ISelectedOptions } from '../../models/i-selected-options';
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  providers: [IndecResourceService],
  imports: [CommonModule,
    SharedModule 
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})

export class SidebarComponent {
  @Input() active: boolean = false;
  @Output() activeChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() hasSelection: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() selectionChanged: EventEmitter<ISelectedOptions> = new EventEmitter<ISelectedOptions>();
  headings: IHeading[] = [];

  selectedOptions: ISelectedOptions = {
    headingId: null,
    categoryId: null,
    productTypeId: null
  };

  constructor(private _route: ActivatedRoute, private elRef: ElementRef, private router: Router) {}

  onClickOutside() {
    if (this.active) {
      this.active = false;
      this.activeChange.emit(this.active);
    }
  }

  ngOnInit(): void {
    this._route.data.subscribe((data) => {
      this.headings = data['categorias'];
    });
  }

  onSelect(headingId: number, categoryId?: number, productTypeId?: number): void {
    this.selectedOptions = { 
      headingId, 
      categoryId: categoryId ?? null, 
      productTypeId: productTypeId ?? null 
    };
    
    this.router.navigate(this.getRouteSegments(), {
      queryParams: {
          headingId: this.selectedOptions.headingId,
          categoryId: this.selectedOptions.categoryId,
          productTypeId: this.selectedOptions.productTypeId
      }
    });
    this.activeChange.emit(!this.active);
    this.hasSelection.emit(true);
    window.scrollTo(0, 0);
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