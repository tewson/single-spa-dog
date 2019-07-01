import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import Status from './Status';

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  private _status: BehaviorSubject<Status>;

  constructor() {
    this._status = new BehaviorSubject(Status.Idle);
  }

  subscribe(onStatusUpdate: (status: Status) => void) {
    this._status.subscribe(onStatusUpdate);
  }

  setStatus(status: Status) {
    this._status.next(status);
    setTimeout(() => this._status.next(Status.Idle), 1500);
  }

}
