export interface Item {
  label: string;
  x: number;
  y: number;
}

export interface AppState {
  itemList: ItemList;
  updateItem: (id: string, itemData: Item) => void;
  deleteItem: (id: string) => void;
  addItem: () => void;
}

export interface ItemList {
  [id: string]: Item;
}
