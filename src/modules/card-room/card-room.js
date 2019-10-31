export default class {
  constructor() {
    const roomCard = document.querySelectorAll('.card-room');


    roomCard.forEach((card) => {
      const inputList = card.querySelectorAll('.card-room__input');
      inputList.forEach((inputSelector) => {
        inputSelector.addEventListener('click', (e) => {this.onCangeRadio(e)});
      })

      const sliderControl = card.querySelector('.card-room__controls');
      sliderControl.addEventListener('click', (e) => {this.onChangeSlider(e)});
    })


    
  }

  checkCurentPicture(parent) {
    // debugger
    return parent.querySelector("[type='radio']:checked").value;
  }

  renderPicture(roomObject) {
    const {parent, index} = roomObject;
    const fileName = './images/room-' + parent.dataset.room + '-' + index + '.jpg';
    // console.log(fileName);
    parent.querySelector('.card-room__image').setAttribute('src', fileName);
  }

  checkedIndex(roomObject) {
    const {parent, index} = roomObject;
    const element = parent.querySelectorAll('.card-room__input')
    parent.querySelectorAll('.card-room__input')[index-1].setAttribute('checked', 'true')
    debugger
  }

  onCangeRadio(e) {
    const target =e.target;
    this.renderPicture({
      parent: target.closest('.card-room'),
      index: target.value
    })
  }

  onChangeSlider(e) {
    const parent = e.target.closest('.card-room');
    let currentPicture = Number(this.checkCurentPicture(parent));


    
    if (e.target.classList.contains('card-room__slider-button_prev')) {
      if (currentPicture === 1) {currentPicture = 5}
      this.renderPicture({
        parent: parent,
        index: --currentPicture
      })
      console.log(currentPicture)
    } else if (e.target.classList.contains('card-room__slider-button_next')) {
      if (currentPicture === 4) {currentPicture = 0}
      this.renderPicture({
        parent: parent,
        index: ++currentPicture
      })
      console.log(currentPicture)
    }

    this.checkedIndex({
      parent: parent,
      index: currentPicture
    })
  }

}