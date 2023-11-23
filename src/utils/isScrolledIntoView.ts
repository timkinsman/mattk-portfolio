export function isScrolledIntoView(
  el: Element,
  threshold: 'partially' | 'majority' | 'completely' = 'partially'
) {
  const rect = el.getBoundingClientRect();
  const elemTop = rect.top;
  const elemBottom = rect.bottom;
  const elemHeight = rect.height;

  // Only completely visible elements return true:
  if (threshold === 'completely') {
    return elemTop >= 0 && elemBottom <= window.innerHeight;
  }

  if (threshold === 'majority') {
    return elemTop >= -(elemHeight / 2) && elemBottom <= window.innerHeight + elemHeight / 2;
  }

  // Partially visible elements return true:
  const isVisible = elemTop < window.innerHeight && elemBottom >= 0;
  return isVisible;
}
