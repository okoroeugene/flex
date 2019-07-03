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
import { Thumbnail, Icon, Item, Button, Input } from 'native-base';
import Text from '../config/AppText';
import { Navigation } from 'react-native-navigation';
import { goToAuth } from '../config/Navigation';
import styles from '../styles';
import ImagePicker from 'react-native-image-crop-picker';

class AddLocation extends React.Component {
    componentDidMount() {
        this.props.fetchDriver(this.props.user.current._id);
    }
    selectPhoto() {
        ImagePicker.openPicker({
            // width: 300,
            // height: 400,
            cropping: true
        }).then(image => {
            this.setState({ photo: true, selectedPhoto: image.path })
        });
    }
    render() {
        return (
            <ScrollView>
                <View style={{ flex: 1, padding: 30 }}>

                    <View style={{ marginTop: 20 }}>
                        <Item style={styles.inputBefore} regular>
                            <Icon style={{ color: "#00A87E" }} type="Ionicons" name="person" />
                            <Input
                                style={styles.mainInput}
                                placeholder='enter location...'
                                placeholderTextColor={"#bbb"}
                            />
                        </Item>
                    </View>

                    <View style={{ marginTop: 30 }}>
                        <Button
                            onPress={() => Navigation.push(this.props.componentId, {
                                component: {
                                    name: 'flex.RiderProfile',
                                    options: {
                                        topBar: {
                                            title: {
                                                text: 'Rider Profile'
                                            }
                                        }
                                    }
                                }
                            })}
                            style={{ backgroundColor: "#00A87E", height: 50, width: "100%" }} block>
                            <Text style={{ color: "white" }}>SAVE CHANGES</Text>
                        </Button>
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

export default connect(mapStateToProps, mapDispatchToProps)(AddLocation);