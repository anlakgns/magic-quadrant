import { useContext } from 'react';
import classes from './Table.module.css';
import Headline from '../shared/UI/Headline';
import CustomButton from '../shared/UI/Button';
import TableItem from './TableItem';
import { AppContext } from '../shared/state/AppState';

const Table: React.FC = () => {
  const { itemList, addItem } = useContext(AppContext);
  const itemListArr = Object.values(itemList);
  const itemListKeys = Object.keys(itemList);

  const addItemHandler = () => {
    addItem();
  };

  return (
    <div className={classes.main}>
      <CustomButton text="Add" onClick={addItemHandler} />

      {/* Headlines */}
      <div className={classes.tableHeaderContainer}>
        <Headline text="Label" style={{ width: '200px' }} />
        <Headline text="Vision" style={{ width: '100px' }} />
        <Headline text="Ability" style={{ width: '100px' }} />
        <Headline text="Delete" style={{ width: '100px' }} />
      </div>

      {/* List of Items  */}
      <div className={classes.tableListContainer}>
        {itemListArr.map((itemData, i) => {
          return (
            <TableItem
              itemData={itemData}
              id={itemListKeys[i]}
              key={itemListKeys[i]}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Table;
