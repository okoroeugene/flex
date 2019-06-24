import { StyleSheet } from 'react-native'


const styles = StyleSheet.create({
    navigator: {
        flex: 1,
        height: 100,
    },
    // map: {
    //     flex: 1,
    // },
    mapContainer: {
        flex: 1,
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    container: {
        flex: 1,
        padding: 30,
        backgroundColor: "#F5F8F8"
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
        fontSize: 13,
        marginLeft: 10
    },
    textBold: {
        fontFamily: "Kastelov - Axiforma Heavy"
    },
    searchBar: {
        flex: 1,
        flexDirection: 'column',
        position: 'absolute',
        zIndex: 999,
        left: 15,
        height: 40,
    },
    cardShadow: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
    }
})


export default styles