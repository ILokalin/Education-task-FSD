export default class {
  constructor() {
    const roomCard = document.querySelectorAll('.card-room');
    // let showTimer = setInterval(function(){}, 2000);
    // let stateIntervalTimer = false;


    roomCard.forEach((card) => {
      const inputList = card.querySelectorAll('.card-room__input');
      inputList.forEach((inputSelector) => {
        inputSelector.addEventListener('click', (e) => {this._onCangeRadio(e)});

        inputSelector.closest('.card-room__select-label').addEventListener('mouseover', (e) => {this._onCangeRadioLazy(e)}, true)
      })

      const sliderControl = card.querySelector('.card-room__controls');
      sliderControl.addEventListener('click', (e) => {this._onChangeSlider(e)});

      card.showTimer = setInterval(function(){}, 2000);
      card.stateIntervalShow = false;
      card.addEventListener('mouseover', (e) => {this._onMousOver(e)})
      card.addEventListener('mouseout', (e) => {this._onMouseOut(e)}, true)
    })
  }

  _checkCurentPicture(parent) {
    return Number(parent.querySelector("[type='radio']:checked").value);
  }

  _showPicture(roomObject) {
    const {parent, index} = roomObject;
    const fileName = './images/room-' + parent.dataset.room + '-' + index + '.jpg';
    parent.querySelector('.card-room__image').setAttribute('src', fileName);
  }

  _checkedIndex(roomObject) {
    const {parent, index} = roomObject;
    const element = parent.querySelectorAll('.card-room__input')[index]
    element.checked = true;
  }

  _uncheckedIndex(roomObject) {
    const {parent, index} = roomObject;
    const element = parent.querySelectorAll('.card-room__input')[index]
    element.checked = false;
  }

  _nextPicture(parent) {
    let currentPicture = this._checkCurentPicture(parent) - 1;
    this._uncheckedIndex({
      parent: parent,
      index: currentPicture
    })
    if (currentPicture === 3) {currentPicture = -1}
    this._showPicture({
      parent: parent,
      index: ++currentPicture + 1
    })
    this._checkedIndex({
      parent: parent,
      index: currentPicture
    })

  }

  _stopTimer(parent) {
    clearInterval(parent.showTimer)
    parent.stateIntervalTimer = false;
  }

  _startTimer(parent) {
    parent.showTimer = setInterval(() => {
      this._nextPicture(parent)
    }, 5000);
    parent.stateIntervalTimer = true;
  }

  _onMouseOut(e) {
    const parent = e.target.closest('.card-room');
    this._stopTimer(parent);
  }

  _onMousOver(e) {
    // console.log(e.target)
    const parent = e.target.closest('.card-room');
    if (!parent.stateIntervalTimer) {
      this._startTimer(parent);
    }
  }

  _onCangeRadioLazy(e) {
    const target = e.target;
    const parent = e.target.closest('.card-room');
    const overLabel = target.closest('.card-room__select-label');
    
    this._stopTimer(parent);

    let currentPicture = this._checkCurentPicture(parent) - 1;
    this._uncheckedIndex({
      parent: parent,
      index: currentPicture
    })

    currentPicture = Number(overLabel.querySelector('.card-room__input').value)
    this._showPicture({
      parent: parent,
      index: currentPicture
    })

    console.log(currentPicture)
    this._checkedIndex({
      parent: parent,
      index: currentPicture - 1
    })

    this._startTimer(parent);
  }

  _onCangeRadio(e) {
    const target = e.target;
    const parent = target.closest('.card-room');

    // Необходимо остановить запущенный таймер
    this._stopTimer(parent);

    this._showPicture({
      parent: parent,
      index: target.value
    })

    // Опционально можно запустить новый таймер - если это удобно
    this._startTimer(parent);
  }

  _onChangeSlider(e) {
    const parent = e.target.closest('.card-room');

    // Необходимо остановить запущенный таймер
    this._stopTimer(parent);


    let currentPicture = this._checkCurentPicture(parent) - 1;
    this._uncheckedIndex({
      parent: parent,
      index: currentPicture
    })

    
    if (e.target.classList.contains('card-room__slider-button_prev')) {
      if (currentPicture === 0) {currentPicture = 4}
      this._showPicture({
        parent: parent,
        index: --currentPicture + 1
      })
    } else if (e.target.classList.contains('card-room__slider-button_next')) {
      if (currentPicture === 3) {currentPicture = -1}
      this._showPicture({
        parent: parent,
        index: ++currentPicture + 1
      })
    }

    this._checkedIndex({
      parent: parent,
      index: currentPicture
    })

    // Опционально можно запустить новый таймер - если это удобно
    this._startTimer(parent);
  }

}