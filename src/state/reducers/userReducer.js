import { SET_USER_INFO} from '../actions/userActions';
import { SET_CART } from '../actions/userActions';

const initialState = {
  user: {token: null},
  cart: []
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER_INFO: {
      return {
        ...state,
        user: {
          ...state.user,
          ...action.payload,
        },
      };
    }
    case SET_CART: {
      return {
        ...state,
        cart: action.payload
      };
    }
    default:
      return state;
  }
}

export default userReducer;