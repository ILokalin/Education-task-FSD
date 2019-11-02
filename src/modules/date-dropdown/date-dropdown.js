import 'air-datepicker/dist/js/datepicker.min'
import 'air-datepicker/dist/css/datepicker.min.css'
// Класс открывающегося date-picker
// Принимает в параметрах дату и функцию для обработки событий

export default class {
  constructor(props = {}) {

    const {element, onChangeFunction} = props;
    const today = new Date();

  
    $(element).datepicker({
      startDate: today,
      
      showButtonPanel: true,
      // dateFarmat: 'yy.mm.dd',
      // duration: 'slow',
      // toggleSelected: false,
      clearButton: true,
      // currentText: 'ОЧИСТИТЬ',
      closeText: 'ПРИМЕНИТЬ'
      })


  }
}