import PropTypes from 'prop-types';
import classes from './CalculatorOperations.module.css';

const CalculatorOperations = (props) => {
  const { onclick } = props;
  return (
    <div className={classes.div}>
      <ul className={classes.ul}>
        <li><button type="button" onClick={onclick} name="AC">AC</button></li>
        <li><button type="button" onClick={onclick} name="+/-">+/-</button></li>
        <li><button type="button" onClick={onclick} name="%">%</button></li>
      </ul>
    </div>
  );
};

CalculatorOperations.propTypes = {
  onclick: PropTypes.func.isRequired,
};
export default CalculatorOperations;
