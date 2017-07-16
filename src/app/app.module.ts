import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './modules/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ItemsComponent } from './components/items/items.component';

import { rootReducer, IAppState, INITIAL_STATE } from './store';
import { ItemActions } from './app.actions';
import {NgRedux, NgReduxModule} from '@angular-redux/store';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ItemsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    FormsModule,
    MaterialModule,
    FlexLayoutModule,
    NgReduxModule
  ],
  providers: [
    ItemActions
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>) {
    ngRedux.configureStore(
      rootReducer,
      INITIAL_STATE);
  }
}
