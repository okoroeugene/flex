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
    CheckBox,
    Button,
    Icon,
    Toast
} from 'native-base';
import Text from '../config/AppText';
import { Navigation } from 'react-native-navigation';
import { goHome, goToAuth, licenseInformation } from '../config/Navigation';
import AsyncStorage from '@react-native-community/async-storage';
import styles from '../styles';
import constants from '../constants';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isProcessing: false,
            isAuthenticated: false,
            authFailed: false
        }
    }
    componentDidMount() {
        this.props.initializeApp();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.app.hasToken && nextProps.app.hasToken !== this.props.app.hasToken) {
            AsyncStorage.getItem(constants.TOKEN)
                .then(token => {
                    this.props.authorizeUser({
                        token: token
                    })
                });
        }
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
            // alert(nextProps.user.error)
            Toast.show({
                text: nextProps.user.error,
                type: "danger",
                textStyle: {
                    fontFamily: "Sofia Pro Regular"
                }
            })
            this.setState({ isProcessing: false, authFailed: true })
        }
        if (nextProps.app.isInitializedFailure || nextProps.user.error) {
            this.setState({ isProcessing: false, authFailed: true })
        }
    }

    doLogin() {
        this.setState({ isProcessing: true });
        this.props.doLogin({
            email: this.email,
            password: this.password
        })
    }


    render() {
        return (
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                {
                    this.state.authFailed ? <View style={styles.container}>
                        <View style={{ alignItems: "center" }}>
                            <View>
                                <Image source={require('../imgs/hi-res-1.png')} style={{ width: 300, height: 300, resizeMode: "contain" }} />
                            </View>
                        </View>
                        <View style={{ marginTop: -50 }}>
                            <View style={{ flexDirection: "row" }}>
                                <Text style={{ fontWeight: "bold", fontSize: 16, color: "#bbb" }}>LOGIN</Text>
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
                                        autoCapitalize={"none"}
                                        onChangeText={e => this.email = e}
                                        style={styles.mainInput}
                                        placeholder='Email' />
                                </Item>
                                <Item style={styles.inputAfter} regular>
                                    <Input
                                        onChangeText={e => this.password = e}
                                        secureTextEntry={true}
                                        style={styles.mainInput}
                                        placeholder='Password' />
                                </Item>
                                <View style={{ flexDirection: "row", marginTop: 20 }}>
                                    <CheckBox color={"#00A87E"} checked={true} style={{ marginLeft: -8 }} />
                                    <Text style={{ paddingLeft: 30, fontSize: 16, marginTop: 0 }}>Remember me</Text>
                                </View>
                                <View style={{ marginTop: 20 }}>
                                    <Button
                                        disabled={this.state.isProcessing ? true : false}
                                        onPress={() => this.doLogin()}
                                        style={[{ backgroundColor: "#00A87E", height: 50 }, { opacity: this.state.isProcessing ? 0.4 : 1 }]} block>
                                        <Text style={{ color: "white" }}>{this.state.isProcessing ? "Processing..." : "SIGN IN"}</Text>
                                    </Button>
                                </View>
                                <View style={{ alignItems: "center", marginTop: 20 }}>
                                    <Text style={{ color: "#00A87E" }}>Forgot Password</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ flexDirection: "row", marginTop: 80, justifyContent: "space-between" }}>
                            <View style={{ flex: 1, marginTop: 9 }}>
                                <Text style={{ fontSize: 12, color: "#bbb" }}>Login with social media</Text>
                            </View>
                            <View style={{ flex: 0.6, flexDirection: "row", justifyContent: "space-between", alignSelf: "center" }}>
                                <TouchableOpacity style={{ height: 35, width: 35, borderRadius: 35 / 2, backgroundColor: "#3B5998", justifyContent: "center" }} iconLeft dark>
                                    <Icon style={{ fontSize: 17, textAlign: "center", alignItems: "center", color: "white" }} name='logo-facebook' />
                                </TouchableOpacity>
                                <TouchableOpacity style={{ height: 35, width: 35, borderRadius: 35 / 2, backgroundColor: "#1DA1F3", justifyContent: "center" }} iconLeft dark>
                                    <Icon style={{ fontSize: 17, textAlign: "center", alignItems: "center", color: "white" }} name='logo-twitter' />
                                </TouchableOpacity>
                                <TouchableOpacity style={{ height: 35, width: 35, borderRadius: 35 / 2, backgroundColor: "#DD4B39", justifyContent: "center" }} iconLeft dark>
                                    <Icon style={{ fontSize: 17, textAlign: "center", alignItems: "center", color: "white" }} name='logo-googleplus' />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View> : null
                }
            </ScrollView >
        );
    }
}
const mapStateToProps = state => ({
    app: state.app,
    user: state.user,
    driver: state.driver
});

const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login);