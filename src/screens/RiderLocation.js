import React, { Component } from 'react';
import {
    View
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
import MapView from 'react-native-maps';
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
        return (
            <View style={styles.container}>
                <MapView style={styles.map} region={this.state.region}
                    onRegionChange={this.onRegionChange}
                    onPress={this.onDragEnd}
                    onLayout={this.onRenderMap}>
                        
                    <Marker draggable image={markerIcon}
                        coordinate={coordinate}
                        centerOffset={{ x: 0, y: -33 }}
                        onDragEnd={this.onDragEnd}
                        style={{ paddingBottom: 100 }} />
                    {/* {this.renderPassengerPosition()}
                    {this.renderDestinationPosition()}
                    {this.renderNearestDriver()}
                    {this.renderNearestDriverRadius()}
                    {this.renderDrivers()}
                    {this.renderRoute()} */}

                </MapView>

                {this.renderSearchBar()}
            </View>
        );
    }
}

export default RiderLocation;
