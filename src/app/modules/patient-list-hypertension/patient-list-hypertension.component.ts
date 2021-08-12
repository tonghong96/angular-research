import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {GroupListModalComponent} from "./group-list-modal/group-list-modal.component";
import {SharedService} from "../../services/shared.service";
import {ConfirmModalComponent} from "../../components/modals/confirm-modal/confirm-modal.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-patient-list-hypertension',
  templateUrl: './patient-list-hypertension.component.html',
  styleUrls: ['./patient-list-hypertension.component.scss']
})
export class PatientListHypertensionComponent implements OnInit {
  @ViewChild('tooltip1') tooltip1: ElementRef | undefined;
  @ViewChild('tooltip2') tooltip2: ElementRef | undefined;
  @ViewChild('tooltip3') tooltip3: ElementRef | undefined;
  @ViewChild('tooltip4') tooltip4: ElementRef | undefined;

  public activeColumns = ['patient_id'];
  public textSearch = '';
  public selectedGroup = -1;
  public tooltip4List = [
    {
      col_1: 'トイレを一人でする',
      col_2: 1.8,
      col_3: 'I'
    },
    {
      col_1: '家の中で移動する',
      col_2: 2.6,
      col_3: 'II'
    },
    {
      col_1: '軽くジョギングをする',
      col_2: 5.3,
      col_3: 'III'
    },
    {
      col_1: '全くあてはまらない',
      col_2: '6.0 以上',
      col_3: 'IV'
    },
  ]
  public patientList = [
    {
      patient_id: 'A001',
      name: 'Full name patient 1',
      sex: '男',
      age: 50,
      blood_pressure_morning: '83/99',
      pulse_rate_morning: 101,
      blood_pressure_evening: '80/99',
      pulse_rate_evening: 102,
      step_down_target: '135/85',
      last_measurement_date: '2020.10.10',
      final_medical_treatment: 10,
      myself_date: '2020.10.10',
      myself_time: '14:23',
      other_staff_date: '2020.10.10',
      other_staff_time: '14:23',
      other_staff_name: '竹内あ'
    },
    {
      patient_id: 'A002',
      name: 'Full name patient 2',
      sex: '男',
      age: 50,
      blood_pressure_morning: '83/99',
      pulse_rate_morning: 101,
      blood_pressure_evening: '80/99',
      pulse_rate_evening: 102,
      step_down_target: '135/85',
      last_measurement_date: '2020.10.10',
      final_medical_treatment: 10,
      myself_date: '2020.10.10',
      myself_time: '14:23',
      other_staff_date: '2020.10.10',
      other_staff_time: '14:23',
      other_staff_name: '金澤あ'
    },
    {
      patient_id: 'A003',
      name: 'Full name patient 3',
      sex: '男',
      age: 50,
      blood_pressure_morning: '83/99',
      pulse_rate_morning: 101,
      blood_pressure_evening: '80/99',
      pulse_rate_evening: 102,
      step_down_target: '135/85',
      last_measurement_date: '2020.10.10',
      final_medical_treatment: 10,
      myself_date: '2020.10.10',
      myself_time: '14:23',
      other_staff_date: '2020.10.10',
      other_staff_time: '14:23',
      other_staff_name: '吉澤'
    }
  ]
  public groupList: { group_id: number, name: string; }[] = [
    {
      group_id: 1,
      name: 'group 1'
    },
    {
      group_id: 2,
      name: 'group 2'
    },
    {
      group_id: 3,
      name: 'group 3'
    },
    {
      group_id: 4,
      name: 'group 4'
    },
    {
      group_id: 5,
      name: 'group long text 5asdasdasdsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
    },
    {
      group_id: 6,
      name: 'group 6'
    },
    {
      group_id: 7,
      name: 'group 7'
    },
  ]
  originalFields = {
    patient_id: {
      field: 'patient_id',
      isSort: false,
      sortType: 'desc'
    },
    name: {
      field: 'name',
      isSort: false,
      sortType: 'desc'
    },
    sex: {
      field: 'sex',
      isSort: false,
      sortType: 'desc'
    },
    age: {
      field: 'age',
      isSort: false,
      sortType: 'desc'
    },
  };
  tableFields: {[key: string]: any} = {};

  constructor(private modalService: NgbModal, public shareService: SharedService, public router: Router) { }

  ngOnInit(): void {
    this.tableFields = JSON.parse(JSON.stringify(this.originalFields));
    this.shareService.helpEventEmitter.subscribe(() => {
      this.showAllTooltip();
    })
    this.shareService.syncDataEventEmitter.subscribe(() => {
      // TODO
      console.log('RELOAD DATA!!!')
    })
  }

  /**
   * search by ID or name of patient
   */
  search(): void {
    console.log('CLICK SEARCH!!!');
  }

  clickGroupName(): void {
    const modalRef = this.modalService.open(GroupListModalComponent);
    modalRef.componentInstance.groupList = this.groupList
    modalRef.componentInstance.emittedGroup.subscribe((result: number) => {
      this.selectedGroup = result;
    });
  }

  showDelete(): void {
    const modalRef = this.modalService.open(ConfirmModalComponent, { centered: true });
    modalRef.componentInstance.message = 'Do you want to delete?'
    modalRef.componentInstance.okayClicked.subscribe((result: number) => {
      console.log('Call API delete')
    });
  }

  showRemove(): void {
    const modalRef = this.modalService.open(ConfirmModalComponent, { centered: true });
    modalRef.componentInstance.message = 'Do you want to remove?'
    modalRef.componentInstance.okayClicked.subscribe((result: number) => {
      console.log('Call API remove')
    });
  }

  showAdd(): void {
    const modalRef = this.modalService.open(ConfirmModalComponent, { centered: true });
    modalRef.componentInstance.message = 'Do you want to add?'
    modalRef.componentInstance.okayClicked.subscribe((result: number) => {
      console.log('Call API add')
    });
  }

  showAllTooltip(): void {
    this.tooltip1?.nativeElement.click();
    this.tooltip2?.nativeElement.click();
    this.tooltip3?.nativeElement.click();
    this.tooltip4?.nativeElement.click();
  }

  /**
   * Handle sorting function
   * @param event event when clicking sort
   */
  sortBy(event: any): void{
    this.activeColumns = [];
    console.log('originalFields: ', this.originalFields)
    const headerId: string = event.target.attributes.id.value;
    this.activeColumns.push(headerId);
    console.log('sorted headerId: ', headerId);
    if (!this.tableFields[headerId].isSort){
      this.tableFields = JSON.parse(JSON.stringify(this.originalFields));
      this.tableFields[headerId].isSort = true;
    }
    if (this.tableFields[headerId].sortType === 'asc'){
      this.tableFields[headerId].sortType = 'desc';
    } else if (this.tableFields[headerId].sortType === 'desc' || this.tableFields[headerId].sortType === ''){
      this.tableFields[headerId].sortType = 'asc';
    }

    console.log('tableFields after: ', this.tableFields);
  }

  redirectPatientDetail(patientId: string): void{
    this.router.navigate([`patient-detail/${patientId}`]);
  }
}
