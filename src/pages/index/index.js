import './index.scss'
//import '../../modules/text-field/text-field'



import {
    dropdown
} from '../../modules/dropdown/dropdown.js'

import {
    expCheckboxList
} from '../../modules/exp-checkbox-list/exp-checkbox-list.js'

import {
    rangeSlider
} from '../../modules/range-slider/range-slider.js'

window.onload = function() {
let demoDropDown = new dropdown('.dropdownVisitors')
console.log('отправка новой инициализации')
let demoDropDown2 = new dropdown('.dropdownEnvarenment')


let expCheckBoxList = expCheckboxList('.checkList-test')
console.log('список чекбоксов инициирован')
console.log(expCheckBoxList.getList())

rangeSlider()

}