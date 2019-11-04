import 'air-datepicker/dist/js/datepicker.min'
// import 'air-datepicker/dist/css/datepicker.min.css'

// Класс date-dropdown
// Принимает в параметрах дату и функцию для обработки событий
export default class {
  constructor(props = {}) {
    const {element, multipleElement, onChangeFunction} = props;

    // all for applyButton
    this.colorDarkShade25 = 'rgba(31, 32, 65, 0.25)';
    this.colorPurple = '#BC9CFF'
    this.applyButton = document.createElement('span');
    this.applyButton.classList.add('datepicker--button');
    this.applyButton.innerText = 'Применить'

    this.elementDOM = document.querySelector(element)
    this.multipleElementDOM = document.querySelector(multipleElement)
    this.selectedDates = []

    // call air-datepicker
    $(element).datepicker({
      startDate: new Date(),
      prevHtml: '<span class="datepicker--nav-prev">arrow_back</span>',
      nextHtml: '<span class="datepicker--nav-next">arrow_forward</span>',
      navTitles: {
        days: 'MM yyyy',
        months: 'yyyy',
        years: 'yyyy1 - yyyy2'
      },

      multipleDates: true,
      range: true,

      showButtonPanel: true,
      clearButton: true,

      onShow: (animationCompleted) => {
        if (!animationCompleted) {
          if (this.selectedDates.length < 2 || this.selectedDates.length === 'undefined') {
            this.applyButton.style.color = this.colorDarkShade25;
          }
        }

        // onShow itself updates the content in input - need to split
        const elementValue = this.elementDOM.value.split(",")
        if (elementValue.length > 1) { 
          $(element).val(elementValue[0]);
          $(multipleElement).val(elementValue[1]);
        }

      },

      onSelect: (formattedDate) => {
        if (formattedDate.length > 1) {
          $(element).val(formattedDate.split(",")[0]);
          $(multipleElement).val(formattedDate.split(",")[1]);

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

        const elementValue = this.elementDOM.value.split(",")
        if (elementValue.length > 1) { 
          $(element).val(elementValue[0]);
          $(multipleElement).val(elementValue[1]);
        }
      }
      });
    
      $(element).datepicker().data('datepicker').show();
      $(element).datepicker().data('datepicker').hide();



    //need clear multipleElement
    $(element).datepicker().data('datepicker').$datepicker.children('.datepicker--buttons').click((event) => {
      if (event.target.dataset.action === 'clear') {
        this.multipleElementDOM.value = '';
      }
    })
 
    // when datepicker created added applyButton
    $(element).datepicker().data('datepicker').$datepicker.children('.datepicker--buttons').append(this.applyButton);

    // Event onClick applyBatton
    this.applyButton.addEventListener('click', (event) => {
      event.stopPropagation();
      $(element).datepicker().data('datepicker').hide()
    }, false);
    
    // Event if click second date-dropdown or marker in dropdown
    this.elementDOM.closest('.date-dropdown').addEventListener('click', () => {
      $(element).datepicker().data('datepicker').show();
    })
    document.querySelector(multipleElement).closest('.date-dropdown').addEventListener('click', () => {
      $(element).datepicker().data('datepicker').show();
    })

  }
}