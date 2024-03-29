/**
 * @format
 */

import {Provider} from 'react-redux';
import {store} from './src/Redux/store';

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => Root);
