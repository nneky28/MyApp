/**
 * @format
 */

import { AppRegistry } from 'react-native';
//import App from './App';
import { name as appName } from './app.json';
import MainApp from './routes';

AppRegistry.registerComponent(appName, () => MainApp);
