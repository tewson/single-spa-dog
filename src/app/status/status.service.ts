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

  get status() {
    return this._status;
  }

}
