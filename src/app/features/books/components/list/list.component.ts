import { Component, OnInit, Input } from '@angular/core';
import { BookItem } from '../../modles';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() books: BookItem[] = [];
  constructor() { }

  ngOnInit() {
  }

}
