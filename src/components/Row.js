import PropTypes from 'prop-types';
import Button from './Button';

const Row = (props) => {
  const { rowButtons, handleCalc } = props;
  return (
    <div className="row">
      {rowButtons.map((name) => (
        <Button key={name} buttonName={name} handleCalc={handleCalc} />
      ))}
    </div>
  );
};

Row.propTypes = {
  rowButtons: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleCalc: PropTypes.func.isRequired,
};

export default Row;
