/**
 * jsdom implements `ElementInternals` without the form-associated half of the
 * API. material-web's button-like components (`md-icon-button` and friends)
 * call `setFormValue` while they are being constructed, so every one of them
 * throws on upgrade. Fill in the missing surface with inert stubs.
 *
 * Only the members material-web touches are stubbed, and only when the runtime
 * does not already provide them — so this disappears by itself once jsdom
 * implements them.
 */

const proto = ElementInternals.prototype as unknown as Record<string, unknown>;

const methods: Record<string, () => unknown> = {
  setFormValue: () => undefined,
  setValidity: () => undefined,
  checkValidity: () => true,
  reportValidity: () => true,
};

for (const [name, implementation] of Object.entries(methods)) {
  if (!(name in proto)) {
    proto[name] = implementation;
  }
}

const validity: Partial<ValidityState> = {
  badInput: false,
  customError: false,
  patternMismatch: false,
  rangeOverflow: false,
  rangeUnderflow: false,
  stepMismatch: false,
  tooLong: false,
  tooShort: false,
  typeMismatch: false,
  valid: true,
  valueMissing: false,
};

const getters: Record<string, () => unknown> = {
  form: () => null,
  willValidate: () => true,
  validationMessage: () => '',
  validity: () => validity,
};

for (const [name, get] of Object.entries(getters)) {
  if (!(name in proto)) {
    Object.defineProperty(proto, name, { get, configurable: true });
  }
}
