import classes from './Headline.module.css';

interface HeadlineProps {
  text: string;
  style?: React.CSSProperties;
}

const Headline: React.FC<HeadlineProps> = ({ text, style }) => {
  return (
    <div style={style} className={classes.main}>
      {text}
    </div>
  );
};

export default Headline;
