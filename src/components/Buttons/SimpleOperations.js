import PropTypes from 'prop-types';
import classes from './SimpleOperations.module.css';

function SimpleOperations(props) {
  const { onclick } = props;
  return (
    <div className={classes.div}>
      <ul className={classes.ul}>
        <li>
          {' '}
          <button type="button" onClick={onclick} name="÷">÷</button>
        </li>
        <li>
          {' '}
          <button type="button" onClick={onclick} name="x">x</button>
        </li>
        <li>
          {' '}
          <button type="button" onClick={onclick} name="-">-</button>
        </li>
        <li>
          {' '}
          <button type="button" onClick={onclick} name="+">+</button>
        </li>
        <li>
          {' '}
          <button type="button" onClick={onclick} name="=">=</button>
        </li>
      </ul>
    </div>
  );
}

SimpleOperations.propTypes = {
  onclick: PropTypes.func.isRequired,
};
export default SimpleOperations;
