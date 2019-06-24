import React from 'react';
import {
    View,
    TouchableOpacity,
    Image,
    ScrollView
} from 'react-native';
import { Thumbnail, Icon, Item, Button, Input, Card, Left, Right } from 'native-base';
import Text from '../config/AppText';
import { Navigation } from 'react-native-navigation';
import { goToAuth } from '../config/Navigation';
import styles from '../styles';

class Chat extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            messages: []
        }
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: "#F5F8F8" }}>
                <ScrollView>
                    <View style={styles.container}>
                        <Card style={{
                            borderTopRightRadius: 20,
                            borderTopLeftRadius: 20,
                            borderBottomRightRadius: 20,
                            padding: 20,
                            width: "80%"
                        }}>
                            <View style={{ flexDirection: "row" }}>
                                <Text style={[styles.textBold, { color: "#6B6B6B" }]}>Alexis Crowell</Text>
                                <Text style={{ color: "#bbb", fontSize: 12, paddingLeft: 5, marginTop: 3 }}>.Customer Service</Text>
                            </View>
                            <View>
                                <Text style={{ fontSize: 13, color: "#676767" }}>Lorem Ipsum dolor sit amet, ect et etur Lorem Ipsum dolor sit amet, ect et etur...</Text>
                            </View>
                        </Card>
                    </View>
                    {/* <Right>
                        <Card style={{
                            borderTopRightRadius: 20,
                            borderTopLeftRadius: 20,
                            borderBottomRightRadius: 20,
                            padding: 20,
                            width: "80%"
                        }}>
                            <View style={{ flexDirection: "row" }}>
                                <Text style={[styles.textBold, { color: "#6B6B6B" }]}>Alexis Crowell</Text>
                                <Text style={{ color: "#bbb", fontSize: 12, paddingLeft: 5, marginTop: 3 }}>.Customer Service</Text>
                            </View>
                            <View>
                                <Text style={{ fontSize: 13, color: "#676767" }}>Lorem Ipsum dolor sit amet, ect et etur Lorem Ipsum dolor sit amet, ect et etur...</Text>
                            </View>
                        </Card>
                    </Right> */}
                </ScrollView>
                <View style={{ height: 130, flexDirection: "row", justifyContent: "space-between", backgroundColor: "#FBFBFB", alignItems: "center", padding: 10 }}>
                    <View style={{ marginTop: 0 }}>
                        <Thumbnail
                            style={{ width: 40, height: 40, borderRadius: 40 / 2 }}
                            source={require('../imgs/avatar-profile-picture-3.png')} />
                    </View>
                    <View style={{ width: "75%" }}>
                        <Item style={{ borderColor: "#bbb", borderRadius: 40 }} rounded>
                            {/* <Icon style={{ color: "#00A87E" }} type="Ionicons" name="person" /> */}
                            <Input
                                style={styles.mainInput}
                                placeholder='Type a message...' />
                        </Item>
                    </View>
                    <View style={{ marginTop: 12 }}>
                        <Icon style={{ color: "#00A87E" }} type="Ionicons" name="ios-camera" />
                    </View>
                </View>
            </View>
        );
    }
}

export default Chat;