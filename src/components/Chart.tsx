import { useContext } from 'react';
import classes from './Chart.module.css';
import Headline from '../shared/UI/Headline';
import ChartPoint from './ChartPoint';
import { AppContext } from '../shared/state/AppState';

const Chart: React.FC = () => {
  const { itemList } = useContext(AppContext);
  const itemListArr = Object.values(itemList);
  const itemKeysArr = Object.keys(itemList);

  return (
    <div className={classes.main}>
      
      {/* Cross lines */}
      <div className={classes.lineX} />
      <div className={classes.lineY} />

      {/* Headlines - different CSS's, cant mapping */} 
      <div className={classes.headlineBoxLeftTop}>
        <Headline text="Challengers" style={{ padding: '3px 12px' }} />
      </div>
      <div className={classes.headlineBoxRightTop}>
        <Headline text="Leaders" style={{ padding: '3px 12px' }} />
      </div>
      <div className={classes.headlineBoxLeftBottom}>
        <Headline text="Visioners" style={{ padding: '3px 12px' }} />
      </div>
      <div className={classes.headlineBoxRightBottom}>
        <Headline text="Niche Players" style={{ padding: '3px 12px' }} />
      </div>

      {/* Line Descriptions */}
      <div className={classes.lineYText}>
        <p>Ability to execute &rarr;</p>
      </div>
      <div className={classes.lineXText}>
        <p>Completeness to vision &rarr;</p>
      </div>

      {/* Chart Points */}
      {itemListArr.map((item, i) => {
        return (
          <ChartPoint
            itemData={item}
            key={itemKeysArr[i]}
            id={itemKeysArr[i]}
          />
        );
      })}
    </div>
  );
};

export default Chart;
