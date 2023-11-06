import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk';
import gameOfThunksReducer from './reducer/gameOfThunksReducer';

const store = createStore(
  gameOfThunksReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
