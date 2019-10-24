import './index.scss'


import 'air-datepicker/dist/js/datepicker'
import 'air-datepicker/dist/css/datepicker.min.css'



// import {
//     dropdown
// } from '../../modules/dropdown/dropdown.js'

// import {
//     expCheckboxList
// } from '../../modules/expandable-checkbox-list/expandable-checkbox-list.js'

// import { RangeSlider } from '../../modules/range-slider/range-slider.js';
// import { Pager } from './../../modules/pagination/pagination';

// import { MaskedTextField } from '../../modules/masked-text-field/masked-text-field';


var ready = (callback) => {
    if (document.readyState != "loading") callback();
    else document.addEventListener("DOMContentLoaded", callback);
  }

ready(() => { 

    $("#datepicker-arrival").datepicker({
    multipleDates: true,
    onSelect: function (fd){
      $('#datepicker-arrival').val(fd.split(",")[0]);
      $('#datepicker-depart').val(fd.split(",")[1]);
    },
    showButtonPanel: true,
    dateFarmat: 'yy.mm.dd',
    duration: 'slow',
    range: true,
    toggleSelected: false,
    clearButton: true,
    currentText: 'ОЧИСТИТЬ',
    closeText: 'ПРИМЕНИТЬ'
    })

    $("#datepicker-depart").datepicker({
      multipleDates: true,
      onSelect: function (fd){
        $('#datepicker-arrival').val(fd.split(",")[0]);
        $('#datepicker-depart').val(fd.split(",")[1]);
      },
      showButtonPanel: true,
      dateFarmat: 'yy.mm.dd',
      duration: 'slow',
      range: true,
      toggleSelected: false,
      clearButton: true,
      currentText: 'ОЧИСТИТЬ',
      closeText: 'ПРИМЕНИТЬ'
      })

});

