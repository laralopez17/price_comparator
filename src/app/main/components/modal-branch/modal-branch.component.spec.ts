import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalBranchComponent } from './modal-branch.component';

describe('ModalBranchComponent', () => {
  let component: ModalBranchComponent;
  let fixture: ComponentFixture<ModalBranchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalBranchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalBranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
