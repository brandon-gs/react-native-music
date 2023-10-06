/**
 * we can't get images from lastFm so we use a external service
 */

export const getImageUrl = (
  seed: string,
  {width, height}: {width: number; height: number},
) => {
  return `https://picsum.photos/seed/${seed}/${width}/${height}`;
};
