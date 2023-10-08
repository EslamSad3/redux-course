import { createSlice, nanoid } from '@reduxjs/toolkit';
import { sub } from 'date-fns';
const initialState = [
  {
    id: '1',
    title: 'hello',
    content: 'hello world',
    date: sub(Date.now(), { minutes: 10 }).toISOString(),
    reactions: {
      love: 0,
      like: 0,
    },
  },
  {
    id: '2',
    title: 'hi',
    content:
      'hi world hi world hi world hi world hi world hi world hi world hi world hi world hi world',
    date: sub(Date.now(), { minutes: 5 }).toISOString(),
    reactions: {
      love: 0,
      like: 0,
    },
  },
];

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdd: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            userId,
            date: new Date().toISOString(),
            reactions: {
              love: 0,
              like: 0,
            },
          },
        };
      },
    },
    updateReationCount(state, action) {
      const { postId, reaction } = action.payload;
      const existingPost = state.find((post) => post.id === postId);
      if (existingPost) {
        existingPost.reactions[reaction]++;
      }
    },
  },

  /*
postAdd: (state, action) => {
      state.push(action.payload);
    //    state.posts(...state.posts,action.payload) -> to not miutate the state
    },
*/
});

export const selectAllPosts = (state) => state.posts;

export const { postAdd,updateReationCount } = postsSlice.actions;
export default postsSlice.reducer;
