import { body, formUpload } from './const.js';
import {onEscKeydown } from './util.js';

const imgUploadCancel = formUpload.querySelector('.img-upload__cancel');
const imgUpload = formUpload.querySelector('.img-upload__input');
const imgUploadOverlay = formUpload.querySelector('.img-upload__overlay');

function openUploadOverlay () {
  imgUploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onEscKeydown);
}

function closeUploadOverlay () {
  formUpload.reset();
  imgUploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onEscKeydown);
}

imgUpload.addEventListener('change', () => {
  openUploadOverlay();
});

imgUploadCancel.addEventListener('click', () => {
  closeUploadOverlay();
});


export { openUploadOverlay, closeUploadOverlay };
