import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.css']
})

export class RightComponent implements OnInit {

  msg = 'Default';
  msg$: Observable<string>;

  constructor(private service: DataService) { }

  ngOnInit() {
    this.msg$ = this.service.getObservable();
  }

  getIt() {
    // we need to ask the serivce for the message.
    this.msg = this.service.getMessage();
  }

}
