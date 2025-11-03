import '@testing-library/jest-dom/vitest'; // extends expect

// Optional: polyfill localStorage
if (!globalThis.localStorage) {
  let store = {};
  globalThis.localStorage = {
    getItem: (key) => (key in store ? store[key] : null),
    setItem: (key, value) => (store[key] = value.toString()),
    removeItem: (key) => delete store[key],
    clear: () => (store = {})
  };
}
