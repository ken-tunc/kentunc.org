import '@material/web/icon/icon.js';
import '@material/web/list/list.js';
import '@material/web/list/list-item.js';
import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { externalLinks, linkTarget } from '../lib/links.ts';

@customElement('app-links')
export class AppLinks extends LitElement {
  static override styles = css`
    :host {
      display: block;
    }

    md-list {
      --md-list-container-color: transparent;
      padding: 0;
    }

    md-list-item {
      border-radius: 0.75rem;
    }

    md-icon {
      color: var(--md-sys-color-on-surface-variant);
    }
  `;

  override render() {
    return html`
      <md-list>
        ${externalLinks.map(
          (link) => html`
            <md-list-item type="link" href=${link.url} target=${linkTarget(link)}>
              <md-icon slot="start">${link.icon()}</md-icon>
              <div slot="headline">${link.label}</div>
              <div slot="supporting-text">${link.handle}</div>
            </md-list-item>
          `,
        )}
      </md-list>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-links': AppLinks;
  }
}
