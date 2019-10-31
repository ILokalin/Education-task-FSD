import './search-room.scss';
import '@fortawesome/fontawesome-free/scss/fontawesome.scss';

import '../../images/room-350.jpg';
import '../../images/room-352.jpg';
import '../../images/room-444.jpg';
import '../../images/room-450.jpg';
import '../../images/room-666.jpg';
import '../../images/room-678.jpg';
import '../../images/room-740.jpg';
import '../../images/room-840.jpg';
import '../../images/room-856.jpg';
import '../../images/room-888.jpg';
import '../../images/room-980.jpg';
import '../../images/room-982.jpg';

// self modules import
import {Pager} from '../../modules/pagination/pagination';
import {RangeSlider} from '../../modules/range-slider/range-slider';
import {dropdown} from '../../modules/dropdown/dropdown';
import {expCheckboxList} from '../../modules/expandable-checkbox-list/expandable-checkbox-list';
// import CardSelector from '../../modules/card-room/card-room';
// const cardSelector = new CardSelector();

var ready = (callback) => {
  if (document.readyState != "loading") callback();
  else document.addEventListener("DOMContentLoaded", callback);
}

ready(() => { 
  // const maskedTextDate = new MaskedTextField('date')

  const demoDropDownVisitors = new dropdown('.dropdown-visitors')

  const demoDropDownEnarenment        = new dropdown('.dropdown-envarenment')
  // const demoDropDownEnarenmentClose   = new dropdown('.dropdown-envarenment-close')
  // const demoDropDownEnarenmentOpen    = new dropdown('.dropdown-envarenment-open')

  const expCheckBoxList       = expCheckboxList('.check-list-test')
  // const expCheckBoxListOpen   = expCheckboxList('.check-list-test-open')
      
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

});
