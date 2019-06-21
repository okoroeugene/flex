import { Navigation } from "react-native-navigation";
import { registerScreens } from './src/screens';
registerScreens();

Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
        root: {
            component: {
                name: "flex.Welcome"
            }
        }
    });
});

Navigation.setDefaultOptions({
    topBar: {
        title: {
            // text: 'Title',
            fontSize: 18,
            // color: 'red',
            fontFamily: 'Kastelov - Axiforma Regular',
        },
    },
    bottomTab: {
        iconColor: "black",
        selectedIconColor: "#ccc",
        backgroundColor: "white",
        fontFamily: "Kastelov - Axiforma Regular",
        fontSize: 14
    },
    bottomTabs: {
        titleDisplayMode: "alwaysShow"
    }
});