import {Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-group-list-modal',
  templateUrl: './group-list-modal.component.html',
  styleUrls: ['./group-list-modal.component.scss']
})
export class GroupListModalComponent implements OnInit {
  @Input() groups: { group_id: number, name: string; }[] = [];
  @Output() emittedGroup = new EventEmitter<number>();

  public selectedGroup = 3;
  public groupList: { group_id: number, name: string; }[] = []

  constructor(public activeModal: NgbActiveModal){}

  ngOnInit(): void {
  }

  clickedClose(): void {
    this.emittedGroup.emit(this.selectedGroup)
    this.activeModal.close('Notify click');
  }

  selectGroup(groupId: number): void {
    this.selectedGroup = groupId;
  }
}
