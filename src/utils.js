const assets = import.meta.glob('/assets/**/*', {
  eager: true,
  query: '?url',
  import: 'default'
});

export const getAssetPath = (path) => {
  const key = `/assets/${path}`;

  const asset = assets[key];

  if (!asset) {
    console.warn(`Asset not found: ${key}`);
    return '';
  }

  return asset;
};
