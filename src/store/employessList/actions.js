import {
  GET_EMPLOYEES, DATA_LOADING, DATA_LOADED, DATA_ERROR, SORT_BY
} from './types';

export const getEmployees = (data) => ({ type: GET_EMPLOYEES, payload: data });
export const dataLoading = () => ({ type: DATA_LOADING });
export const dataLoaded = () => ({ type: DATA_LOADED });
export const dataError = () => ({ type: DATA_ERROR });
export const sortBy = (sort) => ({ type: SORT_BY, payload: sort });
