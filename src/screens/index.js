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

const wrapWithToastProvider = Screen => props => (
    <Root>
        <Screen {...props} />
    </Root>
);

export function registerScreens() {
    Navigation.registerComponent('flex.AddPayment', () => wrapWithToastProvider(AddPayment));
    Navigation.registerComponent('flex.DriverProfile', () => wrapWithToastProvider(DriverProfile));
    Navigation.registerComponent('flex.RiderProfile', () => wrapWithToastProvider(RiderProfile));
    Navigation.registerComponent('flex.EditProfile', () => wrapWithToastProvider(EditProfile));
    Navigation.registerComponent('flex.Terms', () => wrapWithToastProvider(Terms));
    Navigation.registerComponent('flex.Welcome', () => wrapWithToastProvider(Welcome));
    Navigation.registerComponent('flex.Login', () => wrapWithToastProvider(Login));
    Navigation.registerComponent('flex.Register', () => wrapWithToastProvider(Register));
}