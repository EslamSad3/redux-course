
import {  useSelector } from 'react-redux';
import { selectAllPosts } from './postsSlice';
import PostAuther from './PostAuther';
import ReactionBtn from './ReactionBtn';

function PostsList() {
  const posts = useSelector(selectAllPosts);
  const orderedPosts = posts.slice().sort((a,b)=> b.date.localeCompare(a.date))
  const renderedPost = orderedPosts.map((post) => {
    return (
      <article key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.content}</p>
        <p>
          <PostAuther userId={post.userId} />
        </p>
        <ReactionBtn post={post}/>
      </article>
    );
  });
  return (
    <div>
      <h3>Posts</h3>
      {renderedPost}
    </div>
  );
}

export default PostsList;
