export default function nextTick(fn: () => void, macro: boolean) {
  if (macro) {
    setTimeout(() => {
      fn();
    }, 0);
  } else {
    Promise.resolve().then(() => fn());
  }
}
