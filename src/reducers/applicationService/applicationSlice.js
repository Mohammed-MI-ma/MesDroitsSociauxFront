import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  memberList: [],
};

const applicationSlice = createSlice({
  name: "application",
  initialState,
  reducers: {
    setMemberList: (state, action) => {
      state.memberList = action.payload.filter(
        (member) => member.prenom && member.dateNaissance && member.sexe
      );
    },
    addToMemberList: (state, action) => {
      const newMember = action.payload;
      if (
        newMember.prenom &&
        newMember.dateNaissance &&
        newMember.sexe &&
        newMember.rangCode
      ) {
        state.memberList.push(newMember);
      } else {
        console.error("Invalid member format:", newMember);
      }
    },
    deleteFromMemberList: (state, action) => {
      state.memberList = state.memberList.filter(
        (member) => member.prenom !== action.payload
      );
    },
  },
});

// ✅ **Selector function (placed after the slice definition)**
export const findByRangCode = (state, rangCode) =>
  state.application.memberList.find((member) => member.rangCode === rangCode);

// Export action creators
export const { setMemberList, addToMemberList, deleteFromMemberList } =
  applicationSlice.actions;

// Export reducer
export default applicationSlice.reducer;
