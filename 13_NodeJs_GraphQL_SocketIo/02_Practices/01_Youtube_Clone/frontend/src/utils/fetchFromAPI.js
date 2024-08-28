import axios from 'axios';

export const BASE_URL = 'http://localhost:8080';

const END_POINT = {
  video: {
    getVideos: 'video/get-videos',
    getTypes: 'video/get-types',
    getVideosPage: 'video/get-videos-page',
    getVideosType: 'video/get-videos-type',
    searchVideosByName: 'video/search',
    getVideoDetail: 'video/get-video-detail',
  },
  user: {
    login: 'auth/login',
    signUp: 'auth/sign-up',
    loginFace: 'auth/login-face',
    forgetCheckMail: 'auth/forget-check-email',
    forgetCheckCode: 'auth/forget-check-code',
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
  const { data } = await axios.get(`${BASE_URL}/${END_POINT.video.getVideosType}/${typeId}`);
  return data.content;
};

export const searchVideosByName = async (videoName) => {
  const { data } = await axios.get(`${BASE_URL}/${END_POINT.searchVideosByName}/${videoName}`);
  return data.content;
}

export const getVideosPage = async (page) => {
  const { data } = await axios.get(`${BASE_URL}/${END_POINT.video.getVideosPage}/${page}`);
  return data.content;
}

export const getVideoDetail = async (videoId) => {
  const { data } = await axios.get(`${BASE_URL}/${END_POINT.video.getVideoDetail}/${videoId}`);

  return data.content;
}

export const loginApi = async (newData) => {
  const { data } = await axios.post(`${BASE_URL}/${END_POINT.user.login}`, newData);

  return data;
}

export const signUpApi = async (newData) => {
  const { data } = await axios.post(`${BASE_URL}/${END_POINT.user.signUp}`, newData);
  return data;
};

export const loginFacebookAPI = async (newData) => {
  const { data } = await axios.post(`${BASE_URL}/${END_POINT.user.loginFace}`, newData);

  return data;
}

export const forgetCheckMailAPI = async (newData) => {
  const { data } = await axios.post(`${BASE_URL}/${END_POINT.user.forgetCheckMail}`, newData);

  return data;
}

export const forgetCheckCodeAPI = async (newData) => {
  const { data } = await axios.post(`${BASE_URL}/${END_POINT.user.forgetCheckCode}`, newData);

  return data;
}
