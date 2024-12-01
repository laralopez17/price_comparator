import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-barra-busqueda',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './barra-busqueda.component.html',
  styleUrl: './barra-busqueda.component.scss'
})
export class BarraBusquedaComponent {
  @Output() search = new EventEmitter<string>();
  searchTerm: string = '';

  constructor(private router: Router, private route: ActivatedRoute) {}
  
  onSearch(): void {
    console.log('Search term:', this.searchTerm);
    if (this.searchTerm.trim()) {
      const lang = this.route.snapshot.paramMap.get('lang') || 'es-AR';
      this.router.navigate([lang, 'productos'], {
      queryParams: { search: this.searchTerm },
      });
    }
  }
}
