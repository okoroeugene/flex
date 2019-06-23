import { StyleSheet } from 'react-native'


const styles = StyleSheet.create({
    navigator: {
        flex: 1,
        height: 100,
    },
    map: {
        flex: 1,
    },
    container: {
        flex: 1,
        padding: 30,
        // position: "relative"
    },
    searchBar: {
        flex: 1,
        flexDirection: 'column',
        position: 'absolute',
        zIndex: 999,
        left: 15,
        height: 40,
    },
    searchInput: {
        flex: 1,
        backgroundColor: 'white',
        borderWidth: 1,
        padding: 20,
        opacity: .9,
    },
    setPickupButton: {
        backgroundColor: 'black',
        color: 'white',
        padding: 10,
        marginTop: 2,
    },
    inputBefore: {
        borderColor: "#00A87E",
        borderRadius: 2
    },
    inputAfter: {
        marginTop: 10,
        borderColor: "#00A87E",
        borderRadius: 2
    },
    mainInput: {
        fontFamily: 'Kastelov - Axiforma Regular',
        fontSize: 14,
        marginLeft: 10
    }
})


export default styles