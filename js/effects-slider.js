import {imgUploadOverlay, imgPreview, effectList, sliderEffectContainer} from './uploading-form.js';
const effectSlider = imgUploadOverlay.querySelector('.effect-level__slider');
const effectValue = imgUploadOverlay.querySelector('.effect-level__value');

function createSlider () {
  noUiSlider.create(effectSlider, {
    range: {
      min: 0,
      max: 1,
    },
    start: 1,
    step: 0.1,
    connect: 'lower',
  });
  effectSlider.noUiSlider.on('update', () => {
    effectValue.value = effectSlider.noUiSlider.get();
    const selectedEffect = effectList.querySelector('input[type="radio"]:checked');
    switch (selectedEffect.id) {
      case 'effect-chrome':
        imgPreview.style.filter = `grayscale(${effectValue.value})`;
        break;
      case 'effect-sepia':
        imgPreview.style.filter = `sepia(${effectValue.value})`;
        break;
      case 'effect-marvin':
        imgPreview.style.filter = `invert(${effectValue.value}%)`;
        break;
      case 'effect-phobos':
        imgPreview.style.filter = `blur(${effectValue.value}px)`;
        break;
      case 'effect-heat':
        imgPreview.style.filter = `brightness(${effectValue.value})`;
    }
  });
}

function deleteSlider () {
  effectSlider.noUiSlider.destroy();
}

function setDefaultEffect () {
  effectList.querySelector('.effects__radio:first-child').checked = true;
  imgPreview.style.filter = 'none';
}

function onEffectClick (evt) {
  if (evt.target.closest('.effects__radio').checked) {
    const selectedEffect = evt.target.closest('.effects__radio');
    sliderEffectContainer.classList.toggle('hidden', false, selectedEffect.id !== 'effect-none');
    switch (selectedEffect.id) {
      case 'effect-none':
        sliderEffectContainer.classList.add('hidden');
        imgPreview.style.filter = 'none';
        break;
      case 'effect-chrome':
        effectSlider.noUiSlider.updateOptions({
          range: {
            min: 0,
            max: 1,
          },
          start: 1,
          step: 0.1,
        });
        imgPreview.style.filter = `grayscale(${effectValue.value})`;
        break;
      case 'effect-sepia':
        effectSlider.noUiSlider.updateOptions({
          range: {
            min: 0,
            max: 1,
          },
          start: 1,
          step: 0.1,
        });
        break;
      case 'effect-marvin':
        effectSlider.noUiSlider.updateOptions({
          range: {
            min: 0,
            max: 100,
          },
          start: 100,
          step: 1,
        });
        break;
      case 'effect-phobos':
        effectSlider.noUiSlider.updateOptions({
          range: {
            min: 0,
            max: 3,
          },
          start: 3,
          step: 0.1,
        });
        break;
      case 'effect-heat':
        effectSlider.noUiSlider.updateOptions({
          range: {
            min: 1,
            max: 3,
          },
          start: 3,
          step: 0.1,
        });
    }
  }
}

export {createSlider, deleteSlider, onEffectClick, setDefaultEffect};
