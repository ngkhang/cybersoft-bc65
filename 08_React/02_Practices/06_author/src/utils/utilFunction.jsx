import * as jwtDecode from 'jwt-decode';

export const KEYS = {
  'accessToken': 'accessToken',
  'userLogin': 'userLogin',
}

const getDataTextStorage = (storeName) => {
  const data = localStorage.getItem(storeName);
  return data || null;
};

const getDataJsonStorage = (storeName) => {
  const data = localStorage.getItem(storeName);

  return data ? JSON.parse(data) : null;
  // if (localStorage.getItem(storeName))
  //   return JSON.parse(localStorage.getItem(storeName));

  // return null;
};

const setDataTextStorage = (storeName, data) => {
  localStorage.setItem(storeName, data);
};

const setDataJsonStorage = (storeName, data) => {
  localStorage.setItem(storeName, JSON.stringify(data));
};

function setCookie(name,value,days) {
  var expires = "";
  if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days*24*60*60*1000));
      expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
      var c = ca[i];
      while (c.charAt(0)==' ') c = c.substring(1,c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}
function delCookie(name) {   
  document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

const isTokenExpired = (token) => {
  try {
    const decodedToken = jwtDecode.jwtDecode(token);
    console.log(decodedToken)
    const expirationTime = new Date(decodedToken.exp * 1000); // Convert to milliseconds
    const currentTime = new Date();
    return expirationTime < currentTime;
  } catch (error) {
    // Xử lý lỗi nếu token không hợp lệ
    console.error('Invalid token:', error);
    return true; // Giả sử token hết hạn nếu không giải mã được
  }
}


export {
  getDataTextStorage,
  getDataJsonStorage,
  setDataTextStorage,
  setDataJsonStorage,
  setCookie,
  getCookie,
  delCookie,
  isTokenExpired
};
