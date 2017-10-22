import { ISearchResult } from './IState';

interface ISearcher {
  search(text: string): Promise<ISearchResult[]>;
}

export default ISearcher;
