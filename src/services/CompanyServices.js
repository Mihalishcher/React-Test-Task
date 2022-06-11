import axios from 'axios';

class CompanyServices {
  _API_KEY = '825446dc6e5485732825bdf5f618ca71';

  getResource = (url) => {
    return axios.get(url, {
      params: {
        apikey: this._API_KEY, // eslint-disable-line
        limit: 100,
        orderBy: '-name'
      }
    });
  };

  getAllEmployees = async () => {
    const res = await this.getResource('https://gateway.marvel.com:443/v1/public/characters');
    return this._transformEmployees(res.data.data.results); // eslint-disable-line
  };

  cheakCharacter = (char) => {
    const noImage = 'image_not_available';
    return (char.description && !char.thumbnail.path.includes(noImage));
  };

  _transformEmployees = (chars) => {
    const numberOfEmployees = 12;
    return chars.filter(this.cheakCharacter).slice(0, numberOfEmployees);
  };
}

export default CompanyServices;
