import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/App';
import appStore from './redux/reducers';

const Root = ({ store }) => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(<Root store={appStore} />, document.getElementById('root'));

module.hot.accept();
