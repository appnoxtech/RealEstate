const initialState = {
  newListing: {
    title: '',
    type: '',
    description: '',
    bhk: '',
    furnishedStatus: '',
    images: [],
    location: '',
    area: '',
    price: '',
    propertyOnFloor: '',
    totalFloor: '',
    amenities: '',
    status: '',
    lookingTo: '',
    propertyType: [],
    ownerPhoneNumber: '',
    ownerName: '',
    parking: '',
    userId: '',
  },
};
interface newListingData {
  key:
    | 'title'
    | 'type'
    | 'description'
    | 'bhk'
    | 'furnishedStatus'
    | 'images'
    | 'location'
    | 'area'
    | 'price'
    | 'propertyOnFloor'
    | 'totalFloor'
    | 'amenities'
    | 'status'
    | 'lookingTo'
    | 'propertyType'
    | 'ownerName'
    | 'ownerPhoneNumber'
    | 'parking'
    | 'userId';
  value: string | Array<string>;
}

interface updateNewListing {
  type: 'UPDATE_NEW_LISTING';
  payload: newListingData;
}
interface resetNewListing {
  type: 'RESET_NEW_LISTING';
}
type action = updateNewListing | resetNewListing;

const PostReducer = (state = initialState, action: action) => {
  switch (action.type) {
    case 'UPDATE_NEW_LISTING': {
      return {
        ...state,
        newListing: {
          ...state.newListing,
          [action.payload.key]: action.payload.value,
        },
      };
    }
    case 'RESET_NEW_LISTING': {
      return {
        ...state,
        newListing: initialState.newListing, // Reset newListing to initial empty state
      };
    }

    default:
      return state;
  }
};

export default PostReducer;

export const UpdateNewListing = (data: newListingData): updateNewListing => {
  return {
    type: 'UPDATE_NEW_LISTING',
    payload: data,
  };
};

export const ResetNewListing = (): resetNewListing => {
  return {
    type: 'RESET_NEW_LISTING',
  };
};
