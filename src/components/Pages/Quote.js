import Header from './Header';
import classes from './Quote.module.css';

function Quote() {
  return (
    <div className={classes.div}>
      <Header />
      <p>
        “I can calculate the motion of heavenly bodies but not the madness of people.”
        ― Isaac Newton

      </p>
      <p>
        “It is not knowledge, but the act of learning,
        not possession but the act of getting there,
        which grants the greatest enjoyment.“
        - Carl Friedrich Gauss
      </p>
      <p>
        Mathematicians stand on each other&aposs shoulders.
        -Carl Friedrich Gauss
      </p>
    </div>
  );
}

export default Quote;
