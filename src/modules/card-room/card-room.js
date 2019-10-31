export default class {
  constructor() {
    const con = console.log();
    // con('work');
    console.log('eeeee')
    this.cardsList = []
    const roomCard = document.querySelectorAll('.room-card');

    roomCard.forEach((card) => {
      const inputList = card.querySelectorAll('.card-room__input');
      inputList.forEach((inputSelector) => {
        inputSelector.addEventListener('click', this.changeImage(event));
      })
    })



    // this.changeImage = this.changeImage.bind(this);
  }

  changeImage (event) {
    const imageNum = event.target.value
    console.log(event.target)
  }
}