import React from "react";
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Platform,
    PermissionsAndroid,
    Dimensions
} from "react-native";
import MapView, {
    Marker,
    AnimatedRegion,
    Polyline,
    PROVIDER_GOOGLE
} from "react-native-maps";
import Text from '../../config/AppText';
import {
    Item,
    Input,
    InputGroup,
    Icon
} from "native-base";
import styles from "./MapContainerStyles";

const LATITUDE_DELTA = 0.009;
const LONGITUDE_DELTA = 0.009;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const MapContainer = ({ region, routeCoordinates, coordinate }) => {
    let isMapReady = false;
    function onMapLayout() {
        isMapReady = true;
    }
    return (
        <View style={styles.mapContainer}>
            <MapView
                style={styles.map}
                provider={PROVIDER_GOOGLE}
                showUserLocation
                followUserLocation
                loadingEnabled
                // onRegionChange
                region={region}
            >
                {/* {isMapReady ? alert('sss') : null} */}
                <Polyline coordinates={routeCoordinates} strokeWidth={5} />
                <Marker.Animated
                    ref={marker => {
                        this.marker = marker;
                    }}
                    coordinate={coordinate}
                />

            </MapView>

            <View style={styles.searchBox}>
                <View style={{ marginTop: 20, padding: 20 }}>
                    <Item style={[{ backgroundColor: "white" }, styles.cardShadow]} regular>
                        <Text style={{ color: "#bbb", paddingLeft: 8 }}>From</Text>
                        <Input
                            style={[styles.mainInput]}
                            placeholderTextColor={"#bbb"}
                            onFocus={() => this.toggleSearchModal()}
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
                        <TouchableOpacity>
                            <Icon style={{ color: "#bbb" }} type="Ionicons" name="mic" />
                        </TouchableOpacity>
                    </Item>
                </View>
            </View>
            {/* 
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={[styles.bubble, styles.button]}>
                    <Text style={styles.bottomBarContent}>
                        {parseFloat(this.state.distanceTravelled).toFixed(2)} km
            </Text>
                </TouchableOpacity>
            </View> */}
        </View>
    );
}

export default MapContainer;