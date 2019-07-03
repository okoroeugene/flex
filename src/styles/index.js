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
        ...StyleSheet.absoluteFillObject,
        justifyContent: "flex-end",
        alignItems: "center"
    },
    map: {
        ...StyleSheet.absoluteFillObject
    },
    bubble: {
        flex: 1,
        backgroundColor: "rgba(255,255,255,0.7)",
        paddingHorizontal: 18,
        paddingVertical: 12,
        borderRadius: 20
    },
    latlng: {
        width: 200,
        alignItems: "stretch"
    },
    button: {
        width: 80,
        paddingHorizontal: 12,
        alignItems: "center",
        marginHorizontal: 10
    },
    buttonContainer: {
        flexDirection: "row",
        marginVertical: 20,
        backgroundColor: "transparent"
    },
    container: {
        flexGrow: 1,
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
        fontFamily: 'Sofia Pro Regular',
        fontSize: 16,
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
    },
    inputShadow: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1.2,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
    },
    backgroundImage: {
        resizeMode: "cover",
        flex: 1,
        width: null,
        height: null
    },
    pageLayout: {
        alignItems: "stretch",
        flex: 1
    },
    inputFormStyle: {
        fontFamily: 'Sofia Pro Regular',
        fontSize: 16
    },
    backgroundImageWrapper: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%"
    },
    defaultFont: {
        fontFamily: 'Sofia Pro Regular',
        fontSize: 16
    },
    textHeader: {
        fontFamily: 'Sofia Pro Bold',
        fontSize: 28,
        textAlign: "center"
    }
})


export default styles