import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  memberList: [],
};

const applicationSlice = createSlice({
  name: "application",
  initialState,
  reducers: {
    setMemberList: (state, action) => {
      state.memberList = action.payload
        .filter(
          (member) => member.prenom && member.dateNaissance && member.sexe
        )
        .map((member) => ({ ...member, id: nanoid() })); // Assign unique IDs to each member
    },
    addToMemberList: (state, action) => {
      const newMember = action.payload;
      if (
        newMember.prenom &&
        newMember.dateNaissance &&
        newMember.sexe &&
        newMember.rangCode
      ) {
        state.memberList.push({ ...newMember, id: nanoid() }); // Assign a unique ID
      } else {
        console.error("Invalid member format:", newMember);
      }
    },
    deleteFromMemberList: (state, action) => {
      state.memberList = state.memberList.filter(
        (member) => member.id !== action.payload // Delete by unique ID instead of name
      );
    },
  },
});

// ✅ **Selector function (placed after the slice definition)**
export const findByRangCode = (state, rangCode) =>
  state.application.memberList.find((member) => member.rangCode === rangCode);

// Updated selector to get all members excluding those with any rangCodes in the array
export const findOthers = (state, rangCodes) => {
  return state.application.memberList.filter(
    (member) => !rangCodes.includes(member.rangCode)
  );
};
// Export action creators
export const { setMemberList, addToMemberList, deleteFromMemberList } =
  applicationSlice.actions;

// Export reducer
export default applicationSlice.reducer;
