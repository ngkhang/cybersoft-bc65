import React, { useState } from "react";

const FormComponent = () => {
  const [userRegister, setUserRegister] = useState({
    email: "",
    fullName: "",
    password: "",
    gender: "male",
    phone: "",
  });

  const [errorInputs, setErrorInputs] = useState({
    email: "",
    fullName: "",
    password: "",
    phone: "",
  });

  const REGEXS = {
    email:
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    fullName:
      /[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêếìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]+\ /,
    password: /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,10}$/,
    phone: "",
  };

  const isValidInputByType = (type, value) => {
    let regx = REGEXS[type];
    return regx.test(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setUserRegister({
      ...userRegister,
      [name]: value,
    });
  };

  console.log(userRegister);

  return (
    <div className="min-vh-100 d-flex justify-content-center align-items-center">
      <div className="container w-25">
        <form
          className="bg-light rounded-2 p-4 shadow-lg"
          onSubmit={handleSubmit}
        >
          <div className="form-group mb-3">
            <label className="mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              name="email"
              id="email"
              onInput={handleChangeInput}
            />
            <p className="text-danger fs-6">{errorInputs.email}</p>
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
              onInput={handleChangeInput}
            />
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
              onInput={handleChangeInput}
            />
          </div>

          <div>
            <p>Gender</p>
            <div class="form-check">
              <div>
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  id="male"
                  value="male"
                  defaultChecked
                  onChange={handleChangeInput}
                />
                <label className="form-check-label" htmlFor="male">
                  Male
                </label>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    id="female"
                    value="female"
                    onChange={handleChangeInput}
                  />
                  <label className="form-check-label" htmlFor="female">
                    Female
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="form-group mb-3">
            <label htmlFor="phone">Phone</label>
            <input
              type="phone"
              className="form-control"
              name="phone"
              id="phone"
              onChange={handleChangeInput}
            />
          </div>
          <div className="form-group mb-3">
            <button type="submit" className="w-100 btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormComponent;
