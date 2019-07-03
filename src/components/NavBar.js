import React from 'react';
import {
    TouchableOpacity
} from 'react-native';
import { View, Switch, Icon } from 'native-base';
import Text from '../config/AppText';

export default function () {
    return (
        <View style={{ height: 60, backgroundColor: "#ffffff", flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 20 }}>
            {/* <View style={{ justifyContent: "center", width: 50 }}>
                <TouchableOpacity>
                    <Icon type="Ionicons" name="ios-menu" />
                </TouchableOpacity>
            </View>
            <View style={{ justifyContent: "center", borderBottomWidth: 2, width: 50, borderBottomColor: "#00A87E" }}>
                <Icon style={{ position: "relative", left: 15 }} type="Ionicons" name="ios-notifications-outline" />
            </View> */}
            <Text>Hello</Text>
        </View>
    )
}