import rolling from './rolling.svg';

import style from './button.module.scss';

const Button = ({onClick, loading}) => {
  return (
    <button 
      className={style.button}
      onClick={onClick}
    >
      <span>Submit</span>
      {loading && <img src={rolling} alt="rolling" />}
    </button>
  );
}

export default Button;