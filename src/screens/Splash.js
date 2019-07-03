import React, { Component } from "react";
// import { connect } from "react-redux";
import { View, StyleSheet, AsyncStorage, Platform, Text } from "react-native";
import { Navigation } from "react-native-navigation";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from "../actions";
import Background from "./Background";
import constants from '../constants';
import { goHome, goToAuth } from "../config/Navigation";

const styles = StyleSheet.create({
    activity: {
        alignSelf: "center"
    },
    text1: {
        color: "white",
        fontSize: 50,
        fontFamily: 'Poppins-Bold'
    },
    text2: {
        color: "red",
        fontSize: 50,
        fontFamily: 'Montserrat-Bold'
    },
    textContainer: {
        flexDirection: 'row',
        alignSelf: "center",
    }
});

const backgroundImage = "../imgs/FLEX_logo_dev_2-04-1.jpg";
class Splash extends Component {
    constructor(props) {
        super(props);
    }

    // componentDidMount() {
    //     setTimeout(() => this.props.initializeApp(), 2000)
    // }

    // componentWillReceiveProps(nextProps) {
    //     if (nextProps.app.hasToken && nextProps.app.hasToken !== this.props.app.hasToken) {
    //         AsyncStorage.getItem(constants.TOKEN)
    //             .then(token => {
    //                 this.props.authorizeUser({
    //                     token: token
    //                 })
    //             });
    //     }
    //     if (nextProps.user.isAuthenticated && nextProps.user.isAuthenticated != this.props.user.isAuthenticated) {
    //         this.startHome();
    //         // welcome();
    //     }
    //     if (nextProps.app.isInitializedFailure || nextProps.user.error) {
    //         this.startLogin();
    //     }
    // }

    startHome() {
        goHome();
    }

    startLogin() {
        goToAuth();
    }

    render() {
        return (
            <Background img={require(backgroundImage)}>
                {/* <ActivityIndicator size="large" style={styles.activity} />
                <View style={styles.textContainer}>
                    <Text style={styles.text1}>try</Text>
                    <Text style={styles.text2}>moi</Text>
                </View> */}
            </Background>
        );
    }
}

const mapStateToProps = state => ({
    app: state.app,
    user: state.user
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(actionCreators, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Splash);
