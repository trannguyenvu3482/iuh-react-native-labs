import { createSlice } from "@reduxjs/toolkit";

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export interface CounterState {
  users: User[];
}

const initialState: CounterState = {
  users: [],
};

export const counterSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
    removeUser: (state, action) => {
      state.users.splice(action.payload, 1);
      console.log(state.users);
    },
    updateUser: (state, action) => {
      state.users[action.payload.index] = action.payload.user;
    },
    setUsers: (state, action) => {
      state.users = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addUser, removeUser, updateUser, setUsers } =
  counterSlice.actions;

export default counterSlice.reducer;
