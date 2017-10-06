
class JSNinja extends HTMLElement {
  public static readonly is: string = 'js-ninja';

  constructor() {
    super();

    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.innerHTML = JSNinja.is;
  }
}

window.customElements.define(JSNinja.is, JSNinja);

export default JSNinja;
