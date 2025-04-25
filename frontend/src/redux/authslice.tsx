import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Assuming you have a User type
interface User {
  id: string;
  email: string;
  name: string;
  createdAt: string;
}

interface AuthState {
  name: unknown;
  user: User | null;  // The user now includes 'name'
  token: string | null;
}

const initialState: AuthState = {
  user: null,
  token: null,
  name: undefined
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials(state, action: PayloadAction<{ user: User; token: string }>) {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    logout(state) {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;

export default authSlice.reducer;
