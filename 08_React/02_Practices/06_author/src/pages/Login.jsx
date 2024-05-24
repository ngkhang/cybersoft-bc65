import { useFormik } from "formik";
import { KEYS, setDataTextStorage } from "../utils/utilFunction";
import { httpStore } from '../utils/config';
import api from '../utils/api';
import { useDispatch } from 'react-redux';
import { loginAction, loginActionApi } from '../redux/reducers/userReducer';

const Login = () => {
  const dispatch = useDispatch();

  const formLogin = useFormik({
    initialValues: {
      email: "tuankhanhbf@gmail.vn",
      password: "Khanh1910!",
    },
    onSubmit: async (values) => {
      // Cách 1: Lấy DL từ api gửi lên redux - actionCreator: action = {type, payload};
      // const res = await httpStore.post(api.USER_SIGNIN, values)
      // const token = res.data.content[KEYS.accessToken];
      // setDataTextStorage(KEYS.accessToken, token);
      // const action = loginAction(res.data.content);
      // dispatch(action);

      // Cách 2: Sử dụng middleware - actionThunk: action = (dispatch) => {}
      const actionThunk = loginActionApi(values);
      dispatch(actionThunk);
    },
  });

  return (
    <div className="container">
      <h3 className="mb-2 text-center">Login</h3>
      <form onSubmit={formLogin.handleSubmit} className="container w-50">
        <div className="row mb-3">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            onInput={formLogin.handleChange}
            className="form-control"
          />
        </div>
        <div className="row mb-4">
          <label className="form-label" htmlFor="password">
            Password
          </label>
          <input
            type="text"
            name="password"
            id="password"
            onInput={formLogin.handleChange}
            className="form-control"
          />
        </div>
        <div className="row justify-content-between">
          <button className="col-5 btn btn-primary" type="submit">
            Login
          </button>
          <button className="col-5 btn btn-secondary" disabled type="submit">
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
