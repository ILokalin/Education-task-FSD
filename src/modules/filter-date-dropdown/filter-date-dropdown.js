import 'air-datepicker/dist/js/datepicker.min';
// import 'air-datepicker/dist/css/datepicker.min.css'
// import '../air-datepicker/datepicker.css';

// Класс date-dropdown
// Принимает в параметрах дату и функцию для обработки событий
export default class {
  constructor(props = {}) {
    const {element, onChangeFunction} = props;

    // all for applyButton
    this.colorDarkShade25 = 'rgba(31, 32, 65, 0.25)';
    this.colorPurple = '#BC9CFF'
    this.applyButton = document.createElement('span');
    this.applyButton.classList.add('datepicker--button');
    this.applyButton.innerText = 'Применить'

    this.elementDOM = document.querySelector(element)
    this.selectedDates = []

    // call air-datepicker
    $(element).datepicker({
      // inline: true,
      prevHtml: '<span class="datepicker--nav-prev">arrow_back</span>',
      nextHtml: '<span class="datepicker--nav-next">arrow_forward</span>',
      dateFormat: 'dd M',

      navTitles: {
        days: 'MM yyyy',
        months: 'yyyy',
        years: 'yyyy1 - yyyy2'
    },

      multipleDates: true,

      multipleDatesSeparator: ' - ',

      range: true,

      startDate: new Date(),

      showButtonPanel: true,

      clearButton: true,

      onShow: (animationCompleted) => {
        if (!animationCompleted) {
          if (this.selectedDates.length < 2 || this.selectedDates.length === 'undefined') {
            this.applyButton.style.color = this.colorDarkShade25;
          }
        }

        // onShow itself updates the content in input - need to split
        // const elementValue = this.elementDOM.value.split(",")
        // if (elementValue.length > 1) { 
        //   $(element).val(elementValue[0]);
        //   $(multipleElement).val(elementValue[1]);
        // }

      },

      onSelect: (formattedDate) => {
        if (formattedDate.length > 1) {
          // $(element).val(formattedDate.split(",")[0]);
          // $(multipleElement).val(formattedDate.split(",")[1]);

          this.applyButton.style.color = this.colorPurple;
          this.selectedDates = formattedDate;
        }
      },

      onHide: (inst, animationCompleted) => {
        if (!animationCompleted) {
          if (inst.selectedDates.length < 2) {
            this.selectedDates = {};
          } else {
            // closing with selected date equals press applyButton
            onChangeFunction(this.selectedDates);
          }
        }
      }
      });
    
    // when datepicker created added applyButton
    $(element).datepicker().data('datepicker').$datepicker.children('.datepicker--buttons').append(this.applyButton);

    // Event onClick applyBatton
    this.applyButton.addEventListener('click', () => {$(element).datepicker().data('datepicker').hide()}, false);
    
    // Event if click second date-dropdown
    this.elementDOM.closest('.filter-date-dropdown').addEventListener('click', () => {
      $(element).datepicker().data('datepicker').show();
    })
    
  }
}