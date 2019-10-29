import './search-room.scss';
import '@fortawesome/fontawesome-free/scss/fontawesome.scss';

// self modules import
import {Pager} from '../../modules/pagination/pagination';


var ready = (callback) => {
  if (document.readyState != "loading") callback();
  else document.addEventListener("DOMContentLoaded", callback);
}

ready(() => { 
  // const maskedTextDate = new MaskedTextField('date')

  // const demoDropDownVisitors              = new dropdown('.dropdown-visitors')
  // const demoDropDownVisitorsWithoutClear  = new dropdown('.dropdown-visitors-without-clear')
  // const demoDropDownVisitorsClear         = new dropdown('.dropdown-visitors-clear')

  // // const demoDropDownEnarenment        = new dropdown('.dropdown-envarenment')
  // const demoDropDownEnarenmentClose   = new dropdown('.dropdown-envarenment-close')
  // const demoDropDownEnarenmentOpen    = new dropdown('.dropdown-envarenment-open')

  // const expCheckBoxList       = expCheckboxList('.check-list-test')
  // const expCheckBoxListOpen   = expCheckboxList('.check-list-test-open')
      
  // const rangeSlider = new RangeSlider({
  //     from: 4700
  // })
  // ur.update() //метод для изменений
  // let foog = ur.getValue() //чтение состояния

  const pager = new Pager({
      items: 15,
      itemsOnPage: 5,
      element: '.pager'
  })

});
