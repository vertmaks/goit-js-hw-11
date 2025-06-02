export function createPromise(delay, state) {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      state === 'fulfilled' ? resolve(delay) : reject(delay);
    }, delay)
  );
}
