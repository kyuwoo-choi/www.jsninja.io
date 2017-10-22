import {
  ActionTypes,
  IActions,
  ISearchAction,
  ISearchResultAction
} from '../actions/searchAction';
import { ISearchState } from '../IState';

const defaultState: ISearchState = {
  searchResult: []
};

export default function searchReducer(
  state: ISearchState = defaultState,
  action: IActions
): ISearchState {
  switch (action.type) {
    case ActionTypes.SEARCH:
      return state;
    case ActionTypes.SEARCH_RESULT:
      return { searchResult: action.by };
    default:
      return state;
  }
}
