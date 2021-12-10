import classes from './MagicQuadrant.module.css';
import Chart from '../components/Chart';
import Table from '../components/Table';

const MagicQuadrant: React.FC = () => {
  return (
    <div className={classes.main}>
      <div className={classes.contentContainer}>
        <Chart />
        <Table />
      </div>
    </div>
  );
};

export default MagicQuadrant;
