import React from 'react';
import { Navigation } from 'react-native-navigation';
import Welcome from './Welcome';
import Login from './Login';
import Register from './Register';
import Terms from './Terms';
import EditProfile from './EditProfile';
import { Root } from 'native-base';
import RiderProfile from './RiderProfile';
import DriverProfile from './DriverProfile';
import AddPayment from './AddPayment';
import HelpCenter from './HelpCenter';
import Drawer from './Drawer';
import Chat from './Chat';
import RiderLocation from './RiderLocation';
import Requests from './Requests';
import NavBar from '../components/NavBar';

const wrapWithToastProvider = Screen => props => (
    <Root>
        <Screen {...props} />
    </Root>
);

export function registerScreens() {
    Navigation.registerComponent('flex.NavBar', () => wrapWithToastProvider(NavBar));
    Navigation.registerComponent('flex.Requests', () => wrapWithToastProvider(Requests));
    Navigation.registerComponent('flex.RiderLocation', () => wrapWithToastProvider(RiderLocation));
    Navigation.registerComponent('flex.Chat', () => wrapWithToastProvider(Chat));
    Navigation.registerComponent('flex.Drawer', () => wrapWithToastProvider(Drawer));
    Navigation.registerComponent('flex.HelpCenter', () => wrapWithToastProvider(HelpCenter));
    Navigation.registerComponent('flex.AddPayment', () => wrapWithToastProvider(AddPayment));
    Navigation.registerComponent('flex.DriverProfile', () => wrapWithToastProvider(DriverProfile));
    Navigation.registerComponent('flex.RiderProfile', () => wrapWithToastProvider(RiderProfile));
    Navigation.registerComponent('flex.EditProfile', () => wrapWithToastProvider(EditProfile));
    Navigation.registerComponent('flex.Terms', () => wrapWithToastProvider(Terms));
    Navigation.registerComponent('flex.Welcome', () => wrapWithToastProvider(Welcome));
    Navigation.registerComponent('flex.Login', () => wrapWithToastProvider(Login));
    Navigation.registerComponent('flex.Register', () => wrapWithToastProvider(Register));
}