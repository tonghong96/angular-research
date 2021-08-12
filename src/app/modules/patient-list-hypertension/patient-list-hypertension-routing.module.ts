import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientListHypertensionComponent } from './patient-list-hypertension.component';

const routes: Routes = [{ path: '', component: PatientListHypertensionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientListHypertensionRoutingModule { }

