/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';


import {Comp8 as AppCompoent} from './appmodule';

AppRegistry.registerComponent(appName, () => AppCompoent);
