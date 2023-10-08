import { useDispatch } from 'react-redux';
import { updateReationCount } from './postsSlice';

const reactionEmo = {
  love: 'love',
  like: 'like',
};

const ReactionBtn = ({ post }) => {
  const dispatch = useDispatch();
  const reactionBtns = Object.entries(reactionEmo).map(([name, emoji]) => {
    return (
      <button
        type="button"
        key={name}
        onClick={() =>
          dispatch(updateReationCount({ postId: post.id, reaction: name }))
        }
      >
        {emoji} {post.reactions[name]}
      </button>
    );
  });
  return <div>{reactionBtns}</div>;
};

export default ReactionBtn;
