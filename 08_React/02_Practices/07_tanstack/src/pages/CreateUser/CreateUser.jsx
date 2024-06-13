import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useFormik } from "formik";
import QUERY_KEY from '../../utils/reactQuery';
import { signUpUser } from '../../services/UserApi/userApi';

const CreateUser = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationKey: [QUERY_KEY.SIGN_UP_USER],
    mutationFn: signUpUser,
    onSuccess: () => {
      // Thực thi lại query func dựa trên query key
      queryClient.invalidateQueries(QUERY_KEY.GET_ALL_USER); 
    }
  })

  const formRegis = useFormik({
    initialValues: {
      email: "",
      password: "",
      name: "",
      gender: false,
      phone: "",
    },
    onSubmit: (values) => {
      mutation.mutateAsync(values);
    }
  });

  return (
    <form onSubmit={formRegis.handleSubmit} className="container">
      <h3>Create </h3>
      <div className="w-75 mx-auto">
        <div className="form-group">
          <label className="form-label" htmlFor="email">
            email
          </label>
          <input
            onInput={formRegis.handleChange}
            className="form-control"
            type="text"
            id="email"
            name="email"
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="password">
            Password
          </label>
          <input
            onInput={formRegis.handleChange}
            className="form-control"
            type="text"
            id="password"
            name="password"
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input
            onInput={formRegis.handleChange}
            className="form-control"
            type="text"
            id="Name"
            name="name"
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="gender">
            Gender
          </label>
          <div>
            <div className="form-check">
              <input
                onChange={formRegis.handleChange}
                className="form-check-input"
                type="radio"
                name="gender"
                id="male"
                value={true}
                defaultChecked
              />
              <label className="form-check-label" htmlFor="male">
                Male
              </label>
            </div>
            <div className="form-check">
              <input
                onChange={formRegis.handleChange}
                className="form-check-input"
                type="radio"
                name="gender"
                id="female"
                value={false}
              />
              <label className="form-check-label" htmlFor="female">
                Female
              </label>
            </div>
          </div>
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="phone">
            Phone
          </label>
          <input
            onInput={formRegis.handleChange}
            className="form-control"
            type="text"
            id="phone"
            name="phone"
          />
        </div>
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default CreateUser;
