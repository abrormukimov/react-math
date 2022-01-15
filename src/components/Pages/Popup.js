import { NavLink } from 'react-router-dom';
import classes from '../Calculator.module.css';

function Popup() {
  const style = classes.popup;
  return (
    <div className={style}>
      <ul>
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
      <div><p /></div>
    </div>
  );
}

export default Popup;
