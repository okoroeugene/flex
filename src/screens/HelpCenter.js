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

                    <View style={{ flexDirection: "row", marginTop: 20, width: 140, justifyContent: "space-between", alignSelf: "center" }}>
                        <Item style={{ width: "100%" }} regular>
                            <Input placeholder='Enter your search terms' style={{ width: "100%", fontFamily: 'OpenSans-Regular', fontSize: 14 }} />
                            <Button style={[styles.btnDefault, { width: 50, height: "100%" }]} iconRight light>
                                <IonIcon style={{ fontSize: 30, color: "white", alignSelf: "center", paddingLeft: 16 }} name='ios-arrow-round-forward' />
                            </Button>
                        </Item>
                    </View>

                    <View style={{ marginTop: 20 }}>
                        <Card style={{ flexDirection: "row" }}>
                            <Icon
                                style={{ color: "#00A87E" }}
                                type="Ionicons"
                                name="ios-help-circle-outline" />
                            <Text style={{ paddingLeft: 20 }}>Instant Chat Support</Text>
                        </Card>
                    </View>

                    <View style={{ marginTop: 20 }}>
                        <Card style={{ flexDirection: "row" }}>
                            <Icon
                                style={{ color: "#00A87E" }}
                                type="Ionicons"
                                name="ios-alert" />
                            <Text style={{ paddingLeft: 20 }}>File a Report</Text>
                        </Card>
                    </View>
                </View>
            </ScrollView >
        );
    }
}

export default HelpCenter;