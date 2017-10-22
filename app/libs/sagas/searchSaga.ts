import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';

import {
  ActionTypes,
  IActions,
  ISearchResultAction
} from '../actions/searchAction';
import ApiSearch from '../ApiSearch';
import { ISearchResult } from '../IState';

const apiSearch = new ApiSearch();

function* search(action: IActions) {
  try {
    const searchResult: ISearchResult[] = yield call(
      apiSearch.search,
      action.by
    );
    yield put<ISearchResultAction>({
      by: searchResult,
      type: ActionTypes.SEARCH_RESULT
    });
  } catch (e) {
    yield put<ISearchResultAction>({ type: ActionTypes.SEARCH_RESULT, by: [] });
  }
}

function* searchSaga() {
  yield takeEvery(ActionTypes.SEARCH, search);
}

export default searchSaga;
