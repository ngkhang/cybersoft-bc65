import axios from 'axios';

export const BASE_URL = 'http://localhost:8080';

const END_POINT = {
  video: {
    getVideos: 'video/get-videos',
    getTypes: 'video/get-types',
    getVideosPage: 'video/get-videos-page',
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

// export const fetchFromAPI = async (url) => {
//   const { data } = await axios.get(`${BASE_URL}/${url}`, options);
//   return data;
// };

export const getVideos = async () => {
  const { data } = await axios.get(`${BASE_URL}/${END_POINT.video.getVideos}`);
  return data.content;
};

export const getTypes = async () => {
  const { data } = await axios.get(`${BASE_URL}/${END_POINT.video.getTypes}`);
  return data.content;
};

export const getVideosType = async (typeId) => {
  const { data } = await axios.get(`${BASE_URL}/video/get-videos-type/${typeId}`);
  return data.content;
};

export const searchVideosByName = async (videoName) => {
  const { data } = await axios.get(`${BASE_URL}/video/search/${videoName}`);
  return data.content;
}

export const getVideosPage = async (page) => {
  const { data } = await axios.get(`${BASE_URL}/${END_POINT.video.getVideosPage}/${page}`);
  return data.content;
}

// export const loginApi = async (newData) => {
//   const { data } = await axios.post(`${BASE_URL}/auth/login`, newData);
//   return data;
// };

// export const signUpApi = async (newData) => {
//   const { data } = await axios.post(`${BASE_URL}/auth/sign-up`, newData);
//   return data;
// };
