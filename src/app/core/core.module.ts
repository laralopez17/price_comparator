import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { MessageDialogComponent } from './layout/message-dialog/message-dialog.component';

@NgModule({
  declarations: [
    MessageDialogComponent
  ],
  imports: [
    CommonModule,
    NgbModalModule
  ],
  exports: [
    MessageDialogComponent
  ]
})
export class CoreModule { }
