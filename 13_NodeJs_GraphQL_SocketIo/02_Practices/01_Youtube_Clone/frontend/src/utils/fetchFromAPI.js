import axios from 'axios';

export const BASE_URL = 'http://localhost:8080';
export const BASE_URL_IMG = 'http://localhost:8080/public/images/';

const END_POINT = {
  video: {
    getVideos: 'video/get-videos',
    getTypes: 'video/get-types',
    getVideosPage: 'video/get-videos-page',
    getVideosType: 'video/get-videos-type',
    searchVideosByName: 'video/search',
    getVideoDetail: 'video/get-video-detail',
    uploadVideo: 'video/upload-video',
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
    'token': localStorage.getItem("LOGIN_USER"),
    'Content-Type': 'multipart/form-data', // Config khi muốn formData là object
  },
};

// export const fetchFromAPI = async (url) => {
//   const { data } = await axios.get(`${BASE_URL}/${url}`, options);
//   return data;
// };

export const getVideos = async () => {
  const { data } = await axios.get(`${BASE_URL}/${END_POINT.video.getVideos}`, options);
  return data.content;
};

export const getTypes = async () => {
  const { data } = await axios.get(`${BASE_URL}/${END_POINT.video.getTypes}`, options);
  return data.content;
};

export const getVideosType = async (typeId) => {
  const { data } = await axios.get(`${BASE_URL}/${END_POINT.video.getVideosType}/${typeId}`, options);
  return data.content;
};

export const searchVideosByName = async (videoName) => {
  const { data } = await axios.get(`${BASE_URL}/${END_POINT.searchVideosByName}/${videoName}`, options);
  return data.content;
}

export const getVideosPage = async (page) => {
  const { data } = await axios.get(`${BASE_URL}/${END_POINT.video.getVideosPage}/${page}`, options);
  return data.content;
}

export const getVideoDetail = async (videoId) => {
  const { data } = await axios.get(`${BASE_URL}/${END_POINT.video.getVideoDetail}/${videoId}`, options);

  return data.content;
}

export const loginApi = async (newData) => {
  const { data } = await axios.post(`${BASE_URL}/${END_POINT.user.login}`, newData, options);

  return data;
}

export const signUpApi = async (newData) => {
  const { data } = await axios.post(`${BASE_URL}/${END_POINT.user.signUp}`, newData, options);
  return data;
};

export const loginFacebookAPI = async (newData) => {
  const { data } = await axios.post(`${BASE_URL}/${END_POINT.user.loginFace}`, newData, options);

  return data;
}

export const forgetCheckMailAPI = async (newData) => {
  const { data } = await axios.post(`${BASE_URL}/${END_POINT.user.forgetCheckMail}`, newData, options);

  return data;
}

export const forgetCheckCodeAPI = async (newData) => {
  const { data } = await axios.post(`${BASE_URL}/${END_POINT.user.forgetCheckCode}`, newData, options);

  return data;
}

export const uploadCloudAPI = async (formData) => {
  const { data } = await axios.post(`https://api.cloudinary.com/v1_1/dizcoyjoo/auto/upload`, formData);

  return data;
}

export const uploadVideoAPI = async (formData) => {
  const { data } = await axios.post(`${BASE_URL}/${END_POINT.video.uploadVideo}`, formData, options);

  return data;
}

