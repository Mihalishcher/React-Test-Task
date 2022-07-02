import { useState, useCallback } from 'react';
import axios from 'axios';

export const useAxios = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const request = useCallback(async (url, apiKey, limitChars, sort) => {
    setLoading(true);

    const response = await axios.get(url, {
      params: {
        apikey: apiKey,
        limit: limitChars,
        orderBy: sort
      }
    }).catch((e) => {
      setLoading(false);
      setError(`Error: ${e.message} ${e.code}`);
      throw e;
    });

    setLoading(false);
    return response;
  }, []);

  return { loading, error, request };
};

export default useAxios;
