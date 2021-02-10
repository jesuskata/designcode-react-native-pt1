// Action Types
import { actionTypes } from '../actions/types';

const userDataInitialState = {
  isLoadingUserData: false,
  data: {
    // eslint-disable-next-line max-len
    photo: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.YdkNhFNLUQ_NN3gZir70pQHaHZ%26pid%3DApi&f=1',
    name: 'User',
    position: 'Default Position'
  },
  error: null
};

const fetchUserDataReducerFn = (state = userDataInitialState, action) => {
  switch (action.type) {
    case actionTypes.USER_DATA.FETCH_USER_DATA.START:
      return {
        ...state,
        isLoadingUserData: true,
      };
    case actionTypes.USER_DATA.FETCH_USER_DATA.SUCCESS:
      return {
        ...state,
        data: action?.payload[0],
        isLoadingUserData: false
      };
    case actionTypes.USER_DATA.FETCH_USER_DATA.FAILURE:
      return {
        ...state,
        isLoadingUserData: false,
        error: action?.payload?.error
      };
    default:
      return state;
  }
};

export default fetchUserDataReducerFn;
