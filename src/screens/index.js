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
import Splash from './Splash';
import NavBar from '../components/NavBar';
import BackgroundCheck from './Driver/BackgroundCheck';
import Congratulations from './Driver/Congratulations';
import LicenseInformation from './Driver/LicenseInformation';
import VehiclePhoto from './Driver/VehiclePhoto';
import UploadAvatar from './Driver/UploadAvatar';
import SSNCheck from './Driver/SSNCheck';
import CardDetails from './CardDetails';
import AddLocation from './AddLocation';

const wrapWithToastProvider = Screen => props => (
    <Root>
        <Screen {...props} />
    </Root>
);

export function registerScreens(Provider = {}, store = {}) {
    Navigation.registerComponentWithRedux('flex.CardDetails', () => wrapWithToastProvider(CardDetails), Provider, store);
    Navigation.registerComponentWithRedux('flex.AddLocation', () => wrapWithToastProvider(AddLocation), Provider, store);
    Navigation.registerComponentWithRedux('flex.SSNCheck', () => wrapWithToastProvider(SSNCheck), Provider, store);
    Navigation.registerComponentWithRedux('flex.BackgroundCheck', () => wrapWithToastProvider(BackgroundCheck), Provider, store);
    Navigation.registerComponentWithRedux('flex.Congratulations', () => wrapWithToastProvider(Congratulations), Provider, store);
    Navigation.registerComponentWithRedux('flex.LicenseInformation', () => wrapWithToastProvider(LicenseInformation), Provider, store);
    Navigation.registerComponentWithRedux('flex.VehiclePhoto', () => wrapWithToastProvider(VehiclePhoto), Provider, store);
    Navigation.registerComponentWithRedux('flex.UploadAvatar', () => wrapWithToastProvider(UploadAvatar), Provider, store);
    Navigation.registerComponentWithRedux('flex.NavBar', () => wrapWithToastProvider(NavBar), Provider, store);
    Navigation.registerComponentWithRedux('flex.Requests', () => wrapWithToastProvider(Requests), Provider, store);
    Navigation.registerComponentWithRedux('flex.RiderLocation', () => wrapWithToastProvider(RiderLocation), Provider, store);
    Navigation.registerComponentWithRedux('flex.Chat', () => wrapWithToastProvider(Chat), Provider, store);
    Navigation.registerComponentWithRedux('flex.Drawer', () => wrapWithToastProvider(Drawer), Provider, store);
    Navigation.registerComponentWithRedux('flex.HelpCenter', () => wrapWithToastProvider(HelpCenter), Provider, store);
    Navigation.registerComponentWithRedux('flex.AddPayment', () => wrapWithToastProvider(AddPayment), Provider, store);
    Navigation.registerComponentWithRedux('flex.DriverProfile', () => wrapWithToastProvider(DriverProfile), Provider, store);
    Navigation.registerComponentWithRedux('flex.RiderProfile', () => wrapWithToastProvider(RiderProfile), Provider, store);
    Navigation.registerComponentWithRedux('flex.EditProfile', () => wrapWithToastProvider(EditProfile), Provider, store);
    Navigation.registerComponentWithRedux('flex.Terms', () => wrapWithToastProvider(Terms), Provider, store);
    Navigation.registerComponentWithRedux('flex.Welcome', () => wrapWithToastProvider(Welcome), Provider, store);
    Navigation.registerComponentWithRedux('flex.Login', () => wrapWithToastProvider(Login), Provider, store);
    Navigation.registerComponentWithRedux('flex.Register', () => wrapWithToastProvider(Register), Provider, store);
    Navigation.registerComponentWithRedux('flex.Splash', () => wrapWithToastProvider(Splash), Provider, store);
}