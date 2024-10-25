import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarritosidebarComponent } from './carritosidebar.component';

describe('CarritosidebarComponent', () => {
  let component: CarritosidebarComponent;
  let fixture: ComponentFixture<CarritosidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarritosidebarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarritosidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
