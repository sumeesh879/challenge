import { Action } from 'redux';
import { ItemActions } from './app.actions';

interface Item {
  name: string;
  content: string
}

export interface IAppState {
  items: Item[];
}

export const INITIAL_STATE: IAppState = {
  items: [
    {
      name: 'item1',
      content: 'this is item1'
    },
    {
      name: 'Sumeesh',
      content: 'My Name is Sumeesh'
    },
    {
      name: 'Rocket',
      content: 'This is a Rocket'
    }
  ]
};

export function rootReducer(lastState: IAppState, action): IAppState {
  let newItems;
  switch (action.type) {
    case ItemActions.ADD_ITEM:
      newItems = lastState.items.slice();
      newItems.push(action.item);
      return {
        items: newItems
      };
    case ItemActions.DELETE_ITEM:
      newItems = lastState.items.filter(obj => {
        return obj.name !== action.item.name;
      });
      return {
        items: newItems
      };
    case ItemActions.EDIT_ITEM:
      newItems = lastState.items.map(obj => {
        if (obj.name === action.oldItem.name) {
          return obj = action.newItem;
        } else {
          return obj;
        }
      });
      return {
        items: newItems
      }
  }
  return lastState;
}
