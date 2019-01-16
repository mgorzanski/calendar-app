import React from 'react';
import './App.css';
import CalendarContainer from './containers/Calendar';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userLogged: true
    }
  }

  render() {
    return (
      <div className="App">
        { this.state.userLogged ? <CalendarContainer /> : null }
      </div>
    );
  }
}

export default App;
