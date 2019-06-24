import React from 'react';
import {
    View,
    TouchableOpacity,
    Image,
    ScrollView
} from 'react-native';
import {
    Card,
    Button
} from 'native-base';
import Text from '../config/AppText';
import { Navigation } from 'react-native-navigation';
import { goToAuth } from '../config/Navigation';
import styles from '../styles';

class AddPayment extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, padding: 10 }}>
                <ScrollView style={{ flexGrow: 1 }}>
                    <View>
                        <View>
                            <Card style={[{
                                flexDirection: "row",
                                height: 100, alignItems: "center",
                                borderRadius: 3,
                                justifyContent: "space-between"
                            }]}>
                                <View>
                                    <Image
                                        style={{ height: 60, width: 200, marginLeft: -50, resizeMode: "contain" }}
                                        source={require('../imgs/visa-5-logo-png-transparent.png')} />
                                </View>
                                <View style={{ paddingRight: 30 }}>
                                    {/* <Text>****</Text>
                                <Text style={{ paddingLeft: 20 }}>****</Text>
                                <Text style={{ paddingLeft: 20 }}>****</Text> */}
                                    <Text style={{ fontSize: 16 }}>x2585</Text>
                                </View>
                            </Card>
                        </View>
                        <View style={{ marginTop: 10 }}>
                            <Card style={{ flexDirection: "row", height: 100, alignItems: "center", borderRadius: 5, justifyContent: "space-between" }}>
                                <View>
                                    <Image
                                        style={{ height: 60, width: 200, marginLeft: -50, resizeMode: "contain" }}
                                        source={require('../imgs/mastercard_vrt_pos_92px_2x.png')} />
                                </View>
                                <View style={{ paddingRight: 30 }}>
                                    {/* <Text>****</Text>
                                <Text>****</Text>
                                <Text>****</Text> */}
                                    <Text style={{ fontSize: 16 }}>x2585</Text>
                                </View>
                            </Card>
                        </View>

                        <View style={{ marginTop: 10 }}>
                            <Card style={{ flexDirection: "row", height: 100, alignItems: "center", borderRadius: 5, justifyContent: "space-between" }}>
                                <View>
                                    <Image
                                        style={{ height: 60, width: 200, marginLeft: -50, resizeMode: "contain" }}
                                        source={require('../imgs/_American_Express-512.png')} />
                                </View>
                                <View style={{ paddingRight: 30 }}>
                                    {/* <Text>****</Text>
                                <Text>****</Text>
                                <Text>****</Text> */}
                                    <Text style={{ fontSize: 16 }}>x2585</Text>
                                </View>
                            </Card>
                        </View>
                    </View>
                </ScrollView>
                <View>
                    <Button
                        onPress={() => Navigation.push(this.props.componentId, {
                            component: {
                                name: 'flex.RiderLocation',
                                options: {
                                    topBar: {
                                        visible: false,
                                        drawBehind: true,
                                        animate: false
                                    }
                                }
                            }
                        })}
                        style={{ backgroundColor: "#00A87E", height: 50 }} block>
                        <Text style={{ color: "white" }}>APPLY</Text>
                    </Button>
                </View>
            </View >
        );
    }
}

export default AddPayment;