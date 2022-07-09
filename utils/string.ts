export const addRoot = (path: string | undefined) => {
  if (!path) return "";
  return `https://content.tanakorn.space${path}`;
};
