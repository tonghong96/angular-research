import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppVersionComponent } from './modals/app-version/app-version.component';
import { LabelColumnTableComponent } from './label-column-table/label-column-table.component';
import { ConfirmModalComponent } from './modals/confirm-modal/confirm-modal.component';

@NgModule({
  declarations: [AppVersionComponent, LabelColumnTableComponent, ConfirmModalComponent],
  exports: [
    AppVersionComponent,
    LabelColumnTableComponent,
    ConfirmModalComponent,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
