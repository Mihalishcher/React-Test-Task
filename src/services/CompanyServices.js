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

  checkKey = (key) => {
    return (key === 'name'
      || key === 'thumbnail'
      || key === 'urls'
      || key === 'description'
      || key === 'id');
  };

  reformeEmployees = (chars) => {
    const keys = Object.keys(chars[0]);
    const reformatedArr = [];

    for (let i = 0; i < chars.length; i += 1) {
      const newObj = {};
      keys.forEach((key) => {
        if (this.checkKey(key)) {
          newObj[key] = chars[i][key];
        }
      });
      reformatedArr.push(newObj);
    }
    return reformatedArr;
  };

  checkCharacter = (char) => {
    const noImage = 'image_not_available';
    return (char.description && !char.thumbnail.path.includes(noImage));
  };

  _transformEmployees = (chars) => {
    const numberOfEmployees = 11;
    return this.reformeEmployees(chars.filter(this.checkCharacter).slice(0, numberOfEmployees));
  };
}

export default CompanyServices;
