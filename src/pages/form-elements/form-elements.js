import './form-elements.scss'


import 'air-datepicker/dist/js/datepicker'
import 'air-datepicker/dist/css/datepicker.min.css'

import '../../modules/comment/img/avatar.png'
import '../../modules/logo/images/logo.svg'
import '../../modules/logo/images/gray-logo.svg'

import {
    dropdown
} from '../../modules/dropdown/dropdown.js'

import {
    expCheckboxList
} from '../../modules/expandable-checkbox-list/expandable-checkbox-list.js'

import { RangeSlider } from '../../modules/range-slider/range-slider.js';
import { Pager } from './../../modules/pagination/pagination';

import { MaskedTextField } from '../../modules/masked-text-field/masked-text-field';

var ready = (callback) => {
    if (document.readyState != "loading") callback();
    else document.addEventListener("DOMContentLoaded", callback);
  }

ready(() => { 
    const maskedTextDate = new MaskedTextField('date')

    const demoDropDownVisitors              = new dropdown('.dropdown-visitors')
    const demoDropDownVisitorsWithoutClear  = new dropdown('.dropdown-visitors-without-clear')
    const demoDropDownVisitorsClear         = new dropdown('.dropdown-visitors-clear')

    // const demoDropDownEnarenment        = new dropdown('.dropdown-envarenment')
    const demoDropDownEnarenmentClose   = new dropdown('.dropdown-envarenment-close')
    const demoDropDownEnarenmentOpen    = new dropdown('.dropdown-envarenment-open')

    const expCheckBoxList       = expCheckboxList('.check-list-test')
    const expCheckBoxListOpen   = expCheckboxList('.check-list-test-open')
        
    const rangeSlider = new RangeSlider()
    // ur.update() //метод для изменений
    // let foog = ur.getValue() //чтение состояния

    const pager = new Pager({
        items: 15,
        itemsOnPage: 5,
        element: '.pager'
    })

});

