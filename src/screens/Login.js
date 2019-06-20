import React from 'react';
import {
    View,
    TouchableOpacity,
    Image,
    ScrollView
} from 'react-native';
import {
    Content,
    Item,
    Input,
    CheckBox,
    Button
} from 'native-base';
import Text from '../config/AppText';
import { Navigation } from 'react-native-navigation';

class Login extends React.Component {
    render() {
        return (
            <ScrollView>
                <View style={{ flex: 1, padding: 30, marginTop: "1%" }}>
                    <View style={{ alignItems: "center" }}>
                        <View>
                            <Image source={require('../imgs/hi-res-1.png')} style={{ width: 300, height: 300, resizeMode: "contain" }} />
                        </View>
                    </View>
                    <View style={{ marginTop: -50 }}>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={{ fontWeight: "bold", fontSize: 16 }}>LOGIN</Text>
                            <TouchableOpacity onPress={() => Navigation.push(this.props.componentId, {
                                component: {
                                    name: 'flex.Register',
                                    options: {
                                        topBar: {
                                            visible: false,
                                            drawBehind: true,
                                            animate: false
                                        }
                                    }
                                }
                            })}>
                                <Text style={{ paddingLeft: 20, fontSize: 12, marginTop: 3, color: "#00A87E" }}>Register</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginTop: 10 }}>
                            <Item style={{ borderColor: "#00A87E", borderRadius: 2 }} regular>
                                <Input
                                    style={{
                                        fontFamily: 'Kastelov - Axiforma Regular',
                                        fontSize: 14,
                                        marginLeft: 10
                                    }}
                                    placeholder='Email' />
                            </Item>
                            <Item style={{ marginTop: 10, borderColor: "#00A87E", borderRadius: 2 }} regular>
                                <Input
                                    secureTextEntry={true}
                                    style={{
                                        fontFamily: 'Kastelov - Axiforma Regular',
                                        fontSize: 14,
                                        marginLeft: 10
                                    }}
                                    placeholder='Password' />
                            </Item>
                            <View style={{ flexDirection: "row", marginTop: 20 }}>
                                <CheckBox color={"#00A87E"} checked={true} style={{ marginLeft: -8 }} />
                                <Text style={{ paddingLeft: 30 }}>Remember me</Text>
                            </View>
                            <View style={{ marginTop: 20 }}>
                                <Button style={{ backgroundColor: "#00A87E", height: 50 }} block>
                                    <Text style={{ color: "white" }}>SIGN IN</Text>
                                </Button>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

export default Login;