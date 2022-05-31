import { configureStore } from '@reduxjs/toolkit';
// import { middleware } from './contacts/items-persistor';
import itemsSlice from './contacts/items-slice';
// import { reducers } from './contacts/items-reducer';
import { contactsApi } from './contacts/itemsOperations';
const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    filter: itemsSlice,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
});

export {store};
// const store = configureStore({
//   reducer: {
//     contacts: reducers,
//   },
//   middleware,
// });

// const persistor = persistStore(store);

// export { store };
// import { configureStore } from '@reduxjs/toolkit';
// import itemsSlice from './contacts/itemSlice';
// import logger from 'redux-logger';
// export const store = configureStore({
//   reducer: {
//     contacts: itemsSlice,
//   },
//   middleware: getDefaultMiddleware => [...getDefaultMiddleware(), logger],
// });
