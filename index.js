/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';


import {Comp1 as AppCompoent} from './appmodule';

AppRegistry.registerComponent(appName, () => AppCompoent);
