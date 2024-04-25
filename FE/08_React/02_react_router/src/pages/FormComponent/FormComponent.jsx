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
    password: /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,10}$/,
    fullName:
      /[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêếìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]+\ /,
    phone: /^(0\d{9}|(\+84|84)\d{9})$/,
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

    let isValid = true;
    if (name === "email") isValid = isValidInputByType(name, value);
    else if (name === "password") isValid = isValidInputByType(name, value);
    else if (name === "fullName") isValid = isValidInputByType(name, value);
    else if (name === "phone") isValid = isValidInputByType(name, value);

    setErrorInputs({
      ...errorInputs,
      [name]: isValid ? "" : `${name} is not Valid`,
    });
    setUserRegister({
      ...userRegister,
      [name]: value,
    });
  };

  return (
    <div className="min-vh-100 d-flex justify-content-center align-items-center">
      <div className="container w-50">
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
            <p className="text-danger fs-6">{errorInputs.fullName}</p>
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
            <p className="text-danger fs-6">{errorInputs.password}</p>
          </div>

          <div className='form-group mb-3'>
            <p>Gender</p>
            <div className='d-flex align-align-items-sm-center justify-content-between'>
              <div className="form-check w-100">
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
                </div>
              </div>
              <div className="form-check w-100">
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

          <div className="form-group mb-3">
            <label className="mb-2" htmlFor="phone">Phone</label>
            <input
              type="phone"
              className="form-control"
              name="phone"
              id="phone"
              onChange={handleChangeInput}
            />
            <p className="text-danger fs-6">{errorInputs.phone}</p>
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
