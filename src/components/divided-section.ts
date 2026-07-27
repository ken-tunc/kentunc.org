import '@material/web/divider/divider.js';
import { LitElement, css, html, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles as typescaleStyles } from '@material/web/typography/md-typescale-styles.js';

/** A titled block of content followed by a divider. */
@customElement('divided-section')
export class DividedSection extends LitElement {
  static override styles = [
    typescaleStyles,
    css`
      :host {
        display: block;
      }

      h2 {
        margin: 0 0 0.75rem;
        color: var(--md-sys-color-on-surface);
      }

      md-divider {
        margin-block: 1.5rem;
      }

      :host([last]) md-divider {
        display: none;
      }
    `,
  ];

  /** Section heading. Omit it for an untitled block. */
  @property({ type: String })
  heading = '';

  /** Suppresses the trailing divider. */
  @property({ type: Boolean, reflect: true })
  last = false;

  override render() {
    return html`
      <section>
        ${this.heading ? html`<h2 class="md-typescale-title-large">${this.heading}</h2>` : nothing}
        <slot></slot>
      </section>
      <md-divider></md-divider>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'divided-section': DividedSection;
  }
}
