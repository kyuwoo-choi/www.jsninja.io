import { goAsync, highlight } from 'fuzzysort';

import javascriptMDN from '../javascript';
import ISearcher from './ISearcher';
import { ISearchResult } from './IState';

const MAX_NUM_RESULTS = 30;
const javascriptMDNKeys = Object.keys(javascriptMDN);

class ApiSearch implements ISearcher {
  public search(text: string): Promise<ISearchResult[]> {
    return new Promise(resolve => {
      goAsync(text, javascriptMDNKeys, {
        limit: MAX_NUM_RESULTS
      }).then(results => {
        const length = Math.min(MAX_NUM_RESULTS, results.total);
        const formattedResults: ISearchResult[] = [];

        for (let i = 0; i < length; i += 1) {
          const result = results[i];
          const formattedResult: ISearchResult = {
            key: result.target,
            highlighted: highlight(result, '<b>', '</b>'),
            url: javascriptMDN[result.target]
          };

          formattedResults.push(formattedResult);
        }

        resolve(formattedResults);
      });
    });
  }
}

export default ApiSearch;
