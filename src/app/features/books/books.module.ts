import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';
import { BooksComponent } from './books.component';
import { EntryComponent } from './components/entry/entry.component';
import { ListComponent } from './components/list/list.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers';
import { OnloanComponent } from './components/onloan/onloan.component';

@NgModule({
  declarations: [BooksComponent, EntryComponent, ListComponent, OnloanComponent],
  imports: [
    CommonModule,
    FormsModule,
    StoreModule.forFeature('booksFeature', reducers)
  ]
})
export class BooksModule { }
