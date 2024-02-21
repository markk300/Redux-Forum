import { configureStore } from "@reduxjs/toolkit";
import blogSlice from "../features/blogs/blogSlice";
import usersReducer from "../features/users/userSlice";

export const store = configureStore({
  reducer: {
    blogs: blogSlice,
    users: usersReducer,
  },
});
