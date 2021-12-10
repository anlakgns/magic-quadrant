import { useState, useRef, useEffect, useContext } from 'react';
import classes from './ChartPoint.module.css';
import * as types from '../shared/types';
import { AppContext } from '../shared/state/AppState';
import { converterTo100, converterTo400 } from '../shared/utilities';

interface ChartPointProps {
  itemData: types.Item;
  id: string;
}

const ChartPoint: React.FC<ChartPointProps> = ({ itemData, id }) => {
  const { updateItem, itemList } = useContext(AppContext);
  const [isDragging, setIsDragging] = useState<Boolean>(false);
  const mainRef = useRef<HTMLDivElement | null>(null);
  const pointRef = useRef<HTMLDivElement | null>(null);
  const outlineRef = useRef<HTMLDivElement | null>(null);

  // updating css for points
  useEffect(() => {
    if (mainRef.current) {
      mainRef.current.style.transform = `translate(${converterTo400(
        itemData.x
      )}px, ${converterTo400(itemData.y)}px)`;
    }
  }, [itemList, itemData.x, itemData.y]);

  // Because of a css bug the range 390 not 400 for chart
  const squareConstraints = (data: number) => {
    if (data > 400) return converterTo100(390);
    if (data < -10) return 0;
    return converterTo100(data);
  };

  const mouseMoveHandler = (event: React.MouseEvent) => {
    if (isDragging) {
      event.preventDefault();
      updateItem(id, {
        x: squareConstraints(converterTo400(itemData.x) + event.movementX),
        y: squareConstraints(converterTo400(itemData.y) + event.movementY),
        label: itemData.label,
      });
    }
  };

  const mouseDownHandler = (event: React.MouseEvent) => {
    setIsDragging(true);
    if (outlineRef.current) {
      outlineRef.current.style.opacity = '1';
    }
    event.preventDefault();
  };

  const mouseUpHandler = (event: React.MouseEvent) => {
    setIsDragging(false);
    if (outlineRef.current) {
      outlineRef.current.style.opacity = '0';
    }
    event.preventDefault();
  };

  return (
    <div
      ref={mainRef}
      onMouseMove={mouseMoveHandler}
      onMouseDown={mouseDownHandler}
      onMouseUp={mouseUpHandler}
      className={classes.main}
    >
      <p className={classes.label}>{itemData.label}</p>
      <div className={classes.point} ref={pointRef}>
        <div className={classes.outline} ref={outlineRef} />
      </div>
    </div>
  );
};

export default ChartPoint;
