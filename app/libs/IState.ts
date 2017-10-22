export interface ISearchResult {
  key: string;
  highlighted: string;
  url: string;
}

export interface ISearchState {
  searchResult: ISearchResult[];
}

export default interface IState {
  searchReducer: ISearchState;
};
