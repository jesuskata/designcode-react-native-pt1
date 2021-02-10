// Action Types
import { actionTypes } from './types';

const { USER_DATA } = actionTypes;

export const fetchUserDataStart = () => ({
  type: USER_DATA.FETCH_USER_DATA.START
});

export const fetchUserDataSuccess = (data) => ({
  type: USER_DATA.FETCH_USER_DATA.SUCCESS,
  payload: data
});

export const fetchUserDataFailure = (error) => ({
  type: USER_DATA.FETCH_USER_DATA.FAILURE,
  payload: error
});

export const fetchUserDataAction = () => dispatch => {
  dispatch(fetchUserDataStart());
  const uiFacesURL = 'https://uifaces.co/api?limit=1&emotion[]=happiness&gender[]=male&from_age=32&to_age=36';

  fetch(uiFacesURL, {
    headers: new Headers({
      'X-API-KEY': 'DAF26580-2A714F15-92227584-6E209A52',
    })
  }).then(response => response.json())
    .then(data => dispatch(fetchUserDataSuccess(data)))
    .catch(error => dispatch());
};
