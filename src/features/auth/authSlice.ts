import {
    createSlice,
  } from '@reduxjs/toolkit';
  import type { RootState } from '../../app/store';
  
  // declaring the types for our state
  export type CounterState = {
    signUpFormValues: {
      type: '',
      value: ''
    }
  };
  
  const initialState: CounterState = {
    signUpFormValues: {
      type: '',
      value: ''
    }
  };
  
  export const counterSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
      submitForm: (state, action) => {
        state.signUpFormValues = action.payload
      },
      
      
    },
  });
  // Here we are just exporting the actions from this slice, so that we can call them anywhere in our app.
  export const {
    submitForm,
  } = counterSlice.actions;
  
  
  export const selectCount = (state: RootState) => state.auth.signUpFormValues;
  
  // exporting the reducer here, as we need to add this to the store
  export default counterSlice.reducer;