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

  // Tham số 3 (option?) - header: object (nếu có truyền thì payload phải là object)
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

// Middleware Token
export const middlewareToken = (req, res, next) => {
  let { token } = req.headers;

  let checkToken = verifyToken(token);
  if (!checkToken) next();
  else {
    console.log(checkToken);
    res
      .status(401)
      .send('Authorized');
  }
}
