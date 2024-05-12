import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { TYPE } from "../../redux/action";
import { useRef } from 'react';

const ChatApp = () => {
  const firstInput = useRef(null);
  const dispatch = useDispatch();
  const arrComments = useSelector((state) => state.arrComments);

  const getTime = () => {
    const date = new Date();
    const [hours, min, sec] = [
      date.getHours(),
      date.getMinutes(),
      date.getSeconds(),
    ];
    return `${hours}:${min}:${sec}`;
  };

  const form = useFormik({
    initialValues: {
      fullName: "",
      content: "",
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required("Fullname is not blank!"),
      content: Yup.string().required("Content is not blank!"),
    }),
    onSubmit: (newComment) => {
      const action = {
        type: TYPE.UPDATE_COMMENT,
        payload: {
          ...newComment,
          image: `https://i.pravatar.cc?u=${arrComments.length}`,
          time: getTime(),
        },
      };
      dispatch(action);
      form.resetForm();
      firstInput.current?.focus();
    },
  });

  return (
    <div className="container">
      <h3 className="text-center my-3">Chat App</h3>

      <form className="card" onSubmit={form.handleSubmit}>
        <div className="card-header">
          <div className="form-group">
            <label htmlFor="fullName">Fullname</label>
            <input
              autoFocus
              type="text"
              className="form-control"
              name="fullName"
              ref={firstInput}
              onInput={form.handleChange}
              value={form.values.fullName}
            />
            {form.errors.fullName && (
              <p className="text-danger fs-6">{form.errors.fullName}</p>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="content">Content</label>
            <input
              type="text"
              className="form-control"
              name="content"
              onInput={form.handleChange}
              value={form.values.content}
            />
            {form.errors.content && (
              <p className="text-danger fs-6">{form.errors.content}</p>
            )}
          </div>
          <div className="form-group mt-2">
            <button className="btn btn-primary" type="submit" disabled={!form.isValid}>
              Submit
            </button>
          </div>
        </div>
        <div className="card-body bg-light">
          <div className="container">
            {arrComments &&
              arrComments.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="row align-align-items-start rounded-2 bg-white shadow-lg p-3 mb-2"
                  >
                    <div className="col-2 d-flex justify-content-center align-items-center">
                      <img
                        src={item.image}
                        alt={`avatar-${item.name}`}
                        className="img-fluid"
                      />
                    </div>
                    <div className="col-10">
                      <h3 className="text-danger bold mb-1">{item.fullName}</h3>
                      <p className="fs-5 mb-1">{item.content}</p>
                      <p className="text-primary fs-6 m-0">{item.time}</p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </form>
    </div>
  );
};

export default ChatApp;
