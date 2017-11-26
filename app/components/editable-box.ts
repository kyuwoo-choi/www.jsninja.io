import { html, render } from 'lit-html';

class EditableBox extends HTMLElement {
  protected editable: HTMLElement;

  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
    this.render();
    this.initEvent();
  }

  public get value(): string {
    return this.editable.innerText;
  }

  public set value(text) {
    this.editable.innerText = text;
  }

  protected render(): void {
    render(
      html`
        <div contenteditable="true" />
      `,
      this.shadowRoot
    );
    this.editable = this.shadowRoot.querySelector('div');
    this.setAttribute('role', 'searchbox');
  }

  protected initEvent(): void {
    const editable = this.editable;
    editable.addEventListener(
      'paste',
      event => (this.editable.innerText = event.clipboardData.getData('text'))
    );
  }
}

export default EditableBox;
