import {scaleValue, imgPreview} from './uploading-form';
// const scaleSmallerButton = imgUploadOverlay.querySelector('.scale__control--smaller');
// const scaleBiggerButton = imgUploadOverlay.querySelector('.scale__control--bigger');
// const scaleValue = imgUploadOverlay.querySelector('.scale__control--value');
// const imgPreview = imgUploadOverlay.querySelector('.img-upload__preview img');

function doImgSmaller () {
  if (parseInt(scaleValue.value, 10) !== 25) {
    imgPreview.style.transform = `scale(${parseInt(scaleValue.value, 10) / 100 - 0.25})`;
    scaleValue.value = `${parseInt(scaleValue.value, 10) - 25}%`;
  }
}

function doImgBigger () {
  if (parseInt(scaleValue.value, 10) !== 100) {
    imgPreview.style.transform = `scale(${parseInt(scaleValue.value, 10) / 100 + 0.25})`;
    scaleValue.value = `${parseInt(scaleValue.value, 10) + 25}%`;
  }
}

function setDefaultSizeImg () {
  imgPreview.style.transform = 'scale(1)';
  scaleValue.value = '100%';
}

export {doImgSmaller, doImgBigger, setDefaultSizeImg};
