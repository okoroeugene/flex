import React from 'react';
import {
    View,
    TouchableOpacity,
    Image,
    ScrollView
} from 'react-native';
import { Icon } from 'native-base';
import Text from '../config/AppText';
import { Navigation } from 'react-native-navigation';
import { goToAuth } from '../config/Navigation';
import NavBar from '../components/NavBar';

class Requests extends React.Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <NavBar />
                <ScrollView
                    contentContainerStyle={{ flexGrow: 1, padding: 30 }}
                >
                    <View style={{ borderBottomColor: "#ccc", borderBottomWidth: 1, flexDirection: "column", paddingBottom: 18, marginTop: 20 }} regular>
                        <View style={{ flexDirection: "row" }}>
                            <Text>Manhattan</Text>
                            <Icon style={{ color: "#00A87E", paddingLeft: 10, paddingRight: 10, position: "relative", bottom: 4 }} type="Ionicons" name="ios-arrow-round-forward" />
                            <Text>Queens</Text>
                            <Text style={{ color: "#BBBFC7", paddingLeft: 10, paddingRight: 10 }}>|</Text>
                            <Text style={{ color: "#BBBFC7" }}>8.2 miles</Text>
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                            <View style={{ marginRight: -50 }}>
                                <View style={{ width: 10, height: 10, borderRadius: 10 / 2, borderColor: "#bbb", borderWidth: 2, position: "relative", right: 2.8 }}></View>
                                <Text style={{ lineHeight: 2 }}>.</Text>
                                <Text style={{ lineHeight: 2 }}>.</Text>
                                <Text style={{ lineHeight: 2 }}>.</Text>
                                <Text style={{ lineHeight: 2 }}>.</Text>
                                <Text style={{ lineHeight: 2 }}>.</Text>
                                <Text style={{ lineHeight: 2 }}>.</Text>
                                <Text style={{ lineHeight: 2 }}>.</Text>
                                <View style={{ width: 5, height: 5, borderRadius: 5 / 2, backgroundColor: "#bbb" }}></View>
                            </View>
                            <View>
                                <Text style={{ color: "#B1B5BF" }}>460 Park Ave, New York</Text>
                                <Text style={{ color: "#B1B5BF" }}>541-549 Columbus Ave, New York</Text>
                            </View>
                            <View>
                                <TouchableOpacity
                                    onPress={() => Navigation.push(this.props.componentId, {
                                        component: {
                                            name: 'flex.RiderProfile',
                                            options: {
                                                topBar: {
                                                    drawBehind: false,
                                                    animate: false,
                                                    title: {
                                                        text: 'Rider Profile'
                                                    }
                                                    // visible: false,
                                                    // drawBehind: true,
                                                    // animate: false
                                                }
                                            }
                                        }
                                    })}
                                    style={{ height: 35, width: 35, borderRadius: 35 / 2, backgroundColor: "#00A87E", justifyContent: "center" }} iconLeft dark>
                                    <Icon style={{ fontSize: 17, textAlign: "center", alignItems: "center", color: "white" }} name='checkmark' />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    <View style={{ borderBottomColor: "#ccc", borderBottomWidth: 1, flexDirection: "column", paddingBottom: 18, marginTop: 20 }} regular>
                        <View style={{ flexDirection: "row" }}>
                            <Text>Manhattan</Text>
                            <Icon style={{ color: "#00A87E", paddingLeft: 10, paddingRight: 10, position: "relative", bottom: 4 }} type="Ionicons" name="ios-arrow-round-forward" />
                            <Text>Queens</Text>
                            <Text style={{ color: "#BBBFC7", paddingLeft: 10, paddingRight: 10 }}>|</Text>
                            <Text style={{ color: "#BBBFC7" }}>8.2 miles</Text>
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                            <View style={{ marginRight: -50 }}>
                                <View style={{ width: 10, height: 10, borderRadius: 10 / 2, borderColor: "#bbb", borderWidth: 2, position: "relative", right: 2.8 }}></View>
                                <Text style={{ lineHeight: 2 }}>.</Text>
                                <Text style={{ lineHeight: 2 }}>.</Text>
                                <Text style={{ lineHeight: 2 }}>.</Text>
                                <Text style={{ lineHeight: 2 }}>.</Text>
                                <Text style={{ lineHeight: 2 }}>.</Text>
                                <Text style={{ lineHeight: 2 }}>.</Text>
                                <Text style={{ lineHeight: 2 }}>.</Text>
                                <View style={{ width: 5, height: 5, borderRadius: 5 / 2, backgroundColor: "#bbb" }}></View>
                            </View>
                            <View>
                                <Text style={{ color: "#B1B5BF" }}>460 Park Ave, New York</Text>
                                <Text style={{ color: "#B1B5BF" }}>541-549 Columbus Ave, New York</Text>
                            </View>
                            <View>
                                <TouchableOpacity
                                    onPress={() => Navigation.push(this.props.componentId, {
                                        component: {
                                            name: 'flex.RiderProfile',
                                            options: {
                                                topBar: {
                                                    drawBehind: false,
                                                    animate: false,
                                                    title: {
                                                        text: 'Rider Profile'
                                                    }
                                                    // visible: false,
                                                    // drawBehind: true,
                                                    // animate: false
                                                }
                                            }
                                        }
                                    })}
                                    style={{ height: 35, width: 35, borderRadius: 35 / 2, backgroundColor: "#00A87E", justifyContent: "center" }} iconLeft dark>
                                    <Icon style={{ fontSize: 17, textAlign: "center", alignItems: "center", color: "white" }} name='checkmark' />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    <View style={{ borderBottomColor: "#ccc", borderBottomWidth: 1, flexDirection: "column", paddingBottom: 18, marginTop: 20 }} regular>
                        <View style={{ flexDirection: "row" }}>
                            <Text>Manhattan</Text>
                            <Icon style={{ color: "#00A87E", paddingLeft: 10, paddingRight: 10, position: "relative", bottom: 4 }} type="Ionicons" name="ios-arrow-round-forward" />
                            <Text>Queens</Text>
                            <Text style={{ color: "#BBBFC7", paddingLeft: 10, paddingRight: 10 }}>|</Text>
                            <Text style={{ color: "#BBBFC7" }}>8.2 miles</Text>
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                            <View style={{ marginRight: -50 }}>
                                <View style={{ width: 10, height: 10, borderRadius: 10 / 2, borderColor: "#bbb", borderWidth: 2, position: "relative", right: 2.8 }}></View>
                                <Text style={{ lineHeight: 2 }}>.</Text>
                                <Text style={{ lineHeight: 2 }}>.</Text>
                                <Text style={{ lineHeight: 2 }}>.</Text>
                                <Text style={{ lineHeight: 2 }}>.</Text>
                                <Text style={{ lineHeight: 2 }}>.</Text>
                                <Text style={{ lineHeight: 2 }}>.</Text>
                                <Text style={{ lineHeight: 2 }}>.</Text>
                                <View style={{ width: 5, height: 5, borderRadius: 5 / 2, backgroundColor: "#bbb" }}></View>
                            </View>
                            <View>
                                <Text style={{ color: "#B1B5BF" }}>460 Park Ave, New York</Text>
                                <Text style={{ color: "#B1B5BF" }}>541-549 Columbus Ave, New York</Text>
                            </View>
                            <View>
                                <TouchableOpacity
                                    onPress={() => Navigation.push(this.props.componentId, {
                                        component: {
                                            name: 'flex.RiderProfile',
                                            options: {
                                                topBar: {
                                                    drawBehind: false,
                                                    animate: false,
                                                    title: {
                                                        text: 'Rider Profile'
                                                    }
                                                    // visible: false,
                                                    // drawBehind: true,
                                                    // animate: false
                                                }
                                            }
                                        }
                                    })}
                                    style={{ height: 35, width: 35, borderRadius: 35 / 2, backgroundColor: "#00A87E", justifyContent: "center" }} iconLeft dark>
                                    <Icon style={{ fontSize: 17, textAlign: "center", alignItems: "center", color: "white" }} name='checkmark' />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

export default Requests;