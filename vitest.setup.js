// NOTE: this file is run before each test suite, after the test environment is set up.
import '@testing-library/jest-dom/vitest';  // the “/vitest” version resolves the globals issue

// (Optional) polyfill localStorage if you need it
if (!globalThis.localStorage) {
  let store = {};
  globalThis.localStorage = {
    getItem: (key) => (key in store ? store[key] : null),
    setItem: (key, value) => (store[key] = value.toString()),
    removeItem: (key) => delete store[key],
    clear: () => (store = {})
  };
}
