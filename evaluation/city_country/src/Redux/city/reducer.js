import {ADD_COUNTRY, ADD_CITY, DELETE_CITY, UPDATE_CITY} from "./action";


const initState = {
    country: [],
    city: []
};

export const reducer = (store = initState, {payload, type}) => {
    switch (type) {
        case ADD_COUNTRY:
            return {
                ...store,
                country: [...payload]
            };

        case ADD_CITY:
            console.log("Store", store);
            return {
                ...store,
                city: [...payload]
            };

        case DELETE_CITY:
            return {
                ...store
            };

        case UPDATE_CITY:
            return {
                ...store
            };

        default:
            return store;
    }
}
