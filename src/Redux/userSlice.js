import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  name: '',
  number: '',
  login:false
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.name = action.payload.name;
      state.number = action.payload.number;
      state.login = true;
    },

    logout: state => {
      state.name = '';
      state.number = '';
      state.login = false;
    },
  },
});

export const {login, logout} = userSlice.actions;

export default userSlice.reducer;
