import React from "react";
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Platform,
    PermissionsAndroid,
    Dimensions
} from "react-native";
import Text from '../../config/AppText';
import {
    Item,
    Input,
    InputGroup,
    Icon
} from "native-base";
import styles from "./MapSearchStyles";

const MapSearch = ({ toggleSearchModal, getAddressPredictions, getInputData }) => {
    function handleSearch(key, val) {
        getInputData({
            key,
            value: val
        });
        getAddressPredictions();
    }
    return (
        <View style={styles.searchBox}>
            <View style={{ marginTop: 20, padding: 20 }}>
                <Item style={[{ backgroundColor: "white" }, styles.cardShadow]} regular>
                    <Text style={{ color: "#bbb", paddingLeft: 8 }}>From</Text>
                    <Input
                        style={[styles.mainInput]}
                        placeholderTextColor={"#bbb"}
                        onFocus={() => toggleSearchModal("pickUp")}
                        onChangeText={handleSearch.bind(this, "pickUp")}
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
                        onFocus={() => toggleSearchModal("dropOff")}
                        onChangeText={handleSearch.bind(this, "dropOff")}
                    />
                    <TouchableOpacity>
                        <Icon style={{ color: "#bbb" }} type="Ionicons" name="mic" />
                    </TouchableOpacity>
                </Item>
            </View>
        </View>
    );
}

export default MapSearch;