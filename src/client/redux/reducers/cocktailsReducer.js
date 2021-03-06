import { GET_ALL_COCKTAILS } from '../constant';

const initialState = {
  cocktails: [],
};

const cocktailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_COCKTAILS:
      return {
        ...state,
        ...action?.payload,
      };

    default:
      return state;
  }
};

export default cocktailsReducer;
