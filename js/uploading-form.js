import {doImgSmaller, doImgBigger, setDefaultSizeImg} from './editing-image-size.js';
import {createSlider, deleteSlider, onEffectClick, setDefaultEffect} from './effects-slider.js';
const uploadingImgForm = document.querySelector('.img-upload__form');
const uploadControl = uploadingImgForm.querySelector('.img-upload__input');
const imgUploadOverlay = uploadingImgForm.querySelector('.img-upload__overlay');
const imgUploadButtonCancel = uploadingImgForm.querySelector('.img-upload__cancel');
const userImgComment = uploadingImgForm.querySelector('.text__description');
const userImgHashtags = uploadingImgForm.querySelector('.text__hashtags');
const scaleSmallerButton = imgUploadOverlay.querySelector('.scale__control--smaller');
const scaleBiggerButton = imgUploadOverlay.querySelector('.scale__control--bigger');
const scaleValue = imgUploadOverlay.querySelector('.scale__control--value');
const imgPreview = imgUploadOverlay.querySelector('.img-upload__preview img');
const sliderEffectContainer = imgUploadOverlay.querySelector('.effect-level');
const effectList = imgUploadOverlay.querySelector('.effects__list');


const onOverlayKeydown = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeUploadingModal();
  }
};

const onUploadButtonCancel = () => {
  closeUploadingModal();
};

function openUploadingModal () {
  imgUploadOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener ('keydown', onOverlayKeydown);
  imgUploadButtonCancel.addEventListener ('click', onUploadButtonCancel);
  uploadControl.removeEventListener('change', openUploadingModal);
  userImgComment.addEventListener('focus', onCommentFocus);
  userImgHashtags.addEventListener('focus', onHashtagFocus);
  scaleSmallerButton.addEventListener('click', doImgSmaller);
  scaleBiggerButton.addEventListener('click', doImgBigger);
  effectList.addEventListener('change', onEffectClick);
  sliderEffectContainer.classList.add('hidden');
  createSlider();

}

function closeUploadingModal () {
  imgUploadOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener ('keydown', onOverlayKeydown);
  imgUploadButtonCancel.removeEventListener ('click', onUploadButtonCancel);
  userImgComment.removeEventListener('focus', onCommentFocus);
  userImgComment.removeEventListener('blur', onCommentBlur);
  userImgHashtags.removeEventListener('focus', onHashtagFocus);
  userImgHashtags.removeEventListener('blur', onHashtagBlur);
  uploadControl.addEventListener('change', openUploadingModal);
  scaleSmallerButton.removeEventListener('click', doImgSmaller);
  scaleBiggerButton.removeEventListener('click', doImgBigger);
  effectList.removeEventListener('change', onEffectClick);
  setDefaultSizeImg();
  setDefaultEffect();
  deleteSlider();
  uploadControl.value = '';
  userImgComment.value = '';
  userImgHashtags.value = '';
}

uploadControl.addEventListener('change', openUploadingModal);

function onCommentFocus () {
  document.removeEventListener ('keydown', onOverlayKeydown);
  userImgComment.addEventListener('blur', onCommentBlur);
  userImgComment.removeEventListener('focus', onCommentFocus);
}

function onCommentBlur () {
  document.addEventListener ('keydown', onOverlayKeydown);
  userImgComment.addEventListener('focus', onCommentFocus);
  userImgComment.removeEventListener('blur', onCommentBlur);
}

function onHashtagFocus () {
  document.removeEventListener ('keydown', onOverlayKeydown);
  userImgHashtags.addEventListener('blur', onCommentBlur);
  userImgHashtags.removeEventListener('focus', onCommentFocus);
}

function onHashtagBlur () {
  document.addEventListener ('keydown', onOverlayKeydown);
  userImgHashtags.addEventListener('focus', onCommentFocus);
  userImgHashtags.removeEventListener('blur', onCommentBlur);
}

export {userImgComment, userImgHashtags, uploadingImgForm, imgUploadOverlay, scaleBiggerButton, scaleSmallerButton,scaleValue, imgPreview, sliderEffectContainer, effectList};
