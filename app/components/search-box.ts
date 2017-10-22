import { html, render } from 'lit-html';
import { Store } from 'redux';

import { ActionTypes } from '../libs/actions/searchAction';
import IState from '../libs/IState';
import EditableBox from './editable-box';

class SearchBox extends EditableBox {
  public static readonly is: string = 'search-box';

  private store: Store<IState>;

  constructor() {
    super();

    this.initEvent();
  }

  public setStore(store: Store<IState>) {
    this.store = store;
  }

  protected initEvent(): void {
    this.addEventListener('input', event => {
      this.store.dispatch({
        by: this.value,
        type: ActionTypes.SEARCH
      });
    });
  }
}

customElements.define(SearchBox.is, SearchBox);

export default SearchBox;
