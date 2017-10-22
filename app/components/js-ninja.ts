import 'regenerator-runtime/runtime';
import './search-box';
import './search-result';

import { html, render } from 'lit-html';
import { applyMiddleware, createStore, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { ActionTypes } from '../libs/actions/searchAction';
import IState from '../libs/IState';
import reducers from '../libs/reducers';
import { searchSaga } from '../libs/sagas';
import SearchBox from './search-box';
import SearchResult from './search-result';

class JSNinja extends HTMLElement {
  public static readonly is: string = 'js-ninja';

  private root: ShadowRoot;

  private searchBox: SearchBox;

  private searchResult: SearchResult;

  private store: Store<IState>;

  constructor() {
    super();

    this.root = this.attachShadow({ mode: 'open' });

    const sagaMiddleware = createSagaMiddleware();
    this.store = createStore<IState>(reducers, applyMiddleware(sagaMiddleware));
    sagaMiddleware.run(searchSaga);

    this.render(this.store);
  }

  protected render(store: Store<IState>): void {
    render(
      html`
<search-box></search-box>
<search-result></search-result>
`,
      this.root
    );

    this.searchBox = this.root.querySelector('search-box') as SearchBox;
    this.searchBox.setStore(store);
    this.searchResult = this.root.querySelector(
      'search-result'
    ) as SearchResult;
    this.searchResult.setStore(store);
  }
}

customElements.define(JSNinja.is, JSNinja);

export default JSNinja;
