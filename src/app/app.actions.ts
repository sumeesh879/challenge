import { Injectable } from '@angular/core';
import { Action } from 'redux';

@Injectable()
export class ItemActions {
  static ADD_ITEM = 'ADD_ITEM';
  static DELETE_ITEM = 'DELETE_ITEM';
  static EDIT_ITEM = 'EDIT_ITEM';

  addItem(item) {
    return {
      type: ItemActions.ADD_ITEM,
      item
    }
  }

  deleteItem(item) {
    return {
      type: ItemActions.DELETE_ITEM,
      item
    }
  }

  editItem(oldItem, newItem) {
    return {
      type: ItemActions.EDIT_ITEM,
      oldItem,
      newItem
    }
  }
}
