import { html, render } from 'lit-html';

class VerticalList extends HTMLElement {
  public static readonly is: string = 'vertical-list';

  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
    this.render();
  }

  protected render(): void {
    render(
      html`
        <div>
          <slot id="items"></slot>
        </div>
      `,
      this.shadowRoot
    );

    const slot = this.shadowRoot.getElementById('items');
    slot.addEventListener('slotchange', () => {
      const items = this.querySelectorAll('list-item');
      console.log(items);
    });
    (window as any).test = this;
    console.log(slot);
  }

  public select(index: number): void {}
}

customElements.define(VerticalList.is, VerticalList);

export default VerticalList;
