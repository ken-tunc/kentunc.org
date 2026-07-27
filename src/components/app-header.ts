import '@material/web/icon/icon.js';
import '@material/web/iconbutton/icon-button.js';
import { LitElement, css, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { styles as typescaleStyles } from '@material/web/typography/md-typescale-styles.js';
import { type ColorMode, otherColorMode, readColorMode, setColorMode } from '../lib/color-mode.ts';
import { darkModeIcon, lightModeIcon } from '../lib/icons.ts';

@customElement('app-header')
export class AppHeader extends LitElement {
  static override styles = [
    typescaleStyles,
    css`
      :host {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
        flex-wrap: wrap;
      }

      h1 {
        margin: 0;
        color: var(--md-sys-color-on-surface);
      }
    `,
  ];

  @state()
  private mode: ColorMode = readColorMode();

  private readonly toggle = () => {
    this.mode = otherColorMode(this.mode);
    setColorMode(this.mode);
  };

  override render() {
    const next = otherColorMode(this.mode);
    const label = `Switch to ${next} mode`;

    return html`
      <h1 class="md-typescale-headline-medium">kentunc.org</h1>
      <md-icon-button aria-label=${label} title=${label} @click=${this.toggle}>
        <md-icon> ${this.mode === 'dark' ? lightModeIcon() : darkModeIcon()} </md-icon>
      </md-icon-button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-header': AppHeader;
  }
}
