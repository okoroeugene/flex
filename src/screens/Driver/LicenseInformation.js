import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/index';
import {
    View,
    TouchableOpacity,
    Image,
    ScrollView
} from 'react-native';
import { Thumbnail, Icon, Item, Button, Input, Card, DatePicker } from 'native-base';
import Text from '../../config/AppText';
import { Navigation } from 'react-native-navigation';
import { goToAuth } from '../../config/Navigation';
import styles from '../../styles';

class LicenseInformation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isProcessing: false,
            expDate: new Date(),
            dob: new Date()
        }
        this.setExpDate = this.setExpDate.bind(this);
        this.setDateOfBirth = this.setDateOfBirth.bind(this);
    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {
        // if (nextProps.driver.update && nextProps.driver.update != this.props.driver.update) {

        // }
    }

    setExpDate(newDate) {
        this.setState({ expDate: newDate });
    }

    setDateOfBirth(newDate) {
        this.setState({ dob: newDate });
    }

    updateProfile() {
        let data = {
            licenceNumber: this.licenceNumber,
            expDate: this.state.expDate,
            dob: this.state.dob,
            address: this.address
        }
        Navigation.push(this.props.componentId, {
            component: {
                name: 'flex.VehiclePhoto',
                options: {
                    topBar: {
                        title: {
                            text: 'Vehicle Registration Photo'
                        }
                    }
                },
                passProps: {
                    tempData: data
                }
            }
        })
        // this.props.updateDriverProfile({
        //     licenceNumber: this.licenceNumber,
        //     expDate: this.expDate,
        //     dob: this.dob,
        //     address: this.address
        // })
    }
    render() {
        return (
            <ScrollView contentContainerStyle={styles.container}>
                <View>
                    <View style={{ alignItems: "center" }}>
                        <View style={{ marginTop: 10 }}>
                            <Text style={styles.textHeader}>Enter your driver's License Information</Text>
                        </View>
                        <View>
                            <Thumbnail
                                style={{ width: 110, height: 110 }}
                                source={require('../../imgs/84936.png')} />
                        </View>
                    </View>

                    <View style={{ flex: 1, marginTop: 20 }}>

                        <Item style={[styles.inputBefore, styles.inputShadow]} regular>
                            <Input
                                onChangeText={e => this.licenceNumber = e}
                                placeholder='Drivers license number'
                                placeholderTextColor={"#bbb"}
                                style={styles.mainInput} />
                        </Item>

                        {/* <Item style={[styles.inputShadow]} regular>
                                <Input
                                    onMagicTap={() => alert("rr")}
                                    onChangeText={e => this.expDate = e}
                                    placeholder='Exp. Date'
                                    placeholderTextColor={"#bbb"}
                                    style={styles.mainInput} />
                            </Item> */}
                        <Card style={[{ padding: 4, backgroundColor: "#F5F8F8", borderRadius: 10 }, styles.cardShadow]}>
                            <DatePicker
                                defaultDate={new Date(2018, 4, 4)}
                                minimumDate={new Date(1900, 1, 1)}
                                maximumDate={new Date(2018, 12, 31)}
                                locale={"en"}
                                timeZoneOffsetInMinutes={undefined}
                                modalTransparent={false}
                                animationType={"fade"}
                                androidMode={"default"}
                                placeHolderText="Exp. date"
                                textStyle={{ color: "#6B6B6B", fontFamily: "Sofia Pro Regular" }}
                                placeHolderTextStyle={{ color: "#d3d3d3" }}
                                onDateChange={this.setExpDate}
                                disabled={false}
                            />
                            {/* <Text>
                                {this.state.chosenDate.toString().substr(4, 12)}
                            </Text> */}
                        </Card>

                        <Card style={[{ padding: 4, backgroundColor: "#F5F8F8", borderRadius: 10 }, styles.cardShadow]}>
                            <DatePicker
                                defaultDate={new Date(2018, 4, 4)}
                                minimumDate={new Date(1900, 1, 1)}
                                maximumDate={new Date(2018, 12, 31)}
                                locale={"en"}
                                timeZoneOffsetInMinutes={undefined}
                                modalTransparent={false}
                                animationType={"fade"}
                                androidMode={"default"}
                                placeHolderText="Date of birth"
                                textStyle={{ color: "#6B6B6B", fontFamily: "Sofia Pro Regular" }}
                                placeHolderTextStyle={{ color: "#d3d3d3" }}
                                onDateChange={this.setDateOfBirth}
                                disabled={false}
                            />
                            {/* <Text>
                                {this.state.chosenDate.toString().substr(4, 12)}
                            </Text> */}
                        </Card>

                        {/* <Item style={[styles.inputShadow]} regular>
                            <Input
                                onChangeText={e => this.dob = e}
                                placeholder='Date of birth'
                                placeholderTextColor={"#bbb"}
                                style={styles.mainInput} />
                        </Item> */}

                        <Item style={[styles.inputShadow]} regular>
                            <Input
                                onChangeText={e => this.address = e}
                                placeholder='Address'
                                placeholderTextColor={"#bbb"}
                                style={styles.mainInput} />
                        </Item>
                    </View>
                    <View style={{ marginTop: 30 }}>
                        <Button
                            onPress={() => this.updateProfile()}
                            style={{ backgroundColor: "#00A87E", height: 50, width: "100%" }} block>
                            <Text style={{ color: "white" }}>NEXT</Text>
                        </Button>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const mapStateToProps = state => ({
    user: state.user
});

const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(LicenseInformation);