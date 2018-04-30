import { combineReducers } from 'redux';
import * as types from './constants';

const initialState = {
  employees: [],
  currentPage: 0,
  isLoading: false,
  queryConfig: {
    sortQuery: 'company',
    sortOrder: 'asc',
    page: 1
  }
};

export default combineReducers({
  employees(state = initialState.employees, action) {
    switch (action.type) {
      case types.ROBOTS_LOAD_SUCCESS:
        return [...state, ...action.employees];
      case types.ROBOTS_SORT_SUCCESS:
        return action.employees;
      case types.ROBOTS_SORT_REQUEST:
      case types.ROBOTS_LOAD_FAILURE:
        return [];
      default:
        return state;
    }
  },
  currentPage(state = initialState.currentPage, action) {
    switch (action.type) {
      case types.ROBOTS_LOAD_SUCCESS:
        return state + 1;
      case types.ROBOTS_LOAD_FAILURE:
        return 1;
      default:
        return state;
    }
  },
  isLoading(state = initialState.isLoading, action) {
    switch (action.type) {
      case types.ROBOTS_LOAD_REQUEST:
        return true;
      case types.ROBOTS_LOAD_SUCCESS:
      case types.ROBOTS_LOAD_FAILURE:
        return false;
      default:
        return state;
    }
  },
  queryConfig(state = initialState.queryConfig, action) {
    switch (action.type) {
      case types.CHANGE_QUERY_CONFIG:
        return {
          ...state,
          ...action.data
        };

      default:
        return state;
    }
  }
});
