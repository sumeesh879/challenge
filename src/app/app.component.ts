import { Component } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { ItemActions } from './app.actions';
import {IAppState} from './store';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @select('items') readonly items$: Observable<any>;

  constructor(
    private ngRedux: NgRedux<IAppState>,
    private actions: ItemActions) {}

  addItem(item) {
    this.ngRedux.dispatch(this.actions.addItem(item));
  }
}
