import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { styles as typescaleStyles } from '@material/web/typography/md-typescale-styles.js';
import { careers, formatPeriod, isOngoing } from '../lib/careers.ts';

/**
 * A vertical timeline of past and current roles.
 *
 * material-web has no stepper or timeline component, so the rail is drawn with
 * CSS from the same `--md-sys-color-*` tokens the rest of the page uses.
 */
@customElement('app-careers')
export class AppCareers extends LitElement {
  static override styles = [
    typescaleStyles,
    css`
      :host {
        display: block;
      }

      ol {
        margin: 0;
        padding: 0;
        list-style: none;
      }

      li {
        display: grid;
        grid-template-columns: 0.75rem 1fr;
        column-gap: 1rem;
      }

      .rail {
        position: relative;
        display: flex;
        justify-content: center;
      }

      .dot {
        width: 0.75rem;
        height: 0.75rem;
        margin-top: 0.4rem;
        border-radius: 50%;
        background-color: var(--md-sys-color-outline);
      }

      li.current .dot {
        background-color: var(--md-sys-color-primary);
      }

      /* Connects each entry to the one below it. */
      li:not(:last-child) .rail::after {
        content: '';
        position: absolute;
        top: 1.4rem;
        bottom: -0.25rem;
        width: 2px;
        border-radius: 1px;
        background-color: var(--md-sys-color-outline-variant);
      }

      .body {
        padding-bottom: 1.5rem;
      }

      li:last-child .body {
        padding-bottom: 0;
      }

      p {
        margin: 0;
      }

      .label {
        color: var(--md-sys-color-on-surface);
      }

      .description {
        margin-top: 0.125rem;
        color: var(--md-sys-color-on-surface-variant);
      }

      .period {
        margin-top: 0.25rem;
        color: var(--md-sys-color-on-surface-variant);
      }
    `,
  ];

  override render() {
    return html`
      <ol>
        ${careers.map(
          (career) => html`
            <li class=${isOngoing(career) ? 'current' : ''}>
              <div class="rail"><span class="dot"></span></div>
              <div class="body">
                <p class="label md-typescale-body-large">${career.label}</p>
                <p class="description md-typescale-body-small">${career.description}</p>
                <p class="period md-typescale-label-small">${formatPeriod(career)}</p>
              </div>
            </li>
          `,
        )}
      </ol>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-careers': AppCareers;
  }
}
