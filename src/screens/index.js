import React from 'react';
import { Navigation } from 'react-native-navigation';
import Welcome from './Welcome';
import Login from './Login';
import Register from './Register';
import { Root } from 'native-base';

const wrapWithToastProvider = Screen => props => (
    <Root>
        <Screen {...props} />
    </Root>
);

export function registerScreens() {
    Navigation.registerComponent('flex.Welcome', () => wrapWithToastProvider(Welcome));
    Navigation.registerComponent('flex.Login', () => wrapWithToastProvider(Login));
    Navigation.registerComponent('flex.Register', () => wrapWithToastProvider(Register));
}