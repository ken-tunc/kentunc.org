import { externalLinks, linkTarget } from '../lib/links.ts';

export function Links() {
  return (
    <ul class="menu w-full p-0">
      {externalLinks.map((link) => {
        const target = linkTarget(link);
        return (
          <li key={link.label}>
            <a
              href={link.url}
              target={target || undefined}
              rel={target ? 'noopener noreferrer' : undefined}
              class="gap-4 py-3"
            >
              <link.icon class="size-6 text-base-content/70" />
              <span>
                <span class="block">{link.label}</span>
                <span class="block text-sm text-base-content/60">{link.handle}</span>
              </span>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
