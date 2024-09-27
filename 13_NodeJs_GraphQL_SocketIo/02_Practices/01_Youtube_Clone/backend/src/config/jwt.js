// Token dùng để xác thực/truyền dữ liệu liên quan đến user
import jwt from 'jsonwebtoken';

// Create token
export const createToken = (data) => {
  // Tham số 1 - payload: string, buffer, object
  let payload = {
    data,
  };

  // Tham số 2 - secret key
  let signature = 'node_43';

  let header = {
    algorithm: 'HS256', // default
    expiresIn: '60 days',
  };

  let token = jwt.sign(payload, signature, header);
  return token;
};

// Verify token
export const verifyToken = (token) => {
  return jwt.verify(token, 'node_43', (error) => error);
};

// Decode token
export const decodeToken = (token) => {
  return jwt.decode(token);
};

// Create token refresh
export const createTokenRef = (data) => {
  let payload = {
    data,
  };

  let signatureRef = 'node_43_ref';

  let header = {
    algorithm: 'HS256', // default
    expiresIn: '7 days',
  };

  return jwt.sign(payload, signatureRef, header);
}

// Verify token refresh
export const verifyTokenRef = (token) => {
  return jwt.verify(token, 'node_43_ref', (error) => error);
};

// Middleware Token
export const middlewareToken = (req, res, next) => {
  let { token } = req.headers;

  let checkToken = verifyToken(token);
  if (checkToken === null) next();
  else {
    console.log(checkToken);
    res
      .status(401)
      .send(checkToken.name);
  }
}
