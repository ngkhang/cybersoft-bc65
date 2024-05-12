import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listStudent: [],
  studentEdit: {}
};

const studentReducer = createSlice({
  name: "studentReducer",
  initialState,
  reducers: {
    addStudent: (state, action) => {
      state.listStudent = [...state.listStudent, action.payload];
    },
    delStudent: (state, { payload }) => {
      state.listStudent = state.listStudent.filter(
        (stu) => stu.codeStudent !== payload
      );
    },
    editStudent: (state, { payload }) => {
      state.studentEdit = state.listStudent.find(
        (stu) => stu.codeStudent === payload
      );
    },
    updateStudent: (state, { payload }) => {
      state.studentEdit = state.listStudent.find(
        (stu) => stu.codeStudent === payload
      );
    },
  },
});

export const { addStudent, delStudent, editStudent } = studentReducer.actions;

export default studentReducer.reducer;
