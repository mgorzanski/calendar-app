import React from 'react';
import { Provider } from 'react-redux';
import { Global } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';

import 'normalize.css/normalize.css';
import '@fortawesome/fontawesome-free/css/all.css';

import { store } from './store';
import { theme } from './styles/theme';
import { fonts } from './styles/fonts';

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
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <Global styles={fonts} />
            {this.state.userLogged ? <CalendarContainer /> : <LoginContainer />}
          </ThemeProvider>
        </Provider>
      </div>
    );
  }
}

export default App;
