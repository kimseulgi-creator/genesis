import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// 기초 값 설정
interface InitialState {
  state: null;
}
const initialState: InitialState = { state: null };

// 리듀서
const moduleSlice = createSlice({
  name: 'moduleSlice',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<null>) => {
      return state;
    },
  },
});
export const { addTodo } = moduleSlice.actions;
export default moduleSlice.reducer;
