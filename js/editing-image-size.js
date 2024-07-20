import {scaleValue, imgPreview} from './uploading-form';

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
