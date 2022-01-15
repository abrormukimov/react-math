// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import classes from './Numbers.module.css';

function Numbers(props) {
  const numbers = Array.from(Array(10).keys());
  numbers.reverse();
  const { onclick } = props;
  return (
    <div className={classes.div}>
      <ul className={classes.ul}>
        {numbers.map((el) => (el === 0 ? (
          <li key={el} className={classes.Zero}>
            <button type="button" onClick={onclick} name={el}>{el}</button>
          </li>
        ) : (
          <li key={el}>
            <button type="button" onClick={onclick} name={el}>{el}</button>
          </li>
        )))}
        <button className={classes.dot} type="button" onClick={onclick} name=".">.</button>
      </ul>
    </div>
  );
}

Numbers.propTypes = {
  onclick: PropTypes.func.isRequired,
};
export default Numbers;
