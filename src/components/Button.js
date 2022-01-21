import PropTypes from 'prop-types';

const Button = (props) => {
  const { buttonName, handleCalc } = props;

  const buttonStyle = buttonName === '0' ? 'double-button' : 'single-button';

  return (
    <button type="button" className={buttonStyle} onClick={handleCalc()}>
      {buttonName}
    </button>
  );
};

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
  handleCalc: PropTypes.func.isRequired,
};

export default Button;
