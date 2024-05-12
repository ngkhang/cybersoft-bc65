import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { addStudent } from "../../redux/reducers/studentReducer";

const FormStudent = () => {
  const dispatch = useDispatch();
  const formStudent = useFormik({
    initialValues: {
      codeStudent: "",
      fullName: "",
      email: "",
      phone: "",
    },
    onSubmit: (student) => {
      const action = addStudent(student);
      dispatch(action);
      formStudent.resetForm();
    },
  });

  return (
    <form className="container" onSubmit={formStudent.handleSubmit}>
      <div className="form-group mb-2">
        <p>Code Student</p>
        <input
          type="text"
          className="form-control"
          name="codeStudent"
          onChange={formStudent.handleChange}
          value={formStudent.values.codeStudent}
        />
      </div>
      <div className="form-group mb-2">
        <p>Fullname</p>
        <input
          type="text"
          className="form-control"
          name="fullName"
          onChange={formStudent.handleChange}
          value={formStudent.values.fullName}
        />
      </div>
      <div className="form-group mb-2">
        <p>Email</p>
        <input
          type="text"
          className="form-control"
          name="email"
          onChange={formStudent.handleChange}
          value={formStudent.values.email}
        />
      </div>
      <div className="form-group mb-3">
        <p>Phone</p>
        <input
          type="text"
          className="form-control"
          name="phone"
          onChange={formStudent.handleChange}
          value={formStudent.values.phone}
        />
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-primary me-2">
          Add a new student
        </button>
        <button type="reset" className="btn btn-warning">
          Reset Form
        </button>
      </div>
    </form>
  );
};

export default FormStudent;
