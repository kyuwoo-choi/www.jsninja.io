
class JSNinja extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerText = 'js-ninja';
  }
}

customElements.define('js-ninja', JSNinja);

export default JSNinja;

