import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {BACKEND_URL} from "../../constants";

export const getLogin = createAsyncThunk(
  'login/getLoginStatus',
  async (value: string) => {
    const response = await fetch(`${BACKEND_URL}/check_username?name=${value}`);
    const data = await response.json();
    if (response.status === 200) {
      console.log(data.usernameExists)
      return data.usernameExists;
    } else {
      return null;
    }
  }
)
type Login = {
  login: boolean;
}
const initialState: Login = {
  login: false,
}
const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getLogin.fulfilled, (state, action) => {
      state.login = action.payload;
      console.log(state.login)
      localStorage.setItem('JWT', `${state.login}`);
    })
  }
})
export default loginSlice.reducer;