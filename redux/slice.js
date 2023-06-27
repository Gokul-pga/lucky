const { createSlice } = require("@reduxjs/toolkit");

const initialState = {};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {},
});

export default counterSlice.reducer;
