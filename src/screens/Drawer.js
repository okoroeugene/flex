import React, { Component, Fragment } from 'react';
import { StyleSheet, View, Modal, TouchableOpacity } from 'react-native';
import {
    Button, Icon
} from 'native-base';
import { Thumbnail } from 'native-base';
import Text from '../config/AppText';
import { Navigation } from 'react-native-navigation';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 55,
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
});

export default class Drawer extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <Fragment>
                <View style={styles.container}>
                    <LinearGradient
                        start={{ x: 0.0, y: 0.25 }} end={{ x: 0.5, y: 1.0 }}
                        locations={[0, 0.5, 0.6]}
                        colors={['#00A87E', '#00A87E', '#00A87E']}
                        style={[{
                            height: "100%",
                            width: "100%",
                            alignItems: "center",
                            justifyContent: "center"
                        }]}>

                    </LinearGradient>
                </View>
                {loading && <Loader loading={loading} text={loadingText} />}
            </Fragment>
        );
    }
}