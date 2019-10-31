import './search-room.scss';
import '@fortawesome/fontawesome-free/scss/fontawesome.scss';

import '../../images/room-350-1.jpg';
import '../../images/room-352-1.jpg';
import '../../images/room-444-1.jpg';
import '../../images/room-450-1.jpg';
import '../../images/room-666-1.jpg';
import '../../images/room-678-1.jpg';
import '../../images/room-740-1.jpg';
import '../../images/room-840-1.jpg';
import '../../images/room-856-1.jpg';
import '../../images/room-888-1.jpg';
import '../../images/room-980-1.jpg';
import '../../images/room-982-1.jpg';

import '../../images/room-350-2.jpg';
import '../../images/room-352-2.jpg';
import '../../images/room-444-2.jpg';
import '../../images/room-450-2.jpg';
import '../../images/room-666-2.jpg';
import '../../images/room-678-2.jpg';
import '../../images/room-740-2.jpg';
import '../../images/room-840-2.jpg';
import '../../images/room-856-2.jpg';
import '../../images/room-888-2.jpg';
import '../../images/room-980-2.jpg';
import '../../images/room-982-2.jpg';

import '../../images/room-350-3.jpg';
import '../../images/room-352-3.jpg';
import '../../images/room-444-3.jpg';
import '../../images/room-450-3.jpg';
import '../../images/room-666-3.jpg';
import '../../images/room-678-3.jpg';
import '../../images/room-740-3.jpg';
import '../../images/room-840-3.jpg';
import '../../images/room-856-3.jpg';
import '../../images/room-888-3.jpg';
import '../../images/room-980-3.jpg';
import '../../images/room-982-3.jpg';

import '../../images/room-350-4.jpg';
import '../../images/room-352-4.jpg';
import '../../images/room-444-4.jpg';
import '../../images/room-450-4.jpg';
import '../../images/room-666-4.jpg';
import '../../images/room-678-4.jpg';
import '../../images/room-740-4.jpg';
import '../../images/room-840-4.jpg';
import '../../images/room-856-4.jpg';
import '../../images/room-888-4.jpg';
import '../../images/room-980-4.jpg';
import '../../images/room-982-4.jpg';

// self modules import
import {Pager} from '../../modules/pagination/pagination';
import {RangeSlider} from '../../modules/range-slider/range-slider';
import {dropdown} from '../../modules/dropdown/dropdown';
import {expCheckboxList} from '../../modules/expandable-checkbox-list/expandable-checkbox-list';
import CardSelector from '../../modules/card-room/card-room';
// const cardSelector = new CardSelector();

var ready = (callback) => {
  if (document.readyState != "loading") callback();
  else document.addEventListener("DOMContentLoaded", callback);
}

ready(() => { 
  const cardSelector = new CardSelector();
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
