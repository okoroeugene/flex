import React, { Component, Fragment } from 'react';
import { StyleSheet, View, Modal, TouchableOpacity } from 'react-native';
import {
    Button, Icon
} from 'native-base';
import { Thumbnail } from 'native-base';
import Text from '../config/AppText';
import { Navigation } from 'react-native-navigation';
import AsyncStorage from '@react-native-community/async-storage';
import { goToAuth } from '../config/Navigation';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 55,
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
});

export default class Drawer extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    logout() {
        AsyncStorage.clear(function (err) {
            if (err) {
                console.log(err);
            }
            goToAuth();
        })
    }

    render() {
        return (
            <Fragment>
                <View style={[{ flex: 1, backgroundColor: "#00A87E" }]}>
                    <View style={{ padding: 10, marginLeft: 20, marginTop: 20 }}>
                        <TouchableOpacity>
                            <Icon
                                style={{ fontSize: 60, color: "white" }}
                                type="Ionicons"
                                name="ios-close" />
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginTop: 40, marginLeft: 50 }}>
                        <TouchableOpacity onPress={() => Navigation.push(this.props.componentId, {
                            component: {
                                name: 'flex.DriverProfile',
                                options: {
                                    topBar: {
                                        drawBehind: false,
                                        animate: false,
                                        title: {
                                            text: 'Driver Profile'
                                        }
                                    }
                                }
                            }
                        })} style={{ flexDirection: "row", padding: 10 }}>
                            <Icon
                                style={{ color: "#65EBD1" }}
                                type="Ionicons"
                                name="ios-radio-button-on" />
                            <Text style={{ marginTop: 3, paddingHorizontal: 10, color: "#65EBD1" }}>Profile</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => Navigation.push(this.props.componentId, {
                            component: {
                                name: 'flex.AddPayment',
                                options: {
                                    drawBehind: false,
                                    animate: false,
                                    topBar: {
                                        title: {
                                            text: 'Add Payment'
                                        }
                                    }
                                }
                            }
                        })} style={{ flexDirection: "row", padding: 10 }}>
                            <Icon
                                style={{ color: "#65EBD1" }}
                                type="Ionicons"
                                name="ios-radio-button-on" />
                            <Text style={{ marginTop: 3, paddingHorizontal: 10, color: "#65EBD1" }}>Payment</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => Navigation.push(this.props.componentId, {
                            component: {
                                name: 'flex.RiderLocation',
                                options: {
                                    topBar: {
                                        visible: false,
                                        drawBehind: true,
                                        animate: false
                                    }
                                }
                            }
                        })} style={{ flexDirection: "row", padding: 10 }}>
                            <Icon
                                style={{ color: "#65EBD1" }}
                                type="Ionicons"
                                name="ios-radio-button-on" />
                            <Text style={{ marginTop: 3, paddingHorizontal: 10, color: "#65EBD1" }}>Rider Location</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => Navigation.push(this.props.componentId, {
                            component: {
                                name: 'flex.AddPayment',
                                options: {
                                    topBar: {
                                        drawBehind: false,
                                        animate: false,
                                        title: {
                                            text: 'Add Payment'
                                        }
                                    },
                                    sideMenu: {
                                        left: {
                                            component: {
                                                id: "Drawer",
                                                name: "flex.Drawer",
                                                options: {
                                                    topBar: {
                                                        height: 0
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        })} style={{ flexDirection: "row", padding: 10 }}>
                            <Icon
                                style={{ color: "#65EBD1" }}
                                type="Ionicons"
                                name="ios-radio-button-on" />
                            <Text style={{ marginTop: 3, paddingHorizontal: 10, color: "#65EBD1" }}>Rate App</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => Navigation.push(this.props.componentId, {
                            component: {
                                name: 'flex.DriverProfile',
                                options: {
                                    topBar: {
                                        drawBehind: false,
                                        animate: false,
                                        title: {
                                            text: 'Profile'
                                        }
                                    }
                                }
                            }
                        })} style={{ flexDirection: "row", padding: 10 }}>
                            <Icon
                                style={{ color: "#65EBD1" }}
                                type="Ionicons"
                                name="ios-radio-button-on" />
                            <Text style={{ marginTop: 3, paddingHorizontal: 10, color: "#65EBD1" }}>Send Feedback</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => Navigation.push(this.props.componentId, {
                            component: {
                                name: 'flex.HelpCenter',
                                options: {
                                    topBar: {
                                        drawBehind: false,
                                        animate: false,
                                        title: {
                                            text: 'Help'
                                        }
                                    }
                                }
                            }
                        })} style={{ flexDirection: "row", padding: 10 }}>
                            <Icon
                                style={{ color: "#65EBD1" }}
                                type="Ionicons"
                                name="ios-radio-button-on" />
                            <Text style={{ marginTop: 3, paddingHorizontal: 10, color: "#65EBD1" }}>Help</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => Navigation.push(this.props.componentId, {
                            component: {
                                name: 'flex.HelpCenter',
                                options: {
                                    topBar: {
                                        drawBehind: false,
                                        animate: false,
                                        title: {
                                            text: 'Help'
                                        }
                                    }
                                }
                            }
                        })} style={{ flexDirection: "row", padding: 10 }}>
                            <Icon
                                style={{ color: "#65EBD1" }}
                                type="Ionicons"
                                name="ios-radio-button-on" />
                            <Text style={{ marginTop: 3, paddingHorizontal: 10, color: "#65EBD1" }}>About</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.logout()} style={{ flexDirection: "row", padding: 10 }}>
                            <Icon
                                style={{ color: "#65EBD1" }}
                                type="Ionicons"
                                name="ios-radio-button-on" />
                            <Text style={{ marginTop: 3, paddingHorizontal: 10, color: "#65EBD1" }}>Logout</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Fragment>
        );
    }
}