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
import { goToAuth, driverProfile } from '../../config/Navigation';
import styles from '../../styles';

class Congratulations extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isProcessing: false
        }
    }

    componentDidMount() {

    }

    navigate() {
        driverProfile();
    }

    render() {
        return (
            <ScrollView contentContainerStyle={styles.container}>
                <View style={{ alignItems: "center", marginTop: 100 }}>
                    <View>
                        <Thumbnail
                            style={{ width: 110, height: 110, borderRadius: 110 / 2 }}
                            source={require('../../imgs/congrats.png')} />
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <Text style={styles.textHeader}>{'Congratulations!\nYou\'re all set now!'}</Text>
                    </View>
                </View>
                <View style={{ position: "absolute", bottom: 30, width: "100%", alignSelf: "center" }}>
                    <Button
                        onPress={() => this.navigate()}
                        style={{ backgroundColor: "#00A87E", height: 50, width: "100%" }} block>
                        <Text style={{ color: "white" }}>DONE</Text>
                    </Button>
                </View>
            </ScrollView>
        );
    }
}

export default Congratulations;