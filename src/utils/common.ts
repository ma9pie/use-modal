// Generate uid
export const createUid = () => {
  if (typeof window !== undefined && window.crypto) {
    const array = new Uint32Array(1);
    window.crypto.getRandomValues(array);
    return array[0].toString(36);
  } else {
    return Math.random().toString(36).substring(2, 9);
  }
};

// Delay
export const delay = (ms: number) => {
  return new Promise((r) => setTimeout(r, ms));
};
