import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import './app-careers.ts';
import './app-copyright.ts';
import './app-header.ts';
import './app-links.ts';
import './app-profile.ts';
import './divided-section.ts';

@customElement('app-root')
export class AppRoot extends LitElement {
  static override styles = css`
    :host {
      display: block;
    }

    main {
      max-width: 40rem;
      margin-inline: auto;
      padding: 2rem 1.5rem;
    }

    app-copyright {
      margin-top: 2rem;
    }
  `;

  override render() {
    return html`
      <main>
        <divided-section>
          <app-header></app-header>
        </divided-section>

        <divided-section heading="Profile">
          <app-profile></app-profile>
        </divided-section>

        <divided-section heading="Career">
          <app-careers></app-careers>
        </divided-section>

        <divided-section heading="Links" last>
          <app-links></app-links>
        </divided-section>

        <app-copyright></app-copyright>
      </main>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-root': AppRoot;
  }
}
