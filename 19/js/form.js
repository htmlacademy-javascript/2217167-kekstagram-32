import { body, formUpload, imgUploadPreview } from './const.js';
import {onEscKeydown } from './util.js';
import { defaultEffect, onChangeEffect } from './slider.js';
import { scaleControl, scaleCancel } from './picture-editing.js';

const imgUploadCancel = formUpload.querySelector('.img-upload__cancel');
const imgUpload = formUpload.querySelector('.img-upload__input');
const imgUploadOverlay = formUpload.querySelector('.img-upload__overlay');

function openUploadOverlay () {
  imgUploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onEscKeydown);
  defaultEffect();
  onChangeEffect();
  scaleControl();
}

function closeUploadOverlay () {
  formUpload.reset();
  imgUploadPreview.style.transform = `scale(${1})`;
  defaultEffect();
  scaleCancel();
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