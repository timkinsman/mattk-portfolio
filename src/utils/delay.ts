export function delay<T>(promise: Promise<T>, delay = 2000) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  }).then(() => promise);
}
