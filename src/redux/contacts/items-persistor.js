// import storage from 'redux-persist/lib/storage';
// import { reducers } from './items-reducer';
import {
  // persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import logger from 'redux-logger';

export const myMiddleware = store => next => action => {
  console.log('моя прослойка', action);
  next(action);
};
export const middleware = getDefaultMiddleware => [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  myMiddleware,
  logger,
];

// export const contactsPersistConfig = {
//   key: 'contacts',
//   storage,
//   blacklist: ['filter'],
// };

// export const persistedReducer = persistReducer(contactsPersistConfig, reducers);
// import storage from 'redux-persist/lib/storage';
// import { items } from './items-slice';
// import {
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import logger from 'redux-logger';

// export const middleware = getDefaultMiddleware => [
//   ...getDefaultMiddleware({
//     serializableCheck: {
//       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//     },
//   }),
//   logger,
// ];

// export const contactsPersistConfig = {
//   key: 'contacts',
//   storage,
//   blacklist: ['filter'],
// };

// export const persistedReducer = persistReducer(contactsPersistConfig, items);
