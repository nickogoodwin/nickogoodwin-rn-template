import {configureStore} from '@reduxjs/toolkit';
import SampleSlice from './SampleSlice';
import ThemeSlice from './ThemeSlice';

export const store = configureStore({
  reducer: {
    sample: SampleSlice,
    theme: ThemeSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
