import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {BACKEND_URL} from "../../constants";

export const getUser = createAsyncThunk(
  'user/getUserStatus',
  async (userName: string) => {
    const response = await fetch(`${BACKEND_URL}/check_username?name=${userName}`);
    const data = await response.json();
    if (response.status === 200) {
      return data.usernameExists;
    } else {
      return null;
    }
  }
);

type User = {
  login: boolean|any
}
const initialState: User = {
  login: false,
}
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getUser.fulfilled, (state, action) => {
        state.login = action.payload;
      })
  }
})
export default userSlice.reducer;