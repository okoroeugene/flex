import React from 'react';
import {
    View,
    FlatList,
    TouchableOpacity
} from 'react-native';
import { Input, Item, List, Icon, Left, Body, ListItem, Spinner } from 'native-base';
import styles from './SearchResultStyles';
import mainStyles from '../../styles';
import Text from '../../config/AppText';

const SearchResult = ({ inputData, resultTypes, predictions, getInputData, getAddressPredictions, closeToggleModal, searching, error }) => {
    function handleSelectedAddress(placeID) {
        getSelectedAddress(placeID)
    }
    function handleSearch(key, val) {
        getInputData({
            key,
            value: val
        });
        getAddressPredictions();
    }
    return (
        <View style={{ flex: 1 }}>
            <TouchableOpacity
                onPress={() => closeToggleModal()}
                style={{ padding: 10 }}>
                <Icon style={{ color: "#00A87E", fontSize: 30 }} type='Ionicons' name='arrow-round-back' />
            </TouchableOpacity>
            <View style={{ marginTop: 5 }}>
                <Item style={[{ backgroundColor: "white" }, mainStyles.cardShadow]} regular>
                    <Input
                        ref={input => this.pickUpInput = input}
                        style={mainStyles.input}
                        // onChangeText={this.onQueryChange}
                        onChangeText={handleSearch.bind(this, resultTypes)}
                        placeholder={'Select Location'}
                        placeholderTextColor='#9BABB4'
                        autoFocus
                    // value={inputData}
                    />
                    {inputData && inputData.length > 0 && <TouchableOpacity>
                        <Icon style={{ color: "#bbb", fontSize: 40 }} type='Ionicons' name='ios-close' />
                    </TouchableOpacity>}
                </Item>
            </View>

            {searching && <View style={{ marginTop: 30, alignItems: "center" }}>
                <Spinner size='small' />
                <Text>Please wait...</Text>
            </View>}

            {error && !searching && <View style={{ width: "90%", marginTop: 30, alignItems: "center", padding: 20, flexDirection: "row" }}>
                <Icon type='Ionicons' name='ios-information-circle-outline' />
                <Text style={{ paddingLeft: 20 }}>{error}</Text>
            </View>}

            <View style={styles.searchResultsWrapper}>
                <List
                    dataArray={predictions}
                    renderRow={(item) =>
                        <View>
                            <ListItem onPress={() => handleSelectedAddress(item.placeID)} button avatar>
                                <Left style={styles.leftContainer}>
                                    <Icon style={styles.leftIcon} name="pin" />
                                </Left>
                                <Body>
                                    <Text style={styles.primaryText}>{item.primaryText}</Text>
                                    <Text style={styles.secondaryText}>{item.secondaryText}</Text>
                                </Body>
                            </ListItem>
                        </View>
                    }
                />
            </View>
        </View>
    )
}

export default SearchResult;