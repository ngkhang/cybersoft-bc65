import { useFormik } from "formik";
import * as Yup from "yup";

const FormComponent = () => {
  const form = useFormik({
    initialValues: {
      email: "",
      password: "",
      fullName: "",
      gender: "male",
      phone: "",
    },
    onSubmit: (formValue) => {
      if (form.isSubmitting) {
        console.log(formValue);
        form.resetForm();
      }
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .email("Email is invalid")
        .required("Email is not blank!"),
      password: Yup.string()
        .min(6, "Password must be 6 to 12 characters")
        .max(12, "Password must be 6 to 12 characters")
        .required("password is not blank!"),
      fullName: Yup.string().required("fullName is not blank!"),
      gender: Yup.string().required("gender is not blank!"),
      phone: Yup.number().required("phone is not blank!"),
    }),
  });

  return (
    <div className="min-vh-100 d-flex justify-content-center align-items-center">
      <div className="container w-50">
        <form
          className="bg-light rounded-2 p-4 shadow-lg"
          onSubmit={form.handleSubmit}
        >
          <div className="form-group mb-3">
            <label className="mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="text"
              className="form-control"
              name="email"
              id="email"
              value={form.values.email}
              onInput={form.handleChange}
              onBlur={form.handleBlur}
            />
            {form.errors.email && (
              <p className="text-danger">{form.errors.email}</p>
            )}
          </div>
          <div className="form-group mb-3">
            <label className="mb-2" htmlFor="fullName">
              Fullname
            </label>
            <input
              type="text"
              className="form-control"
              name="fullName"
              id="fullName"
              value={form.values.fullName}
              onInput={form.handleChange}
              onBlur={form.handleBlur}
            />
            {form.errors.fullName && (
              <p className="text-danger">{form.errors.fullName}</p>
            )}
          </div>
          <div className="form-group mb-3">
            <label className="mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              name="password"
              id="password"
              value={form.values.password}
              onInput={form.handleChange}
              onBlur={form.handleBlur}
            />
            {form.errors.password && (
              <p className="text-danger">{form.errors.password}</p>
            )}
          </div>

          <div className="form-group mb-3">
            <p>Gender</p>
            <div className="d-flex align-align-items-sm-center justify-content-between">
              <div className="form-check w-100">
                <div>
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    id="male"
                    value="male"
                    checked={form.values.gender === "male"}
                    onChange={form.handleChange}
                  />
                  <label className="form-check-label" htmlFor="male">
                    Male
                  </label>
                </div>
              </div>
              <div className="form-check w-100">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  id="female"
                  value="female"
                  checked={form.values.gender === "female"}
                  onChange={form.handleChange}
                />
                <label className="form-check-label" htmlFor="female">
                  Female
                </label>
              </div>
            </div>
            {form.errors.gender && (
              <p className="text-danger">{form.errors.gender}</p>
            )}
          </div>

          <div className="form-group mb-3">
            <label className="mb-2" htmlFor="phone">
              Phone
            </label>
            <input
              type="phone"
              className="form-control"
              name="phone"
              id="phone"
              value={form.values.phone}
              onInput={form.handleChange}
              onBlur={form.handleBlur}
            />
            {form.errors.phone && (
              <p className="text-danger">{form.errors.phone}</p>
            )}
          </div>
          <div className="form-group mb-3">
            <button
              type="submit"
              className="w-100 btn btn-primary"
              disabled={!form.isValid}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormComponent;
