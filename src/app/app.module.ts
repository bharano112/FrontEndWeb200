import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { NavComponent } from './components/nav/nav.component';
import { EntryComponent } from './components/shopping-list/entry/entry.component';
import { ListComponent } from './components/shopping-list/list/list.component';
import { LeftComponent } from './components/shopping-list/left/left.component';
import { RightComponent } from './components/shopping-list/right/right.component';
import { DataService } from './components/shopping-list/data.service';
import { HttpClientModule } from '@angular/common/http';
import { ShoppingDataService } from './components/shopping-list/shopping-data.service';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers } from './reducers';
import { CounterComponent } from './components/counter/counter.component';
import { EffectsModule } from '@ngrx/effects';
import { CounterEffects } from './effects/counter.effects';
import { TodoModule } from './features/todo/todo.module';
import { BooksModule } from './features/books/books.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShoppingListComponent,
    NavComponent,
    EntryComponent,
    ListComponent,
    LeftComponent,
    RightComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([CounterEffects]),
    TodoModule,
    BooksModule
  ],
  providers: [DataService, ShoppingDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
