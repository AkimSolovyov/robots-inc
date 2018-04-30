import * as types from './constants';

export const changeQueryConfig = data => ({
  type: types.CHANGE_QUERY_CONFIG,
  data
});

export const robotsLoadRequest = ({
  sortQuery = 'company',
  sortOrder = 'asc',
  page = 1
} = {}) => ({
  type: types.ROBOTS_LOAD_REQUEST,
  page,
  meta: {
    type: 'api',
    url: `http://localhost:3001/employees?_page=${page}&_sort=${sortQuery}&_order=${sortOrder}`
  }
});

export const sortRobots = ({
  sortQuery = 'company',
  sortOrder = 'asc',
  page = 1
} = {}) => ({
  type: types.ROBOTS_SORT_REQUEST,
  meta: {
    type: 'api',
    url: `http://localhost:3001/employees?_page=${page}&_sort=${sortQuery}&_order=${sortOrder}`
  }
});
