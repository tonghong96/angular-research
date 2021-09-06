import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientDetailRoutingModule } from './patient-detail-routing.module';
import { PatientDetailComponent } from './patient-detail.component';
import { CustomizeCalendarComponent } from './customize-calendar/customize-calendar.component';
import {TranslateModule} from '@ngx-translate/core';
import { CustomizeChartComponent } from './customize-chart/customize-chart.component';


@NgModule({
  declarations: [PatientDetailComponent, CustomizeCalendarComponent, CustomizeChartComponent],
  imports: [
    CommonModule,
    PatientDetailRoutingModule,
    TranslateModule
  ]
})
export class PatientDetailModule { }
