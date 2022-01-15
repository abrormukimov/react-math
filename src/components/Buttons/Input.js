// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import classes from './Input.module.css';

const Input = (props) => {
  const { value } = props;
  return (<p className={classes.input}>{value}</p>);
};

Input.propTypes = {
  value: PropTypes.string.isRequired,
};
export default Input;
