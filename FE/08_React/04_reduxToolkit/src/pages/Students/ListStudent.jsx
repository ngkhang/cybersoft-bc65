import { useDispatch, useSelector } from "react-redux";
import { delStudent, editStudent } from "../../redux/reducers/studentReducer";

const ListStudent = () => {
  const { listStudent } = useSelector((state) => state.studentReducer);
  const dispatch = useDispatch();

  const handleDel = (codeStudent) => {
    const action = delStudent(codeStudent);
    dispatch(action);
  };

  const handleEdit = (codeStudent) => {
    const action = editStudent(codeStudent);
    dispatch(action);
  };

  return (
    <>
      {listStudent.length !== 0 ? (
        <table className="table">
          <thead>
            <tr>
              <th>Index</th>
              <th>Code</th>
              <th>Fullname</th>
              <th>Email</th>
              <th>Phone</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {listStudent.map((item, index) => {
              return (
                <tr key={item.codeStudent}>
                  <td>{index + 1}</td>
                  <td>{item.codeStudent}</td>
                  <td>{item.fullName}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                  <td>
                    <button
                      className="btn btn-danger me-2"
                      onClick={() => handleDel(item.codeStudent)}
                    >
                      Del
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      onClick={() => handleEdit(item.codeStudent)}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <p>Empty Students</p>
      )}
    </>
  );
};

export default ListStudent;
