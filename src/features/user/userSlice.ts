import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import userInterface from "./userInterface";

const initialState: { user: userInterface } = {
  user: {
    id: 0,
    name: "",
    username: "",
    email: "",
    address: {
      street: "",
      suite: "",
      city: "",
    },
    phone: "",
    website: "",
    company: {
      name: "",
      catchPhrase: "",
      bs: "",
    },
  },
};

export const userSlice = createSlice({
  name: "user",

  initialState: initialState,

  reducers: {
    setUser: (state, action: PayloadAction<userInterface>) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
