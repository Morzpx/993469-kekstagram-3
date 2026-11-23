import { renderThumbnails, picturesContainer } from './thumbnails.js';
import { openBigPicture } from './big-picture.js';

const initGallery = (photos) => {
  renderThumbnails(photos);

  picturesContainer.addEventListener('click', (evt) => {
    const thumbnail = evt.target.closest('.picture[data-picture-id]');

    if (!thumbnail) {
      return;
    }

    evt.preventDefault();
    const photo = photos.find(({ id }) => id === Number(thumbnail.dataset.pictureId));

    if (photo) {
      openBigPicture(photo);
    }
  });
};

export { initGallery };
