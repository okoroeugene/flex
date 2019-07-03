import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/index';
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
    Button,
    Toast
} from 'native-base';
import Text from '../config/AppText';
import { Navigation } from 'react-native-navigation';
import styles from '../styles';
import { goHome, licenseInformation } from '../config/Navigation';
import constants from '../constants';

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isProcessing: false,
            selectedType: ""
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.user.isAuthenticated && nextProps.user.isAuthenticated != this.props.user.isAuthenticated) {
            // goHome();
            this.props.fetchDriver(nextProps.user.current._id);
        }
        if (nextProps.driver.credentials && nextProps.driver.credentials != this.props.driver.credentials) {
            goHome();
        }
        if (nextProps.driver.isLoaded && !nextProps.driver.credentials) {
            licenseInformation();
        }

        if (nextProps.user.error && nextProps.user.error !== this.props.user.error) {
            Toast.show({
                text: nextProps.user.error,
                type: "danger",
                textStyle: {
                    fontFamily: "Sofia Pro Regular"
                }
            })
            this.setState({ isProcessing: false })
        }
    }
    doRegister() {
        this.setState({ isProcessing: true });
        if (this.password != this.rePassword) {
            Toast.show({
                text: 'Password and rePassword does not match',
                type: "danger",
                textStyle: {
                    fontFamily: "Sofia Pro Regular"
                }
            })
            this.setState({ isProcessing: false })
        }
        this.props.doRegister({
            email: this.email,
            password: this.password,
            firstName: this.firstName,
            lastName: this.lastName,
            phone: this.phone,
            userType: this.state.selectedType
        })
    }
    render() {
        return (
            <ScrollView contentContainerStyle={styles.container}>
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
                                autoCapitalize={"none"}
                                onChangeText={e => this.email = e}
                                style={styles.mainInput}
                                placeholder='Email' />
                        </Item>
                        <Item style={styles.inputAfter} regular>
                            <Input
                                autoCapitalize={"none"}
                                onChangeText={e => this.firstName = e}
                                style={styles.mainInput}
                                placeholder='Firstname' />
                        </Item>
                        <Item style={styles.inputAfter} regular>
                            <Input
                                autoCapitalize={"none"}
                                onChangeText={e => this.lastName = e}
                                style={styles.mainInput}
                                placeholder='Lastname' />
                        </Item>
                        <Item style={styles.inputAfter} regular>
                            <Input
                                autoCapitalize={"none"}
                                onChangeText={e => this.phone = e}
                                style={styles.mainInput}
                                placeholder='Phone' />
                        </Item>
                        <Item style={styles.inputAfter} regular>
                            <Input
                                onChangeText={e => this.password = e}
                                secureTextEntry={true}
                                style={styles.mainInput}
                                placeholder='Password' />
                        </Item>
                        <Item style={styles.inputAfter} regular>
                            <Input
                                onChangeText={e => this.rePassword = e}
                                secureTextEntry={true}
                                style={styles.mainInput}
                                placeholder='Confirm Password' />
                        </Item>
                        <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: 20 }}>
                            <View style={{ flexDirection: "row" }}>
                                <View>
                                    <Radio
                                        onPress={() => this.setState({ selectedType: constants.USERTYPE.DRIVER })}
                                        color={"#bbb"}
                                        selectedColor={"#00A87E"}
                                        selected={this.state.selectedType == constants.USERTYPE.DRIVER ? true : false}
                                    />
                                </View>
                                <Text style={{ fontSize: 16, marginTop: 0, paddingLeft: 5 }}>Driver</Text>
                            </View>
                            <View style={{ flexDirection: "row" }}>
                                <View>
                                    <Radio
                                        onPress={() => this.setState({ selectedType: constants.USERTYPE.RIDER })}
                                        color={"#bbb"}
                                        selectedColor={"#00A87E"}
                                        selected={false}
                                        selected={this.state.selectedType == constants.USERTYPE.RIDER ? true : false}
                                    />
                                </View>
                                <Text style={{ fontSize: 16, marginTop: 0, paddingLeft: 5 }}>Rider</Text>
                            </View>
                        </View>
                        <View style={{ marginTop: 20 }}>
                            <Button
                                disabled={this.state.isProcessing ? true : false}
                                onPress={() => this.doRegister()}
                                style={[{ backgroundColor: "#00A87E", height: 50 }, { opacity: this.state.isProcessing ? 0.4 : 1 }]} block>
                                <Text style={{ color: "white" }}>{this.state.isProcessing ? "Processing..." : "SIGN UP"}</Text>
                            </Button>
                        </View>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const mapStateToProps = state => ({
    user: state.user,
    driver: state.driver
});

const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Register);