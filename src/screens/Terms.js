import React from 'react';
import {
    View,
    TouchableOpacity,
    Image,
    ScrollView
} from 'react-native';
import { CheckBox, Button } from 'native-base';
import Text from '../config/AppText';
import { Navigation } from 'react-native-navigation';
import { goToAuth } from '../config/Navigation';

class Terms extends React.Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <ScrollView>
                    <View style={{ flex: 1, padding: 30 }}>
                        <View style={{ alignItems: "center" }}>
                            <Text style={{ fontSize: 14, fontFamily: "Kastelov - Axiforma Heavy" }}>Terms and Conditions</Text>
                        </View>
                        <View>
                            <Text style={{ textAlign: "center" }}>{`Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum\n\nLorem ipsum Lorem ipsum Lorem ipsum `}</Text>
                        </View>
                    </View>

                </ScrollView>
                <View style={{ bottom: 10, padding: 10 }}>
                    <View style={{ flexDirection: "row", marginBottom: 30 }}>
                        <CheckBox color={"#00A87E"} checked={true} style={{ marginLeft: -8 }} />
                        <Text style={{ paddingLeft: 30 }}>I Agree to the Terms and Conditions</Text>
                    </View>
                    <Button
                        onPress={() => Navigation.push(this.props.componentId, {
                            component: {
                                name: 'flex.EditProfile',
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
                        <Text style={{ color: "white" }}>APPLY</Text>
                    </Button>
                </View>
            </View>
        );
    }
}

export default Terms;