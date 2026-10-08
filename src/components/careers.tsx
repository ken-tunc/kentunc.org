import { careers, formatPeriod, isOngoing } from '../lib/careers.ts';

/** A vertical timeline of past and current roles. */
export function Careers() {
  return (
    // `timeline-snap-icon` pins each dot to its entry's first line, but also
    // re-adds the start column that `timeline-compact` removes; the
    // `--timeline-col-start` override on each entry takes it away again.
    <ol class="timeline timeline-vertical timeline-compact timeline-snap-icon">
      {careers.map((career, index) => {
        const current = isOngoing(career);
        return (
          <li
            key={career.label}
            class="[--timeline-col-start:0]"
            aria-current={current ? 'step' : undefined}
          >
            {index > 0 && <hr />}
            <div class="timeline-middle">
              <span
                class={`block size-3 rounded-full ${current ? 'bg-primary' : 'bg-base-content/40'}`}
              />
            </div>
            <div class="timeline-end mb-6">
              <p class="font-medium">{career.label}</p>
              <p class="text-sm text-base-content/70">{career.description}</p>
              <p class="mt-1 text-xs text-base-content/60">{formatPeriod(career)}</p>
            </div>
            {index < careers.length - 1 && <hr />}
          </li>
        );
      })}
    </ol>
  );
}
