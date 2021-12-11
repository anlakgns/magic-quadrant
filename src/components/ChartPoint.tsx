import { useState, useRef, useEffect, useContext } from 'react';
import classes from './ChartPoint.module.css';
import * as types from '../shared/types';
import { AppContext } from '../shared/state/AppState';
import {
  converterFrom385to100,
  converterFrom100to385,
} from '../shared/utilities';

interface ChartPointProps {
  itemData: types.Item;
  id: string;
}

const ChartPoint: React.FC<ChartPointProps> = ({ itemData, id }) => {
  const { updateItem, itemList } = useContext(AppContext);
  const [isPointOutlined, setIsPointOutlined] = useState<boolean>(false);
  const [isDragging, setIsDragging] = useState<Boolean>(false);
  const mainRef = useRef<HTMLDivElement | null>(null);
  const pointRef = useRef<HTMLDivElement | null>(null);

  // updating css for points
  useEffect(() => {
    if (mainRef.current) {
      mainRef.current.style.transform = `translate(${converterFrom100to385(
        itemData.x
      )}px, ${converterFrom100to385(itemData.y)}px)`;
    }
  }, [itemList, itemData.x, itemData.y]);

  // to keep the point inside chart
  const squareConstraints = (data: number) => {
    if (data > 385) return 385;
    if (data < 0) return 0;
    return data;
  };

  const mouseMoveHandler = (event: React.MouseEvent) => {
    if (isDragging) {
      event.preventDefault();
      updateItem(id, {
        x: converterFrom385to100(
          squareConstraints(converterFrom100to385(itemData.x) + event.movementX)
        ),
        y: converterFrom385to100(
          squareConstraints(converterFrom100to385(itemData.y) + event.movementY)
        ),
        label: itemData.label,
      });
    }
  };

  const mouseDownHandler = (event: React.MouseEvent) => {
    event.preventDefault();
    setIsDragging(true);
    setIsPointOutlined(true);
  };

  const mouseUpHandler = (event: React.MouseEvent) => {
    event.preventDefault();
    setIsDragging(false);
    setIsPointOutlined(false);
  };

  return (
    <div
      ref={mainRef}
      onMouseMove={mouseMoveHandler}
      onMouseDown={mouseDownHandler}
      onMouseUp={mouseUpHandler}
      onMouseLeave={mouseUpHandler}
      className={classes.main}
    >
      <p className={classes.label}>{itemData.label}</p>
      <div className={classes.point} ref={pointRef}>
        <div
          className={classes.outline}
          style={{ opacity: isPointOutlined ? 1 : 0 }}
        />
      </div>
    </div>
  );
};

export default ChartPoint;
