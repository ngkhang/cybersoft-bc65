import Modal from '../../components/Modal';
import FormStudent from './FormStudent';
import ListStudent from './ListStudent';

const StudentPage = () => {
  return (
    <div className="container">
      <h1 className="mb-4 text-center">Main Store</h1>
      <div className="row">
        <div className="col-5">
          <h3 className="text-center my-2">Form Student</h3>
          <FormStudent />
        </div>
        <div className="col-7 bg-light">
          <h3 className="text-center my-2">List Student</h3>
          <ListStudent />
        </div>
      </div>
      <Modal />
    </div>
  );
}

export default StudentPage;
