import { html, render, directive } from 'lit-html';

class ListItem extends HTMLElement {
  public static readonly is: string = 'list-item';

  static get observedAttributes() {
    return ['name', 'url', 'text'];
  }

  private root: ShadowRoot;

  private name: string;

  private url: string;

  private text: string;

  constructor() {
    super();

    this.root = this.attachShadow({ mode: 'open' });
  }

  attributeChangedCallback(attr: string, oldValue: string, newValue: string) {
    switch (attr) {
      case 'name':
        this.name = newValue;
        break;
      case 'url':
        this.url = newValue;
        break;
      case 'text':
        this.text = newValue;
        break;
    }

    this.render();
  }

  protected render(): void {
    const span = document.createElement('span');
    span.innerHTML = this.text;
    render(
      html`
        <div>
          <a href="${this.url}">
          ${span}
          </a>
        </div>
      `,
      this.root
    );
  }
}

customElements.define(ListItem.is, ListItem);

export default ListItem;
