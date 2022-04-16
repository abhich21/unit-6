import { ADD_CITY, ADD_COUNTRY, DELETE_CITY, UPDATE_CITY } from "./action"

const initState = {
    country: [],
    city:[]
}

export const reducer = (store = initState, { payload, type }) => {
    switch (type) {
        case ADD_COUNTRY:
            return {
                ...store,
                countries:[...payload]
            }
        case ADD_CITY:
            return {
                ...store,
                cities:[...payload]
            }
        case DELETE_CITY:
            return {
                ...store
            }
        case UPDATE_CITY:
            return {
                ...store
            }
        default:
            return store
    }
}