import { combineReducers } from 'redux';

import IState from '../IState';
import searchReducer from './searchReducer';

const reducers = combineReducers<IState>({
  searchReducer
});

export default reducers;
