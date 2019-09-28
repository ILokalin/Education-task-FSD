import './index.scss'
//import '../../modules/text-field/text-field'

import 'ion-rangeslider/js/ion.rangeSlider.js'
import 'ion-rangeslider/css/ion.rangeSlider.min.css'

import {
    dropdown
} from '../../modules/dropdown/dropdown.js'

import {
    expCheckboxList
} from '../../modules/exp-checkbox-list/exp-checkbox-list.js'

import {
    rangeSlider
} from '../../modules/range-slider/range-slider.js'


import { testSlider } from './../../modules/test-slider/test-slider';

window.onload = function() {
let demoDropDown = new dropdown('.dropdownVisitors')
console.log('отправка новой инициализации')
let demoDropDown2 = new dropdown('.dropdownEnvarenment')


let expCheckBoxList = expCheckboxList('.checkList-test')
console.log('список чекбоксов инициирован')
console.log(expCheckBoxList.getList())

rangeSlider()

$(".js-range-slider").ionRangeSlider({
    type: "double",
    min: 0,
    max: 15,
    from: 5,
    to: 10,
    grid: true
});

}