import Axios from 'axios';
import URLs from './URLs';
const getAllSongs = async () => {
  // await delay(2000)
  return Axios.get(URLs.GET_SONGS).then(({data}) => {
    if (data && data.results) {
      return data.results;
    }
    return [];
  });
};
export default {
  getAllSongs,
};
