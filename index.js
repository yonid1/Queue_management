/**
 * @format
 */
import {AppRegistry} from 'react-native';
import App from './src/Root';
import {name as appName} from './app.json';
console.log("react");

AppRegistry.registerComponent(appName, () => App);
