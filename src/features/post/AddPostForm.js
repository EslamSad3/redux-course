import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postAdd } from './postsSlice';
import { selectAllUsers } from '../users/usersSlice';

function AddPostForm() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [userId, setUserId] = useState('');
  //

  const users = useSelector(selectAllUsers);
  const onTitleChange = (e) => setTitle(e.target.value);
  const onContentChange = (e) => setContent(e.target.value);
  const onUserChange = (e) => setUserId(e.target.value);
  //

  const savePostClicked = () => {
    if (title && content) {
      dispatch(postAdd(title, content, userId));
      setTitle('');
      setContent('');
      setUserId('');
    }
  };

  const userOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  const canSave = Boolean(title) && Boolean(content) && Boolean(userId);
  return (
    <>
      <section>
        <h3>Add New Post</h3>
        <form>
          <label htmlFor="postTitle">Post Title</label>
          <input
            type="text"
            name="postTitle"
            id="postTitle"
            value={title}
            onChange={onTitleChange}
          />
          <br />
          <br />
          <label htmlFor="postContent">Post Content</label>
          <input
            type="text"
            name="postContent"
            id="postContent"
            value={content}
            onChange={onContentChange}
          />
          <label htmlFor="user"></label>
          <select id="user" name="user" value={userId} onChange={onUserChange}>
            <option value=""></option>
            {userOptions}
          </select>
          <button onClick={savePostClicked} type="button" disabled={!canSave}>
            {' '}
            Save Post
          </button>
        </form>
      </section>
    </>
  );
}

export default AddPostForm;
