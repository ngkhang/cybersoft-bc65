import { useEffect, useState } from "react";
import { KEYS } from "../utils/utilFunction";
import { useNavigate } from "react-router-dom";
import { httpStore } from "../utils/config";
import api from "../utils/api";
import { useDispatch } from 'react-redux';
import { logoutAction } from '../redux/reducers/userReducer';

const Profile = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getProfileApi = async () => {
    try {
      const res = await httpStore.post(api.USER_PROFILE);
      setUser(res.data.content);
    } catch (error) {
      if (error.response?.status === 401) navigate("/login");
    }
  };

  const handleLogout = () => {
    const actionCreator = logoutAction();
    dispatch(actionCreator);
    navigate("/");
  };

  useEffect(() => {
    getProfileApi();
  }, []);

  return (
    <div>
      <h3>Profile User</h3>
      <div className="row">
        {user ? (
          <>
            <div className="col-4">
              <img className="img-fluid" src={user.avatar} alt="..." />
              <p>{user.name}</p>
              <p>{user.phone}</p>
              <button className="btn btn-warning" onClick={handleLogout}>
                Logout
              </button>
            </div>
            <div className="col-8">
              <h4>History Order</h4>
              <ul className="list-group list-group-numbered">
                <li className="list-group-item">Item 1</li>
                <li className="list-group-item">Item 2</li>
                <li className="list-group-item">Item 3</li>
              </ul>
            </div>
          </>
        ) : (
          <p>Not found</p>
        )}
      </div>
    </div>
  );
};

export default Profile;
