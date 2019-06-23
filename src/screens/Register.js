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
    Radio,
    Button
} from 'native-base';
import Text from '../config/AppText';
import { Navigation } from 'react-native-navigation';
import styles from '../styles';

class Register extends React.Component {
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
                            <TouchableOpacity onPress={() => Navigation.push(this.props.componentId, {
                                component: {
                                    name: 'flex.Login',
                                    options: {
                                        topBar: {
                                            visible: false,
                                            drawBehind: true,
                                            animate: false
                                        }
                                    }
                                }
                            })}>
                                <Text style={{ fontSize: 12, marginTop: 4, color: "#00A87E" }}>Login</Text>
                            </TouchableOpacity>
                            <Text style={{ fontWeight: "bold", fontSize: 16, paddingLeft: 20, color: "#bbb" }}>REGISTER</Text>
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
                            <Item style={styles.inputAfter} regular>
                                <Input
                                    secureTextEntry={true}
                                    style={styles.mainInput}
                                    placeholder='Confirm Password' />
                            </Item>
                            <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: 20 }}>
                                <View style={{ flexDirection: "row" }}>
                                    <View>
                                        <Radio
                                            color={"#bbb"}
                                            selectedColor={"#00A87E"}
                                            selected={true}
                                        />
                                    </View>
                                    <Text style={{ fontSize: 12, marginTop: 4, paddingLeft: 5 }}>Driver</Text>
                                </View>
                                <View style={{ flexDirection: "row" }}>
                                    <View>
                                        <Radio
                                            color={"#bbb"}
                                            selectedColor={"#00A87E"}
                                            selected={false}
                                        />
                                    </View>
                                    <Text style={{ fontSize: 12, marginTop: 4, paddingLeft: 5 }}>Rider</Text>
                                </View>
                            </View>
                            <View style={{ marginTop: 20 }}>
                                <Button style={{ backgroundColor: "#00A87E", height: 50 }} block>
                                    <Text style={{ color: "white" }}>SIGN UP</Text>
                                </Button>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

export default Register;