/* globals global */

export default (() => {
  if (typeof self !== 'undefined') {
    return self;
  } else if (typeof window !== 'undefined') {
    return window;
  } else if (typeof globalThis !== 'undefined') {
    return globalThis;
  } else {
    return Function('return this')();
  }
})();
