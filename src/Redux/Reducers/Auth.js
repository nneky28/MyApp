import { LOGIN, LOGOUT } from '../Types';
const intialState = {
  user: null,
  isLoggedin: false,
  route: "splash"
};
const reducer = (state = intialState, action) => {
  switch (action.type) {
    case LOGIN: {
      return {
        ...state,
        user: {},
        isLoggedin: true,
        ...action.payload
      };
    }
    case LOGOUT: {
      return {
        ...state,
        user: {},
        isLoggedin: false,
      };
    }
    default:
      return state;
  }
};
export default reducer;
