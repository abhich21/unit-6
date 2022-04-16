export const ADD_COUNTRY = "ADD_COUNTRY";
export const ADD_CITY = "ADD_CITY";
export const DELETE_CITY = "DELETE_CITY";
export const UPDATE_CITY = "UPDATE_CITY";


export const addCountry = (payload) => ({type: ADD_COUNTRY, payload});

export const addCity = (payload) => ({type: ADD_CITY, payload});

export const deleteCity = () => ({type: DELETE_CITY});

export const updateCity = () => ({type: UPDATE_CITY});
