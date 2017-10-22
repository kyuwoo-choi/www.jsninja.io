import { html, render } from 'lit-html';
import { Store } from 'redux';
import './vertical-list';
import './list-item';

import { ActionTypes } from '../libs/actions/searchAction';
import IState, { ISearchState, ISearchResult } from '../libs/IState';

class SearchResult extends HTMLElement {
  public static readonly is: string = 'search-result';

  private root: ShadowRoot;

  private store: Store<IState>;

  constructor() {
    super();

    this.root = this.attachShadow({ mode: 'open' });
    this.render([]);
  }

  public setStore(store: Store<IState>) {
    this.store = store;
    this.subscribe();
  }

  protected render(searchStates: ISearchResult[]): void {
    render(
      html`
        <vertical-list>
          ${searchStates.map(searchState => {
            const { key, url, highlighted } = searchState;
            return html`<list-item name="${key}" url="${url}" text="${highlighted}"></list-item>`;
          })}
        </vertical-list>
      `,
      this.root
    );
  }

  protected subscribe(): void {
    this.store.subscribe(() => {
      const { searchResult } = this.store.getState().searchReducer;
      this.render(searchResult);
    });
  }
}

customElements.define(SearchResult.is, SearchResult);

export default SearchResult;
