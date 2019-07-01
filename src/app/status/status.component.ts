import { Component, OnInit, Input } from '@angular/core';

import Status from './Status';
import StatusImages from './StatusImages';

@Component({
  selector: 'dog-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  @Input()
  status: Status = Status.Idle;

  statusImage: string;

  constructor() {
    this.statusImage = StatusImages[this.status];
  }

  ngOnInit() {
  }

}
