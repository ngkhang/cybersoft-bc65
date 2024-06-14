import { useFormik } from "formik";
import * as yup from "yup";
import { loginApiActionAsync } from "../../redux/reducers/userReducer";
import { DispatchType } from "../../redux/store";
import { useDispatch } from "react-redux";
import { UserLoginType } from '../../models/UserModel';

const Login = () => {
  const dispatch: DispatchType = useDispatch();

  const formLogin = useFormik<UserLoginType>({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: yup.object().shape({
      email: yup
        .string()
        .required("Email can't not empty")
        .email("Email is invalid"),
      password: yup.string().required("Password can't not empty"),
    }),
    onSubmit: (values) => {
      const actionAsync = loginApiActionAsync(values);
      dispatch(actionAsync);
    },
  });

  return (
    <div className='flex-grow-1 d-flex align-items-center justify-content-center'>
      <div className="container w-25 py-4">
        <h3 className='text-center mb-2'>Login</h3>
        <form onSubmit={formLogin.handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              onInput={formLogin.handleChange}
              type="text"
              className="form-control"
              name="email"
              id="email"
              placeholder="Enter email"
              aria-describedby="emailId"
            />
            <small id="emailId" className="form-text text-danger">
              {formLogin.errors.email}
            </small>
          </div>
          <div className="mb-5">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              onInput={formLogin.handleChange}
              type="password"
              className="form-control"
              name="password"
              id="password"
              placeholder="Enter password"
              aria-describedby="passwordId"
            />
            <small id="passwordId" className="form-text text-danger">
              {formLogin.errors.password}
            </small>
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
