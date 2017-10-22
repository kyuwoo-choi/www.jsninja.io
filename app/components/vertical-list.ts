import { html, render } from 'lit-html';

class VerticalList extends HTMLElement {
  public static readonly is: string = 'vertical-list';

  private root: ShadowRoot;

  constructor() {
    super();

    this.root = this.attachShadow({ mode: 'open' });
    this.render();
  }

  protected render(): void {
    render(
      html`
        <div>
          <slot></slot>
        </div>
      `,
      this.root
    );
  }
}

customElements.define(VerticalList.is, VerticalList);

export default VerticalList;
