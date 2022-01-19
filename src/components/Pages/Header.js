import { NavLink } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import PropTypes from 'prop-types';
import classes from './Header.module.css';

function Header(props) {
  window.addEventListener('resize', () => {
    window.location.reload();
  });
  if (window.screen.width > 768) {
    return (
      <div className={classes.div}>
        <h1 className={classes.h1}>Math Magicans</h1>
        <ul className={classes.ul}>
          <li>
            <NavLink
              to="/Home"
              className={(isActive) => `nav-link${!isActive ? ' unselected' : ''}`}
            >
              Home
            </NavLink>

          </li>
          <li>
            <NavLink
              to="/"
              className={(isActive) => `nav-link${!isActive ? ' unselected' : ''}`}
            >
              Calculator
            </NavLink>

          </li>
          <li>
            <NavLink
              to="/Quote"
              className={(isActive) => `nav-link${!isActive ? ' unselected' : ''}`}
            >
              Quote
            </NavLink>

          </li>
        </ul>
      </div>
    );
  }
  const { onclick } = props;
  return (
    <div>
      <FiMenu className={classes.icon} onClick={onclick} />
      <h1 className={classes.h1}>Math Magicans</h1>
    </div>
  );
}

Header.propTypes = {
  onclick: PropTypes.func.isRequired,
};
export default Header;
