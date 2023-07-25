const initialState = {
    cityName: ''
}

interface updateCityName {
    type: 'UPDATE_CITY_NAME',
    payload: string
}

type action = updateCityName;

const FilterReducer = (state = initialState, action: action) => {
   switch (action.type) {
    case 'UPDATE_CITY_NAME': {
        return {
            ...state,
            cityName: action.payload
        }
    }
   
    default:
        return state;
   }
}

export default FilterReducer;

export const UpdateCityName = (city: string):updateCityName => {
    return {
        type: 'UPDATE_CITY_NAME',
        payload: city
    }
}