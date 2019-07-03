import { Navigation } from "react-native-navigation";
import { registerScreens } from './src/screens';
import { Provider } from 'react-redux';
import store from './src/stores';
import { goToAuth } from "./src/config/Navigation";

registerScreens(Provider, store);

Navigation.events().registerAppLaunchedListener(() => {
    // Navigation.setRoot({
    //     root: {
    //         component: {
    //             name: "flex.Login"
    //         }
    //     }
    // });
    goToAuth();
});

Navigation.setDefaultOptions({
    topBar: {
        title: {
            // text: 'Title',
            fontSize: 16,
            // color: 'red',
            fontFamily: 'Kastelov - Axiforma Regular',
        },
    },
    bottomTab: {
        iconColor: "black",
        selectedIconColor: "#ccc",
        backgroundColor: "white",
        fontFamily: "Kastelov - Axiforma Regular",
        fontSize: 12
    },
    bottomTabs: {
        titleDisplayMode: "alwaysShow"
    }
});