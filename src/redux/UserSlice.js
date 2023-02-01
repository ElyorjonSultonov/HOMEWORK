import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  users: false,
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    usersTrue: (state) => {
      state.users = true;
    },
  },
});
export const { usersTrue } = userSlice.actions;
export default userSlice.reducer;
