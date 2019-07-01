import { Component, OnInit } from '@angular/core';

import StatusImages from './StatusImages';
import { StatusService } from './status.service';

@Component({
  selector: 'dog-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  statusImage: string;

  constructor(private statusService: StatusService) {
    this.statusService.status
      .subscribe(status => this.statusImage = StatusImages[status]);
  }

  ngOnInit() {
  }

}
