import { useAxios } from '../hooks/axios.hook';

function useCompanyServices() {
  const API_KEY = '825446dc6e5485732825bdf5f618ca71';
  const { loading, error, request } = useAxios();

  const reformeEmployees = (chars) => {
    return chars.reduce((acc, {
      id, name, thumbnail, urls, description
    }) => {
      return [
        ...acc,
        {
          id, name, thumbnail, urls, description
        }
      ];
    }, []);
  };

  const checkCharacter = (char) => {
    const noImage = 'image_not_available';
    return (char.description && !char.thumbnail.path.includes(noImage));
  };

  const transformEmployees = (chars) => {
    const numberOfEmployees = 11;
    return reformeEmployees(chars.filter(checkCharacter).slice(0, numberOfEmployees));
  };

  async function getAllEmployees() {
    const res = await request('https://gateway.marvel.com:443/v1/public/characters', API_KEY, 100, '-name');
    return transformEmployees(res.data.data.results);
  }

  return { getAllEmployees, error, loading };
}

export default useCompanyServices;
