import classes from './Button.module.css';

interface ButtonProps {
  text: string;
  style?: React.CSSProperties;
  onClick: (event?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const CustomButton: React.FC<ButtonProps> = ({ text, style, onClick }) => {
  return (
    <button onClick={onClick} className={classes.btn} style={style}>
      {text}
    </button>
  );
};

export default CustomButton;
