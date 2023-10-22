import { Product, UserListAction } from '../../helpers/types';
import { SET_USER_INFO } from '../actions/userActions';
import { SET_CART } from '../actions/userActions';

interface UserState {
  user: any,
  cart: Product[]
}

const initialState: UserState = {
  user: { token: null },
  cart: []
};

function userReducer(state = initialState, action: UserListAction) {
  switch (action.type) {
    // case SET_USER_INFO: {
    //   return {
    //     ...state,
    //     user: {
    //       ...state.user,
    //       ...action.payload,
    //     },
    //   };
    // }
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