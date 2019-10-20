export const getLocalStorage = key => {
  if (typeof window === 'undefined' ||
    !window.localStorage ||
    typeof window.localStorage.getItem !== 'function') {
    return null;
  }

  const value = window.localStorage.getItem(key);
  return JSON.parse(value);
};

export const setLocalStorage = (key, value) => {
  if (typeof window === 'undefined' ||
    !window.localStorage ||
    typeof window.localStorage.setItem !== 'function') {
    return null;
  }

  const stringValue = JSON.stringify(value);
  return window.localStorage.setItem(key, stringValue);
};