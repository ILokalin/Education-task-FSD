// Styles
import './cards.scss';

// Images
import '../../images/room-840-1.jpg';
import '../../images/room-840-2.jpg';
import '../../images/room-840-3.jpg';
import '../../images/room-840-4.jpg';
import '../../images/room-888-1.jpg';
import '../../images/room-888-2.jpg';
import '../../images/room-888-3.jpg';
import '../../images/room-888-4.jpg';

// modules
import { MaskedTextField } from '../../modules/masked-text-field/masked-text-field';
import DateDropDown from '../../modules/date-dropdown/date-dropdown.js';


var ready = (callback) => {
  if (document.readyState != "loading") callback();
  else document.addEventListener("DOMContentLoaded", callback);
}

ready(() => { 

  
  const dateArrival = new DateDropDown({element: '.form-selection-arrival'});
  const dateDeparture = new DateDropDown({element: '.form-selection-departure'});
  const maskedTextDate = new MaskedTextField('date');

  

});

