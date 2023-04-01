import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.airtable.com/v0/appTjJ62VlXlQygqr/',
  headers: {
    Authorization: 'Bearer keyR8rYGOyxgPY76u',
  },
});

export default instance;
