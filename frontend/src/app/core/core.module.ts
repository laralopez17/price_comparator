import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { MessageDialogComponent } from './layout/message-dialog/message-dialog.component';
import { LoaderComponent } from './layout/loader/loader.component';
import { AppMessageService } from './services/app-message.service';

@NgModule({
  declarations: [
    MessageDialogComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    NgbModalModule
  ],
  providers: [
    AppMessageService
  ],
  exports: [
    LoaderComponent
  ]
})
export class CoreModule { }
