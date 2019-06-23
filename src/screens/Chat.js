import React from 'react';
import {
    View,
    TouchableOpacity,
    Image,
    ScrollView
} from 'react-native';
import { Thumbnail, Icon, Item, Button, Input, Card } from 'native-base';
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
            <View style={styles.container}>
                <ScrollView>
                    <Card style={{
                        borderTopRightRadius: 8,
                        borderTopLeftRadius: 8,
                        borderBottomRightRadius: 8
                    }}>
                        <View>
                            <Text>Alexis Crowell</Text>
                            <Text style={{ color: "#bbb" }}>Customer Service</Text>
                        </View>
                        <View>
                            <Text>Lorem Ipsum dolor sit amet, ect et etur...</Text>
                        </View>
                    </Card>
                </ScrollView>
                <View style={{ height: 40, flexDirection: "row" }}>
                    <View>
                        <Thumbnail
                            style={{ width: 60, height: 60, borderRadius: 60 / 2 }}
                            source={require('../imgs/avatar-profile-picture-3.png')} />
                    </View>
                    <View>
                        <Item style={{ borderColor: "#ffffff", borderRadius: 2 }} rounded>
                            {/* <Icon style={{ color: "#00A87E" }} type="Ionicons" name="person" /> */}
                            <Input
                                style={{
                                    fontFamily: 'Kastelov - Axiforma Regular',
                                    fontSize: 14,
                                    marginLeft: 10
                                }}
                                placeholder='Type a message...' />
                        </Item>
                    </View>
                    <View>
                        <Icon style={{ color: "#00A87E" }} type="Ionicons" name="ios-camera" />
                    </View>
                </View>
            </View>
        );
    }
}

export default Chat;