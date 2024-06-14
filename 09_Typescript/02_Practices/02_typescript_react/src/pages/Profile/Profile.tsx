import { useDispatch, useSelector } from "react-redux";
import { DispatchType, RootState } from "../../redux/store";
import { useEffect } from "react";
import { getProfileApiActionAsync, setLogoutAction } from "../../redux/reducers/userReducer";
import { ACCESS_TOKEN, USER_LOGIN } from '../../utils/api';
import { delCookie } from '../../utils/helper';
import { routeLink } from '../../App';

const Profile = () => {
  const { userProfile } = useSelector((state: RootState) => state.userReducer);
  const dispatch: DispatchType = useDispatch();

  const handleLogout = () => {
    localStorage.removeItem(ACCESS_TOKEN);
    localStorage.removeItem(USER_LOGIN);
    delCookie(USER_LOGIN);

    const action = setLogoutAction();
    dispatch(action);

    routeLink.push("/");
  }

  useEffect(() => {
    const actionAsync = getProfileApiActionAsync();
    dispatch(actionAsync);
  }, []);

  return (
    <div className="container py-4">
      {userProfile && (
        <>
          <div className="row mb-4">
            <h3 className="mb-2">Information</h3>
            <div className="col-3 d-flex justify-content-center align-items-center">
              <img
                src={userProfile.avatar}
                alt={userProfile.name}
                className="img-fluid w-75"
              />
            </div>
            <div className="col-8 d-flex flex-column justify-content-between">
              <div>
                <p>Name: {userProfile.name}</p>
                <p>Email: {userProfile.email}</p>
              </div>
              <div className='d-flex'>
                <button className='btn btn-secondary px-4 me-2' onClick={handleLogout}>Log out</button>
                <button className='btn btn-primary px-4' disabled onClick={handleLogout}>Edit Profile</button>
              </div>
            </div>
          </div>

          <div className="row">
            <h3 className="mb-2">Orders History</h3>
            <ul>
              {userProfile.ordersHistory.length > 0 &&
                userProfile.ordersHistory.map((item, index) => {
                  return (
                    <li key={index}>
                      Item {index}: {item.name}
                    </li>
                  );
                })}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default Profile;
