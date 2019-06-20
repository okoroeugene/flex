// navigation.js
import { Navigation } from 'react-native-navigation'

export const goToAuth = () => Navigation.setRoot({
    root: {
        stack: {
            id: 'Auth',
            children: [
                {
                    component: {
                        id: "Register",
                        name: 'flex.Register'
                    },
                },
                {
                    component: {
                        id: "Login",
                        name: 'flex.Login',
                    },
                },
            ],
            options: {
                topBar: {
                    visible: false,
                    drawBehind: true,
                    animate: false
                }
            }
        }
    }
});

// export const goHome = () => Navigation.setRoot({
//     root: {
//         stack: {
//             id: 'App',
//             children: [
//                 {
//                     // component: {
//                     //     name: 'cove.Home',
//                     //     options: {
//                     //         title: {
//                     //             text: "Home"
//                     //         }
//                     //     },
//                     // },
//                     sideMenu: {
//                         id: "sideMenu",
//                         left: {
//                             component: {
//                                 id: "Drawer",
//                                 name: "cove.Drawer"
//                             },
//                             width: 260,
//                             height: 270,
//                             visible: false,
//                             enabled: true
//                         },
//                         center: {
//                             stack: {
//                                 id: "AppRoot",
//                                 children: [{
//                                     component: {
//                                         id: "App",
//                                         name: "cove.Home",
//                                         options: {
//                                             topBar: {
//                                                 title: {
//                                                     text: 'Home'
//                                                 },
//                                                 leftButtons: [
//                                                     {
//                                                         id: 'drawer',
//                                                         icon: iconsMap["ios-menu"]
//                                                     }
//                                                 ],
//                                             }
//                                         }
//                                     }
//                                 }]
//                             }
//                         },
//                         // right: {
//                         //     component: {}
//                         // }
//                     }
//                 }
//             ],
//         }
//     }
// })