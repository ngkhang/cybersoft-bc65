import { Space, Table } from 'antd';
import { NavLink } from 'react-router-dom';

const columns = [
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
    render: (_, record) => <NavLink to={`/admin/detail/${record.email}`}>{record.email}</NavLink>,
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <span>{text}</span>
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

const TableAntd = (props) => {
  const {data} = props;
  return <Table columns={columns} dataSource={data} />
}

export default TableAntd;
