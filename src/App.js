import React from 'react';
import './App.css';
import './styles/helpers.css';
import './styles/fonts.css';
import './styles/tooltip.css';
import CalendarContainer from './containers/Calendar';
import LoginContainer from './containers/Login';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userLogged: true
    };
  }
  render() {
    return (
      <div className="App">
        {this.state.userLogged ? <CalendarContainer /> : <LoginContainer />}
      </div>
    );
  }
}

export default App;
