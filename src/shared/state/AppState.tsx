import React, { createContext, useState, useCallback, useEffect } from 'react';
import { AppState, Item, ItemList } from '../types';
import { randomId } from '../utilities';

let initialList = {
  1: {
    label: 'IBM',
    x: 30,
    y: 50,
  },
  2: {
    label: 'Google',
    x: 20,
    y: 40,
  },
  3: {
    label: 'GM',
    x: 70,
    y: 90,
  },
};

const checkLocalStorage = localStorage.getItem('items');
if (checkLocalStorage) {
  initialList = JSON.parse(checkLocalStorage);
}

const contextDefaultValues: AppState = {
  itemList: initialList,
  updateItem: () => {},
  deleteItem: () => {},
  addItem: () => {},
};

export const AppContext = createContext<AppState>(contextDefaultValues);

const StateProvider: React.FC = ({ children }) => {
  const [itemList, setItemList] = useState<ItemList>(
    contextDefaultValues.itemList
  );

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(itemList));
  }, [itemList]);

  const updateItem = useCallback((id: string, itemData: Item): void => {
    setItemList((prevState) => {
      return {
        ...prevState,
        [id]: itemData,
      };
    });
  }, []);

  const deleteItem = (id: string): void => {
    const newState = { ...itemList };
    delete newState[id];
    setItemList(newState);
  };

  const addItem = (): void => {
    const id = randomId();
    const newState = {
      ...itemList,
      [id]: {
        label: 'New',
        x: 50,
        y: 50,
      },
    };
    setItemList(newState);
  };

  return (
    <AppContext.Provider
      value={{
        itemList,
        updateItem,
        deleteItem,
        addItem,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default StateProvider;
