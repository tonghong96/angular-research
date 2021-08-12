import {Component, OnInit, EventEmitter, Input, Output} from '@angular/core';
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.scss']
})
export class ConfirmModalComponent implements OnInit {
  @Input() message: string = '';

  @Output() okayClicked = new EventEmitter();

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  clickedCancel(): void {
    this.activeModal.dismiss();
  }

  clickedOk(): void {
    this.okayClicked.emit();
    this.activeModal.close();
  }

}
