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
import Text from '../config/AppText';
import haversine from "haversine";
import {
    Item,
    Input,
    Icon
} from "native-base";
import styles from "../styles";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const homePlace = { description: 'Home', geometry: { location: { lat: 48.8152937, lng: 2.4597668 } } };
const workPlace = { description: 'Work', geometry: { location: { lat: 48.8496818, lng: 2.2940881 } } };

// const LATITUDE = 29.95539;
// const LONGITUDE = 78.07513;
const LATITUDE_DELTA = 0.009;
const LONGITUDE_DELTA = 0.009;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;

class RiderLocation extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            latitude: LATITUDE,
            longitude: LONGITUDE,
            routeCoordinates: [],
            distanceTravelled: 0,
            prevLatLng: {},
            coordinate: new AnimatedRegion({
                latitude: LATITUDE,
                longitude: LONGITUDE,
                latitudeDelta: 0,
                longitudeDelta: 0
            })
        };
    }

    componentDidMount() {
        const { coordinate } = this.state;

        this.requestCameraPermission();

        this.watchID = navigator.geolocation.watchPosition(
            position => {
                const { routeCoordinates, distanceTravelled } = this.state;
                const { latitude, longitude } = position.coords;

                const newCoordinate = {
                    latitude,
                    longitude
                };
                console.log({ newCoordinate });

                if (Platform.OS === "android") {
                    if (this.marker) {
                        this.marker._component.animateMarkerToCoordinate(
                            newCoordinate,
                            500
                        );
                    }
                } else {
                    coordinate.timing(newCoordinate).start();
                }

                this.setState({
                    latitude,
                    longitude,
                    routeCoordinates: routeCoordinates.concat([newCoordinate]),
                    distanceTravelled:
                        distanceTravelled + this.calcDistance(newCoordinate),
                    prevLatLng: newCoordinate
                });
            },
            error => console.log(error),
            {
                enableHighAccuracy: true,
                timeout: 20000,
                maximumAge: 1000,
                distanceFilter: 10
            }
        );
    }

    componentWillUnmount() {
        navigator.geolocation.clearWatch(this.watchID);
    }

    getMapRegion = () => ({
        latitude: this.state.latitude,
        longitude: this.state.longitude,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA
    });

    calcDistance = newLatLng => {
        const { prevLatLng } = this.state;
        return haversine(prevLatLng, newLatLng) || 0;
    };

    requestCameraPermission = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.CAMERA,
                {
                    title: "Location Access Permission",
                    buttonNeutral: "Ask Me Later",
                    buttonNegative: "Cancel",
                    buttonPositive: "OK"
                }
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log("You can use the camera");
            } else {
                console.log("Camera permission denied");
            }
        } catch (err) {
            console.warn(err);
        }
    };

    render() {
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
                        <TouchableOpacity>
                            <Icon style={{ color: "#bbb" }} type="Ionicons" name="mic" />
                        </TouchableOpacity>
                    </Item>
                </View>
                {/* <GooglePlacesAutocomplete
                    placeholder='Enter Location'
                    minLength={2}
                    autoFocus={false}
                    returnKeyType={'default'}
                    fetchDetails={true}
                    styles={{
                        textInputContainer: {
                            backgroundColor: 'rgba(0,0,0,0)',
                            borderTopWidth: 0,
                            borderBottomWidth: 0
                        },
                        textInput: {
                            marginLeft: 0,
                            marginRight: 0,
                            height: 38,
                            color: '#5d5d5d',
                            fontSize: 16
                        },
                        predefinedPlacesDescription: {
                            color: '#1faadb'
                        },
                    }}
                    currentLocation={false}
                /> */}

                <MapView
                    style={styles.map}
                    provider={PROVIDER_GOOGLE}
                    showUserLocation
                    followUserLocation
                    loadingEnabled
                    region={this.getMapRegion()}
                >
                    <Polyline coordinates={this.state.routeCoordinates} strokeWidth={5} />
                    <Marker.Animated
                        ref={marker => {
                            this.marker = marker;
                        }}
                        coordinate={this.state.coordinate}
                    />
                </MapView>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={[styles.bubble, styles.button]}>
                        <Text style={styles.bottomBarContent}>
                            {parseFloat(this.state.distanceTravelled).toFixed(2)} km
            </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default RiderLocation;