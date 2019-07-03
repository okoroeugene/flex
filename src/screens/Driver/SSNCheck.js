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

class SSNCheck extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isProcessing: false,
            expDate: new Date(),
            dob: new Date()
        }
    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.driver.update && nextProps.driver.update != this.props.driver.update) {

        }
    }

    setExpDate(newDate) {
        this.setState({ expDate: newDate });
    }

    setDateOfBirth(newDate) {
        this.setState({ dob: newDate });
    }

    updateProfile() {
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
        this.props.updateDriverProfile({
            licenceNumber: this.props.licenceNumber,
            expDate: this.props.expDate,
            dob: this.props.dob,
            address: this.props.address,
            vehiclePhoto: this.props.vehiclePhoto,
            avatarPhoto: this.props.avatarPhoto,
            ssn: this.SSN
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
                        onPress={() => this.updateProfile()}
                        style={{ backgroundColor: "#00A87E", height: 50, width: "100%" }} block>
                        <Text style={{ color: "white" }}>{this.state.isProcessing ? 'Please wait...' : 'COMPLETE'}</Text>
                    </Button>
                </View>
            </ScrollView>
        );
    }
}

const mapStateToProps = state => ({
    user: state.user
});

const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SSNCheck);