import { directive, html, render } from 'lit-html';

class ListItem extends HTMLElement {
  public static readonly is: string = 'list-item';

  static get observedAttributes() {
    return ['name', 'url', 'text'];
  }

  private name: string;

  private url: string;

  private text: string;

  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
  }

  public attributeChangedCallback(
    attr: string,
    oldValue: string,
    newValue: string
  ) {
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
        <style>
          :host:focus {
            background-color: red;
            border: solid 2px black;
          }
          :host {
            height: 30px;
          }
        </style>
        <div>
          <a href="${this.url}">
          ${span}
          </a>
        </div>
      `,
      this.shadowRoot
    );

    this.addEventListener('focus', el => console.log(el));
  }
}

customElements.define(ListItem.is, ListItem);

export default ListItem;
