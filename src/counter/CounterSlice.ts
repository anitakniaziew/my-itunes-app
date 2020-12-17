import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { StoreState } from '../store';

type CounterState = {
  count: number;
}

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 0,
  } as CounterState,
  reducers: {
    incrementCount(state, action: PayloadAction<number>) {
      state.count += action.payload;
    },
    decrementCount(state, action: PayloadAction<number>) {
      state.count -= action.payload;
    }
  }
})

export const {
  incrementCount,
  decrementCount,
} = counterSlice.actions;

export const selectCount = (state: StoreState) => state.counter.count;

export const counterReducer = counterSlice.reducer;
