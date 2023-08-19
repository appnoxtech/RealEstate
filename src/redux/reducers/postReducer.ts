const initialNewListingData = {
  title: '',
  type: 'Residential-property',
  description: '',
  bhk: '1BHK',
  furnishedStatus: 'unfurnished',
  images: [],
  city: '',
  state: '',
  area: '',
  price: '',
  propertyOnFloor: '',
  totalFloor: '',
  amenities: '',
  status: '',
  lookingTo: 'Sell',
  propertyType: [],
  ownerPhoneNumber: '',
  ownerName: '',
  parking: '',
  userId: '',
};
const initialState = {
  newListing: {...initialNewListingData},
};
interface newListingData {
  key:
    | 'title'
    | 'type'
    | 'description'
    | 'bhk'
    | 'furnishedStatus'
    | 'images'
    | 'city'
    | 'state'
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

interface updatePostProperty {
  type: 'UPDATE_POST_PROPERTY';
  payload: any;
}
interface deletePostProperty {
  type: 'DELETE_POST_PROPERTY';
  payload: any;
}
type action =
  | updateNewListing
  | resetNewListing
  | updatePostProperty
  | deletePostProperty;

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
        newListing: {
          ...initialNewListingData,
        },
      };
    }

    case 'UPDATE_POST_PROPERTY': {
      return {
        ...state,
        newListing: {
          ...action.payload,
        },
      };
    }

    case 'DELETE_POST_PROPERTY': {
      return {
        ...state,
        newListing: {
          ...action.payload,
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

export const ResetNewListing = (): resetNewListing => {
  return {
    type: 'RESET_NEW_LISTING',
  };
};

export const UpdatePostProperty = (data: any) => {
  return {
    type: 'UPDATE_POST_PROPERTY',
    payload: data,
  };
};

export const DeletePostProperty = (data: any) => {
  return {
    type: 'DELETE_POST_PROPERTY',
    payload: data,
  };
};
