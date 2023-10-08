import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = [
  { id: nanoid(), name: 'eslam' },
  { id: nanoid(), name: 'ahmed' },
  { id: nanoid(), name: 'mohamed' },
];
const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;
export default usersSlice.reducer;
