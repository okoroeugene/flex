import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions';
import {
    View,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import {
    Button,
    Form,
    Item,
    Input,
    Icon,
    Spinner,
    Card,
    Thumbnail
} from 'native-base';
import Text from '../config/AppText';
import styles from '../styles';
import constants from '../constants';
import { Navigation } from 'react-native-navigation';
import Toast from '../components/Toast';

class CardDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isProcessing: false,
            error: false,
            showToast: false
        };
        this.options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.user.card && nextProps.user.card != this.props.user.card) {
            this.setState({ isProcessing: false });
            Toast({ type: "success", text: 'Successful' })
            setTimeout(() => {
                Navigation.push(this.props.componentId, {
                    component: {
                        name: 'flex.AddPayment',
                        options: {
                            topBar: {
                                title: {
                                    text: 'Add Payment'
                                }
                            }
                        }
                    }
                })
            }, 2000);
        }
    }
    addCard() {
        this.setState({ isProcessing: true })
        if (!this.cardNumber || !this.expiryMonthYear || !this.cvv) {
            this.setState({ isProcessing: false })
            return Toast({ type: 'danger', text: 'Invalid credentials' });
        }
        if (!this.expiryMonthYear.includes("/")) {
            this.setState({ isProcessing: false })
            return Toast({ type: 'danger', text: 'Invalid expiry month and year. Format should look this way 00/00' });
        }
        this.props.addCard({
            cardNumber: this.cardNumber,
            expDate: this.expiryMonthYear,
            cvv: this.cvv,
            cardType: "VISA"
        });
    }

    closeToast = _ => {
        this.setState({
            showToast: false
        });
    };

    updateAmt = (text) => {

    }

    render() {
        return (
            <ScrollView contentContainerStyle={styles.container}>
                <View style={{ flex: 1 }}>
                    <View style={{ padding: 10 }}>
                        <View style={{ paddingTop: 50 }}>
                            <View>
                                <Text style={{ fontSize: 24, textAlign: "center", color: "#00A87E" }}>Payment Details</Text>
                            </View>
                            <View style={{ marginTop: 50 }}>
                                <Form>
                                    <Item>
                                        <Icon active name='ios-card' />
                                        <Input
                                            onChangeText={text => (this.cardNumber = text)}
                                            keyboardType="numeric"
                                            placeholder='Credit Card Number'
                                            style={{ fontFamily: "Sofia Pro Regular" }}
                                        />
                                    </Item>
                                    <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                                        <Item style={{ width: "45%" }}>
                                            <Icon active name='ios-calendar' />
                                            <Input
                                                onChangeText={text => (this.expiryMonthYear = text)}
                                                keyboardType="phone-pad"
                                                placeholder='MM/YY'
                                                style={{ fontFamily: "Sofia Pro Regular" }}
                                            />
                                        </Item>
                                        <Item style={{ width: "45%" }}>
                                            <Input
                                                onChangeText={text => (this.cvv = text)}
                                                keyboardType="numeric"
                                                placeholder='CVC'
                                                style={{ fontFamily: "Sofia Pro Regular" }}
                                            />
                                            <Icon active name='ios-lock' />
                                        </Item>
                                    </View>
                                </Form>
                                <View style={{ flexDirection: "row", marginTop: 15 }}>
                                    <Icon active name='ios-checkmark-circle-outline' style={{ marginTop: 10, color: "#D21F3C" }} />
                                    <Text style={{ fontSize: 15, paddingTop: 10, paddingLeft: 10 }}>
                                        By clicking the button below, I understand that I am purchasing a recurring sevice subject
                                        to Flex Terms of Use and Cancellation Policy and my payment method will be charged befor each transaction.
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ position: "absolute", bottom: 30, width: "100%", alignSelf: "center" }}>
                    <Button
                        disabled={this.state.isProcessing ? true : false}
                        onPress={() => this.addCard()}
                        style={[{ backgroundColor: "#00A87E", height: 50 }, { opacity: this.state.isProcessing ? 0.4 : 1 }]} block>
                        <Text style={{ color: "white" }}>{this.state.isProcessing ? "Processing..." : "ADD CARD"}</Text>
                    </Button>
                </View>
            </ScrollView>
        );
    }
}

const mapStateToProps = state => ({
    payment: state.payment,
    user: state.user
})

const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CardDetails);