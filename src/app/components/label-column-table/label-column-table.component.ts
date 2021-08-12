import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-label-column-table',
  templateUrl: './label-column-table.component.html',
  styleUrls: ['./label-column-table.component.scss']
})
export class LabelColumnTableComponent implements OnInit {

  @Input() label: string | undefined;
  @Input() labelId: string | undefined;
  @Input() active: boolean | undefined;
  @Output() sortEvent = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * Event when click sort in the label
   * @param event event
   */
  sort(event: any): void{
    this.sortEvent.emit(event);
  }

}
