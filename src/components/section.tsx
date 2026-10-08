import type { ComponentChildren } from 'preact';

type Props = {
  /** Section heading. Omit it for an untitled block. */
  heading?: string;
  /** Suppresses the trailing divider. */
  last?: boolean;
  children: ComponentChildren;
};

/** A titled block of content followed by a divider. */
export function Section({ heading, last = false, children }: Props) {
  return (
    <>
      <section>
        {heading && <h2 class="mb-3 text-xl font-semibold">{heading}</h2>}
        {children}
      </section>
      {!last && <div class="divider my-6" role="separator" />}
    </>
  );
}
