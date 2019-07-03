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
    Card,
    Button
} from 'native-base';
import Text from '../config/AppText';
import { Navigation } from 'react-native-navigation';
import { goToAuth } from '../config/Navigation';
import styles from '../styles';

class AddPayment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visa: "",
            masterCard: "",
            americanExpress: ""
        }
    }
    componentDidMount() {
        this.props.fetchUser(this.props.user.current._id);
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.user.credentials && nextProps.user.credentials != this.props.user.credentials) {
            this.setState({
                visa: nextProps.user.credentials &&
                    nextProps.user.credentials.card &&
                    nextProps.user.credentials.card.filter(e => e.cardType == "VISA").length &&
                    nextProps.user.credentials.card.filter(e => e.cardType == "VISA").reverse()[0].cardNumber,
                masterCard: nextProps.user.credentials &&
                    nextProps.user.credentials.card &&
                    nextProps.user.credentials.card.filter(e => e.cardType == "MASTERCARD").length &&
                    nextProps.user.credentials.card.filter(e => e.cardType == "MASTERCARD").reverse()[0].cardNumber,
                americanExpress: nextProps.user.credentials &&
                    nextProps.user.credentials.card &&
                    nextProps.user.credentials.card.filter(e => e.cardType == "AMERICANEXPRESS").length &&
                    nextProps.user.credentials.card.filter(e => e.cardType == "AMERICANEXPRESS").reverse()[0].cardNumber
            })
        }
    }
    render() {
        return (
            <View style={{ flex: 1, padding: 10 }}>
                <ScrollView style={{ flexGrow: 1 }}>
                    <View>
                        <View>
                            <TouchableOpacity
                                onPress={() => Navigation.push(this.props.componentId, {
                                    component: {
                                        name: 'flex.CardDetails',
                                        options: {
                                            topBar: {
                                                title: {
                                                    text: 'Card Details'
                                                }
                                            },
                                            sideMenu: {
                                                left: {
                                                    width: 100
                                                }
                                            }
                                        }
                                    }
                                })}
                            >
                                <Card style={{ flexDirection: "row", height: 100, alignItems: "center", backgroundColor: "#F5F8F8", borderRadius: 2, justifyContent: "space-between" }}>
                                    <View>
                                        <Image
                                            style={{ height: 60, width: 200, marginLeft: -50, resizeMode: "contain" }}
                                            source={require('../imgs/visa-5-logo-png-transparent.png')} />
                                    </View>
                                    <View style={{ paddingRight: 30 }}>
                                        <Text style={{ fontSize: 20 }}>{`***${this.state.visa && this.state.visa.slice(-5)}` || ""}</Text>
                                    </View>
                                </Card>
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginTop: 10 }}>
                            <TouchableOpacity>
                                <Card style={{ flexDirection: "row", height: 100, alignItems: "center", backgroundColor: "#F5F8F8", borderRadius: 2, justifyContent: "space-between" }}>
                                    <View>
                                        <Image
                                            style={{ height: 60, width: 200, marginLeft: -50, resizeMode: "contain" }}
                                            source={require('../imgs/mastercard_vrt_pos_92px_2x.png')} />
                                    </View>
                                    <View style={{ paddingRight: 30 }}>
                                        {/* <Text>****</Text>
                                <Text>****</Text>
                                <Text>****</Text> */}
                                        <Text style={{ fontSize: 20 }}>{`***${this.state.masterCard && this.state.masterCard.slice(-5)}` || ""}</Text>
                                    </View>
                                </Card>
                            </TouchableOpacity>
                        </View>

                        <View style={{ marginTop: 10 }}>
                            <TouchableOpacity>
                                <Card style={{ flexDirection: "row", height: 100, alignItems: "center", backgroundColor: "#F5F8F8", borderRadius: 2, justifyContent: "space-between" }}>
                                    <View>
                                        <Image
                                            style={{ height: 60, width: 200, marginLeft: -50, resizeMode: "contain" }}
                                            source={require('../imgs/_American_Express-512.png')} />
                                    </View>
                                    <View style={{ paddingRight: 30 }}>
                                        {/* <Text>****</Text>
                                <Text>****</Text>
                                <Text>****</Text> */}
                                        <Text style={{ fontSize: 20 }}>{`***${this.state.americanExpress && this.state.americanExpress.slice(-5)}` || ""}</Text>
                                    </View>
                                </Card>
                            </TouchableOpacity>
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

const mapStateToProps = state => ({
    user: state.user,
    driver: state.driver
});

const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AddPayment);