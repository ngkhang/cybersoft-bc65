import { useFormik } from "formik";
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";

const Modal = () => {
  const { studentEdit } = useSelector((state) => state.studentReducer);
  const [student, setStudent] = useState(studentEdit);
  
  // const dispatch = useDispatch();
console.log(studentEdit);
  const formUpdate = useFormik({
    initialValues: studentEdit,
    onSubmit: (student) => {
      console.log(student);
    },
  });

  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              Edit Information
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
            <form onSubmit={formUpdate.handleSubmit}>
          <div className="modal-body">
              <div className="form-group mb-2">
                <p>Code Student</p>
                <input
                  type="text"
                  className="form-control"
                  name="codeStudent"
                  disabled
                  value={student.codeStudent}
                />
              </div>
              <div className="form-group mb-2">
                <p>Fullname</p>
                <input
                  type="text"
                  className="form-control"
                  name="fullName"
                  onChange={formUpdate.handleChange}
                  value={student.fullName || formUpdate.values.fullName}
                />
              </div>
              <div className="form-group mb-2">
                <p>Email</p>
                <input
                  type="text"
                  className="form-control"
                  name="email"
                  onChange={formUpdate.handleChange}
                  value={student.email || formUpdate.values.email}
                />
              </div>
              <div className="form-group mb-3">
                <p>Phone</p>
                <input
                  type="text"
                  className="form-control"
                  name="phone"
                  onChange={formUpdate.handleChange}
                  value={student.phone || formUpdate.values.phone}
                />
              </div>
              {/* <div className="form-group">
                <button type="submit" className="btn btn-primary me-2">
                  Add a new student
                </button>
                <button type="reset" className="btn btn-warning">
                  Reset Form
                </button>
              </div> */}
            
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="submit" className="btn btn-primary">
              Save changes
            </button>
          </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
