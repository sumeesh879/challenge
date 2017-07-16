import {Component, ElementRef, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { ItemActions } from './../../app.actions';
import {IAppState} from './../../store';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ItemsComponent implements OnInit {
  items: any = [];
  addToggle = false;
  editToggle = false;
  search = '';
  editItemObj: any = [{}];
  subscription: any;

  constructor(private ngRedux: NgRedux<IAppState>,
              private actions: ItemActions) {
    this.reset();
  }

  ngOnInit() {
    this.reset();
  }

  addItem(fObject) {
    const newItem = {
      name: fObject.value.name,
      content: fObject.value.content
    };
    this.ngRedux.dispatch(this.actions.addItem(newItem));
    fObject.resetForm();
  }
  checkToggle() {
    this.addToggle = !this.addToggle;
  }
  checkEditToggle() {
    this.editToggle = !this.editToggle;
  }
  searchItem() {
    const term = this.search.toUpperCase();
    this.subscription = this.ngRedux.select<any>('items')
      .subscribe(newItems => this.items = newItems)
    const dupItems = this.items;
    this.items = [];
    dupItems.map(item => {
      if (item.name.toUpperCase().includes(term)) {
         this.items.push(item);
      }
    });
  }
  reset() {
    this.search = '';
    this.subscription = this.ngRedux.select<any>('items')
      .subscribe(newItems => this.items = newItems)
  }
  editItem(item) {
    this.checkEditToggle();
    this.editItemObj = {
      name: item.name,
      content: item.content
    };
  }
  editForm(fObject) {
    const newItem = {
      name: fObject.value.name,
      content: fObject.value.content
    };
    this.ngRedux.dispatch(this.actions.editItem(this.editItemObj, newItem));
  }
  deleteItem(item) {
    this.ngRedux.dispatch(this.actions.deleteItem(item));
  }

}
