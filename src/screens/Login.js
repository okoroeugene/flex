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
import { goHome } from '../config/Navigation';
import styles from '../styles';

class Login extends React.Component {
    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
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
                                    style={styles.mainInput}
                                    placeholder='Email' />
                            </Item>
                            <Item style={styles.inputAfter} regular>
                                <Input
                                    secureTextEntry={true}
                                    style={styles.mainInput}
                                    placeholder='Password' />
                            </Item>
                            <View style={{ flexDirection: "row", marginTop: 20 }}>
                                <CheckBox color={"#00A87E"} checked={true} style={{ marginLeft: -8 }} />
                                <Text style={{ paddingLeft: 30 }}>Remember me</Text>
                            </View>
                            <View style={{ marginTop: 20 }}>
                                <Button
                                    onPress={() => goHome()}
                                    style={{ backgroundColor: "#00A87E", height: 50 }} block>
                                    <Text style={{ color: "white" }}>SIGN IN</Text>
                                </Button>
                            </View>
                            <View style={{ alignItems: "center", marginTop: 20 }}>
                                <Text style={{ color: "#00A87E" }}>Forgot Password</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

export default Login;