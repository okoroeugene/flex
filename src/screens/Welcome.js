import React from 'react';
import {
    View,
    TouchableOpacity,
    Image,
    ScrollView
} from 'react-native';
import {

} from 'native-base';
import Text from '../config/AppText';
import { Navigation } from 'react-native-navigation';
import { goToAuth } from '../config/Navigation';

class Welcome extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, padding: 30, alignItems: "center" }}>
                <View>
                    <Image source={require('../imgs/hi-res-1.png')} style={{ width: 300, height: 300, resizeMode: "contain" }} />
                </View>
                <View style={{ marginTop: "30%" }}>
                    <Text style={{ textAlign: "center" }}>{`Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum\n\nLorem ipsum Lorem ipsum Lorem ipsum `}</Text>
                </View>
                <View style={{ position: "absolute", bottom: 80 }}>
                    <TouchableOpacity onPress={() => goToAuth()}>
                        <Text style={{ color: "#00A87E" }}>Skip ></Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default Welcome;