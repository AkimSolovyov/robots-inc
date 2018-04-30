import * as types from 'components/Employee/constants';

export default ({ dispatch, getState }) => next => action => {
  if (action.type === types.ROBOTS_LOAD_REQUEST) {
    const { url } = action.meta;
    fetch(url)
      .then(response => response.json())
      .then(employees => {
        dispatch({ ...action, type: types.ROBOTS_LOAD_SUCCESS, employees });
      });
  }
  if (action.type === types.ROBOTS_SORT_REQUEST) {
    const { url } = action.meta;
    fetch(url)
      .then(response => response.json())
      .then(employees => {
        dispatch({
          ...action,
          type: types.ROBOTS_SORT_SUCCESS,
          employees
        });
      });
  }
  return next(action);
};
