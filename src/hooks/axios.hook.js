import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { dataLoading, dataLoaded, dataError } from '../store/employessList/actions';

export const useAxios = () => {
  const dispatch = useDispatch();

  const request = useCallback(async (url, apiKey, limitChars, sort) => {
    dispatch(dataLoading());

    const response = await axios.get(url, {
      params: {
        apikey: apiKey,
        limit: limitChars,
        orderBy: sort
      }
    }).catch((e) => {
      dispatch(dataLoaded());
      dispatch(dataError());
      throw e;
    });

    dispatch(dataLoaded());
    return response;
  }, []);

  return { request };
};

export default useAxios;
