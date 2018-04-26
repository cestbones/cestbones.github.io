/**
 * This is 100% not cross-browser.
 * We like to use cutting edge technologies in the organization.
 */
export const load = source => {
  const img = new Image();
  img.src = source;

  return img.decode().then(() => img);
};
