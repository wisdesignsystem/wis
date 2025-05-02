export default function nextTick(fn: () => void, macro = false) {
  if (macro) {
    setTimeout(() => {
      fn();
    }, 0);
    return;
  }

  Promise.resolve().then(() => fn());
}
