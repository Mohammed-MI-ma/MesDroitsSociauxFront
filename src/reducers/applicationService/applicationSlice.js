import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  memberList: [],
  curentStep: 0,
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
    setCurrentStep: (state, action) => {
      state.curentStep = action.payload;
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
    // Update a member by ID
    updateMember: (state, action) => {
      const { id, updatedFields } = action.payload;

      // Log the payload and the member list for debugging
      console.log("Updating member with ID:", id);
      console.log("Updated Fields:", updatedFields);
      console.table(state.memberList); // Logs the entire member list

      // Find the member by ID and update their fields
      const member = state.memberList.find((member) => member.id === id);

      // Log the found member
      console.log("Found member:", member);

      if (member) {
        // Update only the specified fields, keeping the existing ID
        Object.assign(member, updatedFields);
      } else {
        // If member is not found, log an error and return an error code
        console.error(`Member with ID "${id}" not found.`);
      }
    },
    resetApp: () => initialState,
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
export const {
  setMemberList,
  addToMemberList,
  deleteFromMemberList,
  updateMember,
  resetApp,
  setCurrentStep,
} = applicationSlice.actions;

// Export reducer
export default applicationSlice.reducer;
