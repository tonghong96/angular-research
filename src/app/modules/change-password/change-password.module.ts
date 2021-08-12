import { NgModule } from '@angular/core';

import { ChangePasswordRoutingModule } from './change-password-routing.module';
import { ChangePasswordComponent } from './change-password.component';
import { SharedModule } from "../../components/shared.module";


@NgModule({
  declarations: [ChangePasswordComponent],
  imports: [
    ChangePasswordRoutingModule,
    SharedModule
  ]
})
export class ChangePasswordModule { }
