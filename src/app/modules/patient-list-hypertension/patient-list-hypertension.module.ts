import { NgModule } from '@angular/core';

import { PatientListHypertensionRoutingModule } from './patient-list-hypertension-routing.module';
import { PatientListHypertensionComponent } from './patient-list-hypertension.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { GroupListModalComponent } from './group-list-modal/group-list-modal.component';
import { SharedModule } from "src/app/components/shared.module";

@NgModule({
  declarations: [
    PatientListHypertensionComponent,
    GroupListModalComponent
  ],
  imports: [
    PatientListHypertensionRoutingModule,
    NgbModule,
    FormsModule,
    SharedModule
  ]
})

export class PatientListHypertensionModule { }
