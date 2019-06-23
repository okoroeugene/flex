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
import styles from '../styles';

class EditProfile extends React.Component {
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
                            <Text>John Doe</Text>
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
                        <Item style={styles.inputBefore} regular>
                            <Icon style={{ color: "#00A87E" }} type="Ionicons" name="person" />
                            <Input
                                style={styles.mainInput}
                                placeholder='John' />
                        </Item>
                        <Item style={{ marginTop: 10, borderColor: "#00A87E", borderRadius: 2 }} regular>
                            <Icon style={{ color: "#00A87E" }} type="Ionicons" name="person" />
                            <Input
                                style={{
                                    fontFamily: 'Kastelov - Axiforma Regular',
                                    fontSize: 14,
                                    marginLeft: 10
                                }}
                                placeholder='Doe' />
                        </Item>
                        <Item style={{ marginTop: 10, borderColor: "#00A87E", borderRadius: 2 }} regular>
                            <Icon style={{ color: "#00A87E" }} type="Ionicons" name="ios-mail" />
                            <Input
                                style={{
                                    fontFamily: 'Kastelov - Axiforma Regular',
                                    fontSize: 14,
                                    marginLeft: 10
                                }}
                                placeholder='john.doe@gmail.com' />
                        </Item>
                        <Item style={{ marginTop: 10, borderColor: "#00A87E", borderRadius: 2 }} regular>
                            <Icon style={{ color: "#00A87E" }} type="Ionicons" name="ios-call" />
                            <Input
                                style={{
                                    fontFamily: 'Kastelov - Axiforma Regular',
                                    fontSize: 14,
                                    marginLeft: 10
                                }}
                                placeholder='+234 8000 00 83' />
                        </Item>
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
                                    <View style={{ position: "absolute", right: 0 }}>
                                        <Icon style={{ color: "#00A87E", fontSize: 20 }} type="Ionicons" name="ios-remove-circle-outline" />
                                    </View>
                                </View>
                                <View style={{ marginTop: 10, flexDirection: "row" }}>
                                    <View>
                                        <Text>Office</Text>
                                        <Text style={{ color: "#bbb" }}>541-549 Columbus Ave, New York</Text>
                                    </View>
                                    <View style={{ position: "absolute", right: 0 }}>
                                        <Icon style={{ color: "#00A87E", fontSize: 20 }} type="Ionicons" name="ios-remove-circle-outline" />
                                    </View>
                                </View>
                                <View>
                                    <TouchableOpacity style={{ marginTop: 10, flexDirection: "row" }}>
                                        <Icon style={{ color: "#00A87E", fontSize: 20 }} type="Ionicons" name="add" />
                                        <Text style={{ paddingLeft: 10, marginTop: 1 }}>Add Location</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{ marginTop: 30 }}>
                        <Button
                            onPress={() => Navigation.push(this.props.componentId, {
                                component: {
                                    name: 'flex.RiderProfile',
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
                            <Text style={{ color: "white" }}>SAVE CHANGES</Text>
                        </Button>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

export default EditProfile;