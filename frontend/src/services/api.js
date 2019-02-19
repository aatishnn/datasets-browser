import Axios from 'axios';

export function getDataSet(id) {
  return Axios.get(`/api/datasets/${id}`);
}