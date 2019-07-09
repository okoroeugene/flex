// navigation.js
import { Navigation } from 'react-native-navigation'
import { iconsMap } from './IconsLoader';

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
                    sideMenu: {
                        id: "sideMenu",
                        left: {
                            component: {
                                id: "Drawer",
                                name: "flex.Drawer",
                                options: {
                                    topBar: {
                                        height: 0,
                                        // drawBehind: true,
                                        // background: {
                                        //     blur: true,
                                        //     transparent: true
                                        // }
                                    }
                                }
                            },
                            width: 260,
                            height: 270,
                            visible: false,
                            enabled: false
                        },
                        center: {
                            stack: {
                                id: "AppRoot",
                                children: [{
                                    component: {
                                        id: "RiderLocation",
                                        name: "flex.RiderLocation",
                                    },
                                    component: {
                                        id: "DriverProfile",
                                        name: "flex.DriverProfile",
                                        options: {
                                            topBar: {
                                                title: {
                                                    text: 'Driver Profile'
                                                },
                                                leftButtons: [
                                                    {
                                                        id: 'drawer',
                                                        icon: iconsMap["ios-menu"]
                                                    }
                                                ],
                                            }
                                        }
                                    },
                                }]
                            },
                            // component: {
                            //     id: "EditProfile",
                            //     name: "flex.EditProfile",
                            //     // options: {
                            //     //     topBar: {
                            //     //         title: {
                            //     //             text: 'Edit Profile'
                            //     //         },
                            //     //     }
                            //     // }
                            // },
                            // component: {
                            //     id: "RiderProfile",
                            //     name: "flex.RiderProfile",
                            //     options: {
                            //         topBar: {
                            //             title: {
                            //                 text: 'Rider Profile'
                            //             },
                            //         }
                            //     }
                            // },
                            // component: {
                            //     id: "DriverProfile",
                            //     name: "flex.DriverProfile",
                            //     options: {
                            //         topBar: {
                            //             title: {
                            //                 text: 'Driver Profile'
                            //             },
                            //         }
                            //     }
                            // },
                            // component: {
                            //     id: "App",
                            //     name: "flex.Requests",
                            //     options: {
                            //         topBar: {
                            //             // title: {
                            //             //     component: {
                            //             //         name: 'flex.NavBar'
                            //             //     },
                            //             //     alignment: 'center'|'fill'
                            //             // },
                            //             // visible: false,
                            //             // drawBehind: true,
                            //             // background: {
                            //             //     translucent: false
                            //             // },
                            //             title: {
                            //                 text: 'Requests'
                            //             },
                            //             leftButtons: [
                            //                 {
                            //                     id: 'drawer',
                            //                     icon: iconsMap["ios-menu"]
                            //                 }
                            //             ],
                            //         }
                            //     }
                            // },
                            // component: {
                            //     id: "License",
                            //     name: "flex.TakePhoto",
                            //     options: {
                            //         topBar: {
                            //             title: {
                            //                 text: 'Vehicle Photo'
                            //             },
                            //         }
                            //     }
                            // },
                            // component: {
                            //     id: "License",
                            //     name: "flex.LicenseInformation",
                            //     options: {
                            //         topBar: {
                            //             title: {
                            //                 text: 'License Information'
                            //             },
                            //         }
                            //     }
                            // }
                        },
                    }
                }
            ],

        },
    }
})


export const driverProfile = () => Navigation.setRoot({
    root: {
        stack: {
            id: 'Driver',
            children: [
                {
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
                            enabled: false
                        },
                        center: {
                            component: {
                                id: "DriverProfile",
                                name: "flex.DriverProfile",
                                options: {
                                    topBar: {
                                        title: {
                                            text: 'Driver Profile'
                                        },
                                        leftButtons: [
                                            {
                                                id: 'drawer',
                                                icon: iconsMap["ios-menu"]
                                            }
                                        ],
                                    }
                                }
                            }
                        },
                    }
                }
            ],
        },
    }
})

export const licenseInformation = () => Navigation.setRoot({
    root: {
        stack: {
            id: 'License',
            children: [
                {
                    component: {
                        id: "LicenseInformation",
                        name: "flex.LicenseInformation",
                        options: {
                            topBar: {
                                title: {
                                    text: 'License Information'
                                },
                            }
                        }
                    }
                }
            ],
        },
    }
})