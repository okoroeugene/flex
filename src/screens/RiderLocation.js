import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Dimensions,
    TouchableOpacity
} from 'react-native';
import {
    Container,
    Icon,
    Button,
    Form,
    Picker,
    Item,
    Input,
    Card
} from 'native-base';
import Text from '../config/AppText';
import MapView, { Marker } from 'react-native-maps';
import styles from '../styles';

const markerIcon = require('../imgs/marker.png')
const redDotIcon = require('../imgs/dot-red.png')
class RiderLocation extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        const height = Dimensions.get('screen').height;
        const width = Dimensions.get('screen').width;
        const searchBarStyle = StyleSheet.flatten([styles.searchBar, {
            top: 80,
            width: width - 30,
            elevation: 5
        }])
        return (
            <View style={styles.mapContainer}>
                <View style={searchBarStyle}>
                    <Item style={[{ backgroundColor: "white" }, styles.cardShadow]} regular>
                        <Text style={{ color: "#bbb", paddingLeft: 8 }}>From</Text>
                        <Input
                            style={[styles.mainInput]}
                            placeholderTextColor={"#bbb"}
                        />
                        <TouchableOpacity>
                            <Icon style={{ color: "#bbb" }} type="Ionicons" name="locate" />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Icon style={{ color: "#bbb" }} type="Ionicons" name="mic" />
                        </TouchableOpacity>
                    </Item>
                    <Item style={[{ backgroundColor: "white", position: "relative", bottom: 10 }, styles.cardShadow]} regular>
                        <Text style={{ color: "#bbb", paddingLeft: 8 }}>To</Text>
                        <Input
                            style={[styles.mainInput]}
                            placeholderTextColor={"#bbb"}
                        />
                        {/* <Icon style={{ color: "#bbb" }} type="Ionicons" name="locate" /> */}
                        <TouchableOpacity>
                            <Icon style={{ color: "#bbb" }} type="Ionicons" name="mic" />
                        </TouchableOpacity>
                    </Item>
                </View>
                <MapView
                    style={styles.map}
                    initialRegion={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                />
                {/* {this.renderSearchBar()} */}
            </View>
        );
    }
}

export default RiderLocation;
