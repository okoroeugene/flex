import constants from '../constants';

export default function homeReducer(state = {}, action) {
    switch (action.type) {
        case constants.GET_CURRENT_LOCATION:
            return Object.assign({}, state, {
                location: action.payload
            })

        case constants.GET_INPUT:
            return Object.assign({}, state, {
                inputData: {
                    pickUp: action.payload.key == 'pickUp' ? action.payload.value : undefined,
                    dropOff: action.payload.key == 'dropOff' ? action.payload.value : undefined
                }
            })

        case constants.TOGGLE_SEARCH_RESULT:
            return Object.assign({}, state, {
                resultTypes: action.payload,
                toggle: true
            })
        case constants.UNTOGGLE_SEARCH_RESULT:
            return Object.assign({}, state, {
                toggle: false
            })
        case constants.GET_ADDRESS_PREDICTIONS:
            return Object.assign({}, state, {
                predictions: action.payload
            })
        case constants.GET_SELECTED_ADDRESS:
            return Object.assign({}, state, {
                selectedAddress: action.payload
            })
        default:
            return state;
    }
}

// import ACTION_HANDLERS from './handlers';


// export function homeReducer(state = {}, action) {
//     const handler = ACTION_HANDLERS[action.type];

//     return handler ? handler(state, action) : state;
// }