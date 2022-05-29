import { configureStore } from '@reduxjs/toolkit';
import { middleware } from './contacts/items-persistor';
// import { persistStore } from 'redux-persist';
import { reducers } from './contacts/items-reducer';

const store = configureStore({
  reducer: {
    contacts: reducers,
  },
  middleware,
});

// const persistor = persistStore(store);

export { store };
// import { configureStore } from '@reduxjs/toolkit';
// import itemsSlice from './contacts/itemSlice';
// import logger from 'redux-logger';
// export const store = configureStore({
//   reducer: {
//     contacts: itemsSlice,
//   },
//   middleware: getDefaultMiddleware => [...getDefaultMiddleware(), logger],
// });
