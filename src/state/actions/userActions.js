export const SET_USER_INFO = 'user/setUserInfo';
export const SET_CART = 'user/setCart';

export function setUserInfo(userData) {
  return {
    type: SET_USER_INFO,
    payload: userData,
  };
}

export function setCart(list) {
  return {
    type: SET_CART,
    payload: list,
  };
}