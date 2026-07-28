import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { styles as typescaleStyles } from '@material/web/typography/md-typescale-styles.js';

@customElement('app-copyright')
export class AppCopyright extends LitElement {
  static override styles = [
    typescaleStyles,
    css`
      :host {
        display: block;
        text-align: center;
        color: var(--md-sys-color-on-surface-variant);
      }

      a {
        color: inherit;
      }
    `,
  ];

  override render() {
    return html`
      <p class="md-typescale-body-small">
        Copyright © <a href="https://kentunc.org">kentunc.org</a>
        ${new Date().getFullYear()}.
      </p>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-copyright': AppCopyright;
  }
}
