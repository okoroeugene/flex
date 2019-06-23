import React from 'react';
import {
    View,
    TouchableOpacity,
    Image,
    ScrollView
} from 'react-native';
import { Thumbnail, Icon, Item, Button, Input } from 'native-base';
import Text from '../config/AppText';
import { Navigation } from 'react-native-navigation';
import { goToAuth } from '../config/Navigation';

class RiderProfile extends React.Component {
    render() {
        return (
            <ScrollView>
                <View style={{ flex: 1, padding: 30 }}>
                    <View style={{ alignItems: "center" }}>
                        <View>
                            <Thumbnail
                                style={{ width: 110, height: 110, borderRadius: 110 / 2 }}
                                source={require('../imgs/avatar-profile-picture-3.png')} />
                        </View>
                        <View style={{ marginTop: 10 }}>
                            <Text style={{ fontFamily: "Kastelov - Axiforma Heavy", fontSize: 16 }}>John Doe</Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: "row", marginTop: 20, width: 140, justifyContent: "space-between", alignSelf: "center" }}>
                        <TouchableOpacity style={{ height: 35, width: 35, borderRadius: 35 / 2, backgroundColor: "#3B5998", justifyContent: "center" }} iconLeft dark>
                            <Icon style={{ fontSize: 17, textAlign: "center", alignItems: "center", color: "white" }} name='logo-facebook' />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ height: 35, width: 35, borderRadius: 35 / 2, backgroundColor: "#1DA1F3", justifyContent: "center" }} iconLeft dark>
                            <Icon style={{ fontSize: 17, textAlign: "center", alignItems: "center", color: "white" }} name='logo-twitter' />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ height: 35, width: 35, borderRadius: 35 / 2, backgroundColor: "#DD4B39", justifyContent: "center" }} iconLeft dark>
                            <Icon style={{ fontSize: 17, textAlign: "center", alignItems: "center", color: "white" }} name='logo-googleplus' />
                        </TouchableOpacity>
                    </View>

                    <View style={{ marginTop: 20 }}>
                        <View style={{ borderBottomColor: "#ccc", borderBottomWidth: 1, flexDirection: "row", paddingBottom: 18 }} regular>
                            <Icon style={{ color: "#00A87E" }} type="Ionicons" name="ios-mail" />
                            <Text style={{ paddingLeft: 30, marginTop: 7 }}>john.doe@gmail.com</Text>
                        </View>

                        <View style={{ marginTop: 20, borderBottomColor: "#ccc", borderBottomWidth: 1, flexDirection: "row", paddingBottom: 18 }} regular>
                            <Icon style={{ color: "#00A87E" }} type="Ionicons" name="ios-call" />
                            <Text style={{ paddingLeft: 30, marginTop: 7 }}>+234 593000 000</Text>
                        </View>
                    </View>

                    <View style={{ flex: 1, marginTop: 20 }}>
                        <View style={{ flexDirection: "row", flex: 1 }}>
                            <View>
                                <Icon style={{ color: "#00A87E" }} type="Ionicons" name="ios-pin" />
                            </View>
                            <View style={{ paddingLeft: 20, flex: 1 }}>
                                <View style={{ flexDirection: "row" }}>
                                    <View>
                                        <Text>Home</Text>
                                        <Text style={{ color: "#bbb" }}>460 Park Ave, New York</Text>
                                    </View>
                                </View>
                                <View style={{ marginTop: 15, flexDirection: "row" }}>
                                    <View>
                                        <Text>Office</Text>
                                        <Text style={{ color: "#bbb" }}>541-549 Columbus Ave, New York</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{ marginTop: 30 }}>
                        <Button
                            bordered
                            success
                            onPress={() => Navigation.push(this.props.componentId, {
                                component: {
                                    name: 'flex.Requests',
                                    options: {
                                        topBar: {
                                            visible: false,
                                            drawBehind: true,
                                            animate: false
                                        }
                                    }
                                }
                            })}
                            style={{ height: 50, width: "100%", borderColor: "#00A87E" }} block>
                            <Text style={{ color: "white", color: "#00A87E" }}>CHANGE PASSWORD</Text>
                        </Button>
                    </View>

                    <View style={{ marginTop: 20 }}>
                        <Button
                            onPress={() => Navigation.push(this.props.componentId, {
                                component: {
                                    name: 'flex.DriverProfile',
                                    options: {
                                        topBar: {
                                            visible: false,
                                            drawBehind: true,
                                            animate: false
                                        }
                                    }
                                }
                            })}
                            style={{ backgroundColor: "#00A87E", height: 50, width: "100%" }} block>
                            <Text style={{ color: "white" }}>EDIT PROFILE</Text>
                        </Button>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

export default RiderProfile;