const initialState = {
  newListing: {
    title: '',
    type: '',
    description: '',
    images: '',
    location: '',
    area: '',
    price: '',
    bedrooms: '',
    bathrooms: '',
    amenities: '',
    status: '',
    lookingTo: '',
    readyToMove: '',
    propertyType: '',
    ownerPhoneNumber: '',
    owner_name: '',
    userId: '',
  },
};
interface newListingData {
  key:
    | 'title'
    | 'type'
    | 'description'
    | 'images'
    | 'location'
    | 'area'
    | 'price'
    | 'bedrooms'
    | 'bathrooms'
    | 'amenities'
    | 'status'
    | 'lookingTo'
    | 'readyToMove'
    | 'propertyType'
    | 'owner_name'
    | 'latitude'
    | 'longitude'
    | 'ownerPhoneNumber'
    | 'userId';
  value: string;
}

interface updateNewListing {
  type: 'UPDATE_NEW_LISTING';
  payload: newListingData;
}

type action = updateNewListing;

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
