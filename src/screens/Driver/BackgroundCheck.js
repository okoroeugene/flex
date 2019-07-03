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

class BackgroundCheck extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isProcessing: false,
            expDate: new Date(),
            dob: new Date()
        }
        this.updateProfile = this.updateProfile.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.driver.update && nextProps.driver.update != this.props.driver.update) {
            Navigation.push(this.props.componentId, {
                component: {
                    name: 'flex.Congratulations',
                    options: {
                        topBar: {
                            title: {
                                text: 'Congratulations'
                            }
                        }
                    }
                }
            })
        }
        if (nextProps.driver.error && nextProps.driver.error != this.props.driver.error) {
            this.setState({ isProcessing: false })
        }
    }

    updateProfile() {
        this.setState({ isProcessing: true });
        this.props.updateDriverProfile({
            licenceNumber: this.props.tempData.licenceNumber,
            expDate: this.props.tempData.expDate,
            dob: this.props.tempData.dob,
            address: this.props.tempData.address,
            vehicleRegPhoto: this.props.tempData.vehiclePhoto,
            avatarPhoto: this.props.tempData.avatarPhoto,
            ssn: this.SSN,
            user: this.props.user.current._id
        })
    }
    render() {
        return (
            <ScrollView contentContainerStyle={styles.container}>
                <View>
                    <View style={{ alignItems: "center" }}>
                        <View style={{ marginTop: 10 }}>
                            <Text style={styles.textHeader}>Enter your SSN Number for background check</Text>
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
                                onChangeText={e => this.SSN = e}
                                placeholder='Social Security No.'
                                placeholderTextColor={"#bbb"}
                                style={styles.mainInput} />
                        </Item>
                    </View>
                </View>
                <View style={{ position: "absolute", bottom: 30, width: "100%", alignSelf: "center" }}>
                    <Button
                        disabled={this.state.isProcessing ? true : false}
                        onPress={() => this.updateProfile()}
                        style={[{ backgroundColor: "#00A87E", height: 50 }, { opacity: this.state.isProcessing ? 0.4 : 1 }]} block>
                        <Text style={{ color: "white" }}>{this.state.isProcessing ? 'Please wait...' : 'COMPLETE'}</Text>
                    </Button>
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

export default connect(mapStateToProps, mapDispatchToProps)(BackgroundCheck);