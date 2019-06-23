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

class Requests extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, padding: 30 }}>
                <View style={{ borderBottomColor: "#ccc", borderBottomWidth: 1, flexDirection: "row", paddingBottom: 18 }} regular>
                    <View style={{ flexDirection: "row" }}>
                        <Text>Manhattan</Text>
                        <Icon style={{ color: "#00A87E" }} type="Ionicons" name="ios-mail" />
                        <Text>Queens</Text>
                        <Text>|</Text>
                        <Text>8.2 miles</Text>
                    </View>
                    <View>
                        <View>
                            <Text>460 Park Ave, New York</Text>
                            <Text>541-549 Columbus Ave, New York</Text>
                        </View>
                        <View>
                            <TouchableOpacity style={{ height: 35, width: 35, borderRadius: 35 / 2, backgroundColor: "#00A87E", justifyContent: "center" }} iconLeft dark>
                                <Icon style={{ fontSize: 17, textAlign: "center", alignItems: "center", color: "white" }} name='checkmark' />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

export default Requests;