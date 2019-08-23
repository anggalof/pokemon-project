import imageNotFound from '../../public/image-not-found.png';

export const getImageUrl = (imageId, type) => {
  if (!imageId) {
    return imageNotFound;
  }

  let imageURL = `https://image.tmdb.org/t/p/w92${imageId}`;
  if (type === 'original') {
    imageURL = `https://image.tmdb.org/t/p/original/${imageId}`;
  }
  return imageURL;
};
