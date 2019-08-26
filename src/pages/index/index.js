import './index.scss'
//import '../../modules/text-field/text-field'



import {
    dropdown
} from '../../modules/dropdown/dropdown.js'

import {
    expCheckboxList
} from '../../modules/exp-checkbox-list/exp-checkbox-list.js'

//dropdown.init('.dropdown')


/*let dropDownGuests = dropdown;
dropDownGuests.init('.dropdown')*/


//demoDrop1.__proto__ = dropdown('.dropdown')
//demoDrop2.__proto__ = dropdown('.dropdown_new')
let demoDropDown = new dropdown('.dropdownVisitors')
console.log('отправка новой инициализации')
let demoDropDown2 = new dropdown('.dropdownEnvarenment')
//let demoDropDown = dropdown().init('.dropdown')

let expCheckBoxList = expCheckboxList('.checkList-test')
console.log('список чекбоксов инициирован')
console.log(expCheckBoxList.getList())