import { Component } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { IOption } from '../../api/models/i-option';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    SidebarComponent
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

  active: boolean = false;
  src!: SafeResourceUrl;

  constructor(private _sanitizer: DomSanitizer) {}

  toggle(): void {
    this.active = !this.active;
  }

  go(option: IOption): void {
    this.src = this._sanitizer.bypassSecurityTrustResourceUrl(option.url);
  } 

}
