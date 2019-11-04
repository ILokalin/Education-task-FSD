// modules
import DateDropDown from '../../modules/date-dropdown/date-dropdown.js';
import {dropdown} from '../../modules/dropdown/dropdown';

export default class  {
  constructor() {
      this.date = {}

      const selectDatePicker = new DateDropDown({
        element: '#booking-arrival',
        multipleElement: '#booking-depature',
        onChangeFunction: this.applyButtonPress
      })

      const dropdownVisitors = new dropdown('.dropdown-form-booking');
  }
  

  applyButtonPress(selectDates) {
    console.log('APPLY BUTTON PRESS', selectDates )
  }
}
