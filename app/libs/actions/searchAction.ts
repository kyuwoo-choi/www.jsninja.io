import { ISearchResult } from '../IState';

export enum ActionTypes {
  SEARCH = 'SEARCH',
  SEARCH_RESULT = 'SEARCH_RESULT'
}

export type IActions = ISearchAction | ISearchResultAction;

export interface ISearchAction {
  type: ActionTypes.SEARCH;
  by: string;
}

export interface ISearchResultAction {
  type: ActionTypes.SEARCH_RESULT;
  by: ISearchResult[];
}
