/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';


import {Comp1 as AppCompoent} from './app';

AppRegistry.registerComponent(appName, () => AppCompoent);
