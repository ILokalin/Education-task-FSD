
// modules
import DateDropDown from '../../modules/date-dropdown/date-dropdown.js';
import {dropdown} from '../../modules/dropdown/dropdown';

export default class  {
  constructor() {
      this.date = {}

      const selectDatePicker = new DateDropDown({
        element: '#form-selection-arrival',
        multipleElement: '#form-selection-departure',
        onChangeFunction: this.applyButtonPress
      })

      const dropdownVisitors = new dropdown('.dropdown-visitors');
  }
  

  applyButtonPress(selectDates) {
    console.log('APPLY BUTTON PRESS', selectDates )
  }
}

