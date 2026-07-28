import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { styles as typescaleStyles } from '@material/web/typography/md-typescale-styles.js';

@customElement('app-profile')
export class AppProfile extends LitElement {
  static override styles = [
    typescaleStyles,
    css`
      :host {
        display: block;
      }

      p {
        margin: 0;
      }

      .name {
        color: var(--md-sys-color-on-surface);
      }

      .detail {
        margin-top: 0.25rem;
        color: var(--md-sys-color-on-surface-variant);
      }
    `,
  ];

  override render() {
    return html`
      <p class="name md-typescale-body-large">Kensuke Taguchi</p>
      <p class="detail md-typescale-body-medium">A software engineer</p>
      <p class="detail md-typescale-body-medium">Interest: music, cooking, investment, etc.</p>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-profile': AppProfile;
  }
}
