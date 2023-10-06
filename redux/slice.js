const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  fetchcard: [],
};

const counterSlice = createSlice({
  name: "luckycharm",
  initialState,
  reducers: {
    setFetchcard: (state, {payload}) => {
      state.fetchcard = payload;
    },
  },
});

export default counterSlice.reducer;
export const { setFetchcard } = counterSlice.actions;
