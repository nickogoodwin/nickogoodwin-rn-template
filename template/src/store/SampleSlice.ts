import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface SampleState {
  loading: boolean;
  message: string;
}

const initialState: SampleState = {
  loading: false,
  message: '',
};

const SampleSlice = createSlice({
  name: 'sample',
  initialState,
  reducers: {
    toggleLoading: (state: SampleState) => {
      state.loading = !state.loading;
    },
    setMessage: (state: SampleState, action: PayloadAction<string>) => {
      state.message = `${action.payload.toString()}`;
    },
  },
});

export const {toggleLoading, setMessage} = SampleSlice.actions;

export default SampleSlice.reducer;
