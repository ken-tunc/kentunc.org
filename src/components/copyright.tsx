export function Copyright() {
  return (
    <footer class="mt-8 text-center text-sm text-base-content/70">
      <p>
        Copyright ©{' '}
        <a class="link" href="https://kentunc.org">
          kentunc.org
        </a>{' '}
        {new Date().getFullYear()}.
      </p>
    </footer>
  );
}
