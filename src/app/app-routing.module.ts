import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'dashboard-hypertension',
    loadChildren: () => import('./modules/patient-list-hypertension/patient-list-hypertension.module')
      .then(m => m.PatientListHypertensionModule)
  },
  { path: 'change-password', loadChildren: () => import('./modules/change-password/change-password.module').then(m => m.ChangePasswordModule) },
  { path: 'patient-detail', loadChildren: () => import('./modules/patient-detail/patient-detail.module').then(m => m.PatientDetailModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
