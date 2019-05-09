import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.css']
})
export class LeftComponent implements OnInit {

  constructor(private service: DataService) { }

  ngOnInit() {
  }

  addIt(item: HTMLInputElement) {
    this.service.setMessage(item.value);
    item.value = '';
    item.focus();
  }

}
