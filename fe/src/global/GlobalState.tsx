import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toggle: false,
  user: "" || {} || null,
  member: "" || {} || null,
  admin: "" || {} || null,
};

const GlobalState: any = createSlice({
  name: "icc",
  initialState,
  reducers: {
    createToggle: (state: any) => {
      state.toggle = true;
    },
    returnToggle: (state: any) => {
      state.toggle = false;
    },
    createUser:(state:any,{payload}:any)=>{
      state.user = payload;
    },
    createAdmin:(state:any,{payload}:any)=>{
      state.admin = payload;
    },
    createMember:(state:any,{payload}:any)=>{
      state.member = payload;
    },
  },
});

export const { createToggle, returnToggle, createUser,createAdmin, createMember } = GlobalState.actions;

export default GlobalState.reducer;
