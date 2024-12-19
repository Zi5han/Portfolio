export const getAssetPath = (path) => {
  path = `/assets/${path}`;
  return new URL(path, import.meta.url).href;
};
