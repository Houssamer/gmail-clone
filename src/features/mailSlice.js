import { createSlice } from '@reduxjs/toolkit';

export const mailSlice = createSlice({
  name: 'mail',
  initialState: {
    isMailOpen: false,
    selectedMail: null,
    mailCount: 0,
  },
  reducers: {
    openNewMail: state => {
      state.isMailOpen = true
    },
    closeNewMail: state => {
      state.isMailOpen = false
    },
    setSelectedMail: (state, action) => {
      state.selectedMail = action.payload
    },
    setCountMail: (state, action) => {
      state.mailCount = action.payload
    }
}});

export const { openNewMail, closeNewMail, setSelectedMail, setCountMail } = mailSlice.actions;


// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectOpenMail = state => state.mail.isMailOpen;
export const selectMailSelected = state => state.mail.selectedMail;
export const selectCountMail = state => state.mail.mailCount;

export default mailSlice.reducer;
