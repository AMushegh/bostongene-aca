export const StorageService = {
  getItem(storageKey, forceType) {
    let value = JSON.parse(window.localStorage.getItem(storageKey));

    switch (forceType) {
      case "string":
        return String(value);
      default:
        return value;
    }
  },

  setItem(storageKey, value) {
    return window.localStorage.setItem(storageKey, JSON.stringify(value));
  },
};
