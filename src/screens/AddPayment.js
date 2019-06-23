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

class AddPayment extends React.Component {
    render() {
        return (
            <ScrollView>
                <View style={{ flex: 1, padding: 10 }}>
                    <View>
                        <Card style={{ flexDirection: "row", height: 100, alignItems: "center", borderRadius: 5 }}>
                            <View>
                                <Image style={{ height: 60, width: 200, marginLeft: -50, resizeMode: "contain" }} source={require('../imgs/visa-5-logo-png-transparent.png')} />
                            </View>
                            <View style={{ flexDirection: "row" }}>
                                {/* <Text>****</Text>
                                <Text style={{ paddingLeft: 20 }}>****</Text>
                                <Text style={{ paddingLeft: 20 }}>****</Text> */}
                                <Text style={{ paddingLeft: 20 }}>x2585</Text>
                            </View>
                        </Card>
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <Card style={{ flexDirection: "row", height: 100, alignItems: "center", borderRadius: 5 }}>
                            <View>
                                <Image style={{ height: 60, width: "100%" }} source={require('../imgs/visa-5-logo-png-transparent.png')} />
                            </View>
                            <View>
                                {/* <Text>****</Text>
                                <Text>****</Text>
                                <Text>****</Text> */}
                                <Text>x2585</Text>
                            </View>
                        </Card>
                    </View>

                    <View style={{ marginTop: 20 }}>
                        <Card style={{ flexDirection: "row", height: 100, alignItems: "center", borderRadius: 5 }}>
                            <View>
                                <Image style={{ height: 60, width: "100%" }} source={require('../imgs/_American_Express-512.png')} />
                            </View>
                            <View>
                                {/* <Text>****</Text>
                                <Text>****</Text>
                                <Text>****</Text> */}
                                <Text>x2585</Text>
                            </View>
                        </Card>
                    </View>
                </View>
                <View style={{ position: "absolute" }}>
                    <Button
                        onPress={() => Navigation.push(this.props.componentId, {
                            component: {
                                name: 'flex.HelpCenter',
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
            </ScrollView >
        );
    }
}

export default AddPayment;