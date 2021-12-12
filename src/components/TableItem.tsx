import { useContext } from 'react';
import classes from './TableItem.module.css';
import CustomButton from '../shared/UI/Button';
import * as types from '../shared/types';
import { AppContext } from '../shared/state/AppState';

interface TableItemProps {
  itemData: types.Item;
  id: string;
}

const TableItem: React.FC<TableItemProps> = ({ itemData, id }) => {
  const { updateItem, itemList, deleteItem } = useContext(AppContext);

  const labelHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    updateItem(id, {
      ...itemData,
      label: e.target.value,
    });
  };
  const visionHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    updateItem(id, {
      ...itemData,
      x: +e.target.value,
    });
  };
  const abilityHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    updateItem(id, {
      ...itemData,
      y: +e.target.value,
    });
  };

  const deleteHandler = (): void => {
    deleteItem(id);
  };

  return (
    <div className={classes.main}>
      <input
        type="text"
        name="label"
        onChange={labelHandler}
        value={itemList[id].label}
        className={classes.inputLabel}
      />
      <input
        type="number"
        name="vision"
        onChange={visionHandler}
        value={itemList[id].x}
        className={classes.inputNumber}
      />
      <input
        type="number"
        name="ability"
        onChange={abilityHandler}
        value={itemList[id].y}
        className={classes.inputNumber}
      />
      <CustomButton
        text="Delete"
        style={{ width: '100px' }}
        onClick={deleteHandler}
      />
    </div>
  );
};

export default TableItem;
