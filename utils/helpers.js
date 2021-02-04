export const getScrollY = () => {
  return window.scrollY || window.pageYOffset;
}

/*
 * Takes a string and stips HTML tags from it
 */
export const stripTags = (str = '') => {
  return str.replace(/<[^>]*>?/gm, "")
}

export const isTouch = () => {
  if (typeof window === 'undefined') {
    return false 
  }

  if ('ontouchstart' in window) {
    return true
  }

  if (window.DocumentTouch && document instanceof DocumentTouch) {
    return true
  }

  if (window.navigator.userAgent.match(/iphone|ipad|android/i)) {
    return true
  }

  const prefixes = ["", "-webkit-", "-moz-", "-o-", "-ms-"];
  const queries = prefixes.map(prefix => `(${prefix}touch-enabled)`);

  return window.matchMedia(queries.join(",")).matches;
}