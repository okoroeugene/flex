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

class HelpCenter extends React.Component {
    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <View style={{ alignItems: "center" }}>
                        <View>
                            <Thumbnail
                                style={{ width: 110, height: 110, borderRadius: 110 / 2 }}
                                source={require('../imgs/avatar-profile-picture-3.png')} />
                        </View>
                        <View style={{ marginTop: 10 }}>
                            <Text style={{ fontFamily: "Kastelov - Axiforma Heavy", fontSize: 25 }}>Get help from flex</Text>
                        </View>
                    </View>

                    <View style={{ flex: 1, flexDirection: "row", marginTop: 20, justifyContent: "space-between", alignSelf: "center" }}>
                        <Item style={{ width: "100%", borderRadius: 6 }} regular>
                            <Input placeholder='Enter your search terms' style={{ width: "100%", fontFamily: 'Kastelov - Axiforma Regular', fontSize: 14 }} />
                            <Button
                                style={[styles.btnDefault, { width: 60, backgroundColor: "#00A87E", height: "100%", borderTopRightRadius: 6, borderBottomRightRadius: 6 }]} iconRight light>
                                <Text style={{ fontSize: 12, color: "white", alignSelf: "center" }}>Search</Text>
                            </Button>
                        </Item>
                    </View>

                    <TouchableOpacity
                        onPress={() => Navigation.push(this.props.componentId, {
                            component: {
                                name: 'flex.Chat',
                                options: {
                                    topBar: {
                                        visible: false,
                                        drawBehind: true,
                                        animate: false
                                    }
                                }
                            }
                        })}
                        style={{ marginTop: 20 }}>
                        <Card style={{ flexDirection: "row", padding: 15, borderRadius: 6 }}>
                            <Icon
                                style={{ color: "#00A87E" }}
                                type="Ionicons"
                                name="ios-help-circle-outline" />
                            <Text style={{ paddingLeft: 20, marginTop: 5 }}>Instant Chat Support</Text>
                        </Card>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => alert("you clicked!")}
                        style={{ marginTop: 10 }}>
                        <Card style={{ flexDirection: "row", padding: 15, borderRadius: 6 }}>
                            <Icon
                                style={{ color: "#00A87E" }}
                                type="Ionicons"
                                name="ios-alert" />
                            <Text style={{ paddingLeft: 20, marginTop: 5 }}>File a Report</Text>
                        </Card>
                    </TouchableOpacity>
                </View>
            </ScrollView >
        );
    }
}

export default HelpCenter;