import axios from 'axios';

export const BASE_URL = 'http://localhost:8080';

const END_POINT = {
  VIDEO: {
    ROOT: 'video',
    SUBS: {
      GET_VIDEO: '/get-video',
      GET_TYPE: '/get-type',
    }
  }
}

const options = {
  params: {
    maxResults: 50,
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
    // 'token': localStorage.getItem("LOGIN_USER")
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};

export const getVideoAPI = async () => {
  const { data } = await axios.get(`${BASE_URL}/${END_POINT.VIDEO.ROOT}${END_POINT.VIDEO.SUBS.GET_VIDEO}`);
  return data.content;
};

export const getType = async () => {
  const { data } = await axios.get(`${BASE_URL}/video/get-type`);
  return data.content;
};

export const getVideoType = async (typeId) => {
  const { data } = await axios.get(`${BASE_URL}/video/get-video-type/${typeId}`);
  return data.content;
};
