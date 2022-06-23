import { configureStore } from '@reduxjs/toolkit';

// Reducers
import cellsReducer from './reducers/cellsReducer';

export const store = configureStore({
  reducer: {
    cells: cellsReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
