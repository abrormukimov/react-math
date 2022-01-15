import { React, Component } from 'react';
import Calculator from './components/Calculator';
// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <div className="container">
        <Calculator />
      </div>
    );
  }
}
export default App;
