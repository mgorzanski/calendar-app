import React from 'react';
import './App.css';
import CalendarContainer from './containers/Calendar';
import LoginContainer from './containers/Login';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userLogged: false
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
