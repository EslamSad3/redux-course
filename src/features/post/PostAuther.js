import { useSelector } from 'react-redux';
import { selectAllUsers } from '../users/usersSlice';

const PostAuther = ({ userId }) => {
  const users = useSelector(selectAllUsers);
  const auther = users.find((user) => user.id === userId);
  return <span> by : {auther ? auther.name : 'Unknown Auther'}</span>;
};

export default PostAuther;
