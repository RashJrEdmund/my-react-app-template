// USING SESSIONSTORAGE

export const getFromLocalStorage = (key) =>
  JSON.parse(localStorage.getItem(key));

export const saveToLocalStorage = (key, value) =>
  localStorage.setItem(key, JSON.stringify(value));

// USING SESSIONSTORAGE

export const getFromSessionStorage = (key) =>
  JSON.parse(sessionStorage.getItem(key));

export const saveToSessionStorage = (key, value) =>
  sessionStorage.setItem(key, JSON.stringify(value));
