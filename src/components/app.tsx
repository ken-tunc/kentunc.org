import { Careers } from './careers.tsx';
import { Copyright } from './copyright.tsx';
import { Header } from './header.tsx';
import { Links } from './links.tsx';
import { Profile } from './profile.tsx';
import { Section } from './section.tsx';

export function App() {
  return (
    <main class="mx-auto max-w-2xl px-6 py-8">
      <Section>
        <Header />
      </Section>

      <Section heading="Profile">
        <Profile />
      </Section>

      <Section heading="Career">
        <Careers />
      </Section>

      <Section heading="Links" last>
        <Links />
      </Section>

      <Copyright />
    </main>
  );
}
