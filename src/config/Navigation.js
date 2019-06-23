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

export const goHome = () => Navigation.setRoot({
    root: {
        stack: {
            id: 'App',
            children: [
                {
                    // component: {
                    //     name: 'cove.Home',
                    //     options: {
                    //         title: {
                    //             text: "Home"
                    //         }
                    //     },
                    // },
                    sideMenu: {
                        id: "sideMenu",
                        left: {
                            component: {
                                id: "Drawer",
                                name: "flex.Drawer"
                            },
                            width: 260,
                            height: 270,
                            visible: false,
                            enabled: true,
                        },
                        center: {
                            stack: {
                                id: "AppRoot",
                                children: [{
                                    component: {
                                        id: "EditProfile",
                                        name: "flex.EditProfile",
                                        // options: {
                                        //     topBar: {
                                        //         title: {
                                        //             text: 'Edit Profile'
                                        //         },
                                        //     }
                                        // }
                                    },
                                    component: {
                                        id: "RiderProfile",
                                        name: "flex.RiderProfile",
                                        // options: {
                                        //     topBar: {
                                        //         title: {
                                        //             text: 'Rider Profile'
                                        //         },
                                        //     }
                                        // }
                                    },
                                    component: {
                                        id: "DriverProfile",
                                        name: "flex.DriverProfile",
                                        // options: {
                                        //     topBar: {
                                        //         title: {
                                        //             text: 'Driver Profile'
                                        //         },
                                        //     }
                                        // }
                                    },
                                    component: {
                                        id: "Requests",
                                        name: "flex.Requests",
                                        // options: {
                                        //     topBar: {
                                        //         title: {
                                        //             text: 'Requests'
                                        //         },
                                        //     }
                                        // }
                                    },
                                    component: {
                                        id: "Terms",
                                        name: "flex.Terms",
                                    }
                                }],
                                options: {
                                    topBar: {
                                        leftButtons: [
                                            {
                                                id: 'drawer',
                                                icon: require('../imgs/menu_nav_line_Bullet_Hamburger-512.png')
                                                // icon: iconsMap["ios-menu"]
                                            }
                                        ],
                                    }
                                }
                            }
                        },
                        // right: {
                        //     component: {}
                        // }
                    }
                }
            ],
        }
    }
})