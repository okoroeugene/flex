import React from 'react';
import {
    View,
    TouchableOpacity,
    Image,
    ScrollView
} from 'react-native';
import { Thumbnail, Icon, Item, Button, Input, Card } from 'native-base';
import Text from '../../config/AppText';
import { Navigation } from 'react-native-navigation';
import { goToAuth } from '../../config/Navigation';
import styles from '../../styles';
import ImagePicker from 'react-native-image-crop-picker';

class VehiclePhoto extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isProcessing: false,
            photo: false,
            selectedPhoto: ""
        }
    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.driver.update && nextProps.driver.update != this.props.driver.update) {
            Navigation.push(this.props.componentId, {
                component: {
                    name: 'flex.TakePhoto',
                    options: {
                        topBar: {
                            title: {
                                text: 'Take a Photo'
                            }
                        }
                    }
                }
            })
        }
    }

    doNext() {
        Navigation.push(this.props.componentId, {
            component: {
                name: 'flex.UploadAvatar',
                options: {
                    topBar: {
                        title: {
                            text: 'Upload Avatar'
                        }
                    }
                },
                passProps: {
                    tempData: Object.assign(this.props.tempData, {
                        vehiclePhoto: this.state.selectedPhoto
                    })
                }
            }
        })
    }

    selectPhoto() {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            this.setState({ photo: true, selectedPhoto: image.path })
        });
    }

    beforeSelect() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ alignItems: "center" }}>
                    <View style={{ marginTop: 10 }}>
                        <Text style={styles.textHeader}>Take a photo of your vehicle registration</Text>
                    </View>
                    <View>
                        <Thumbnail
                            style={{ width: 110, height: 110 }}
                            source={require('../../imgs/84936.png')} />
                    </View>
                </View>

                <View style={{ flex: 1, marginTop: 20, alignItems: "center" }}>
                    <Text>Lorem Ipsum dolor suit amnet, et connectiu...</Text>
                </View>
                <View style={{ position: "absolute", bottom: 30, width: "100%", alignSelf: "center" }}>
                    <Button
                        onPress={() => this.selectPhoto()}
                        style={{ backgroundColor: "#00A87E", height: 50, width: "100%" }} block>
                        <Text style={{ color: "white" }}>TAKE A PHOTO</Text>
                    </Button>
                </View>
            </View>
        )
    }

    afterSelect() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ alignItems: "center" }}>
                    <View style={{ marginTop: 10 }}>
                        <Text style={styles.textHeader}>Is this the correct photo to use?</Text>
                    </View>
                    <View>
                        <Thumbnail
                            style={{ width: 110, height: 110 }}
                            source={require('../../imgs/84936.png')} />
                    </View>
                </View>

                <View style={{ flex: 1, marginTop: 20, alignItems: "center" }}>
                    <Image
                        style={{ width: 300, height: 300, borderWidth: 2, borderColor: "#bbb" }}
                        source={{ uri: this.state.selectedPhoto }} />
                </View>
                <View style={{ marginTop: 30 }}>
                    <Button
                        bordered
                        success
                        onPress={() => this.selectPhoto()}
                        style={{ height: 50, width: "100%", borderColor: "#00A87E" }} block>
                        <View>
                            <Text style={{ color: "#00A87E" }}>RETAKE</Text>
                        </View>
                    </Button>
                </View>
                <View style={{ marginTop: 20 }}>
                    <Button
                        onPress={() => this.doNext()}
                        style={{ backgroundColor: "#00A87E", height: 50, width: "100%" }} block>
                        <Text style={{ color: "white" }}>SUBMIT</Text>
                    </Button>
                </View>
            </View>
        )
    }
    render() {
        return (
            <ScrollView contentContainerStyle={styles.container}>
                {
                    this.state.photo ? this.afterSelect() : this.beforeSelect()
                }
            </ScrollView>
        );
    }
}

export default VehiclePhoto;