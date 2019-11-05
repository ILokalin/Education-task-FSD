import './search-room.scss';
import '@fortawesome/fontawesome-free/scss/fontawesome.scss';


require.context("../../images/", true, /\.(png|svg|jpg|gif)$/);

// self modules import
import {Pager} from '../../modules/pagination/pagination';
import {RangeSlider} from '../../modules/range-slider/range-slider';
import {dropdown} from '../../modules/dropdown/dropdown';
import {expCheckboxList} from '../../modules/expandable-checkbox-list/expandable-checkbox-list';
import CardSelector from '../../modules/card-room/card-room';
import FilterDatePicker from '../../modules/filter-date-dropdown/filter-date-dropdown';
// const cardSelector = new CardSelector();

var ready = (callback) => {
  if (document.readyState != "loading") callback();
  else document.addEventListener("DOMContentLoaded", callback);
}

ready(() => { 
  const filterDatePicker = new FilterDatePicker({
    element: '#filter-date-picker'
  })

  const cardSelector = new CardSelector();

  const demoDropDownVisitors = new dropdown('.dropdown-visitors')

  const demoDropDownEnarenment        = new dropdown('.dropdown-envarenment')
  
  const expCheckBoxList       = expCheckboxList('.check-list-test')
  
      
  const rangeSlider = new RangeSlider({
      from: 4700,
      to: 10000
  })
  // ur.update() //метод для изменений
  // let foog = ur.getValue() //чтение состояния

  const pager = new Pager({
      items: 15,
      itemsOnPage: 5,
      element: '.pager'
  })

  // window.onresize = function message() {
  //   windowResize();
  // }

  // let resizeTimerID;
  // let sizeNow = 'max'; //max - more then 1000px, min - short then 1000px

  // function windowResize() {
  //   clearTimeout(resizeTimerID);
  //   resizeTimerID = setTimeout(() =>{resizeWindowGo()}, 200);
  // }

  // function resizeWindowGo() {
  //   if (document.body.clientWidth < 1000) {
  //     const allCards = document.querySelectorAll('.screen-cards__room-card');
  //     const rowForCard = document.querySelector('.screen-cards__row-cards');
  //     const cardsRegion = document.querySelector('.screen-cards__filter-result');
  //     let newFragment = document.createDocumentFragment();

  //     // debugger
  //     for (let i = 0; i < allCards.length; i = i + 2) {
  //       const newRowForCard = rowForCard.cloneNode(false);
  //       newRowForCard.append(allCards[i].cloneNode(true));
  //       newRowForCard.append(allCards[i+1].cloneNode(true));
  //       newFragment.appendChild(newRowForCard);
  //     }

  //     const objectForRemove = cardsRegion.querySelectorAll('.screen-card__room-card');
  //     objectForRemove.forEach((card) => {card.remove()})
  //     cardsRegion.appendChild(newFragment);
      


  //   }
  // }

});
