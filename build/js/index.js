/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/pages/index/index.scss
var index = __webpack_require__(0);

// CONCATENATED MODULE: ./src/modules/dropdown/dropdown.js
/*export let dropdown = {

    get grossCount() {
        return this.grossCount
    },

    elementDropDown: document,

    toggleDropDown: function () {
        this.elementDropDown.classList.toggle('dropdown_open')
    },

    closeDropDown: function () {
        this.elementDropDown.classList.remove('dropdown_open')
    },

    init: function (element) {
        this.elementDropDown = document.querySelector(element)

        document.addEventListener('click', event => {
            this.closeDropDown()
        })

        this.elementDropDown.querySelector('.dropdown__menu').addEventListener('click', event => {
            event.stopPropagation()
        })

        this.elementDropDown.addEventListener('click', event => {
            event.stopPropagation()
            this.toggleDropDown()

        })
    }
}
*/


function dropdown() {

    let elementDropDown = document,
        gross = [],
        optionMenu = {},
        optionRow = []



    const toggleDropdown = () => {
        elementDropDown.classList.toggle('dropdown_open');
    }

    const dropDownClose = () => {
        elementDropDown.classList.remove('dropdown_open')
    }





    function init(elementClassName) {
        console.log('start init')
        elementDropDown = document.querySelector(elementClassName)

        function writeSelect() {
            let commonValue = 0
            let commonString = ''
            let isHaveCommon = false
            let addString = ''

            console.log('write prepare')

            function goodNaming(value, namingString) {

                /*
                if (value > 20) {
                    value -= 20
                    value = value % 10
                }*/
                console.log(' выбираем имя для ', value, namingString)
                if (value === 0) {
                    return namingString[2]
                } else if (value === 1) {
                    return namingString[0]
                } else if ((value > 1) && (value < 5)) {
                    return namingString[1]
                } else if ((value > 4)) {
                    return namingString[2]
                }
            }

            for (let i = 0; i < gross.length; i++) {
                console.log(optionRow[i].separate)
                if (optionRow[i].separate.length > 1) {
                    console.log('список нейминга больше 1')
                    // строка счиатется отдельно
                    if (gross[i] > 0) {
                        addString += ', ' + gross[i] + ' ' + goodNaming(gross[i], optionRow[i].separate)
                    }
                } else {
                    isHaveCommon = true
                    commonValue += gross[i]
                }
            }

            if (isHaveCommon) {
                commonString = commonValue + ' ' + goodNaming(commonValue, optionMenu.naming)
            }

            elementDropDown.querySelector('.dropdown__selection').innerHTML = commonString + addString

        }



        document.addEventListener('click', event => {
            if (!event.target.closest(elementClassName)) {
                dropDownClose()
            }

        })

        optionMenu.initSelection = elementDropDown.querySelector('.dropdown__selection').innerHTML
        optionMenu.naming = elementDropDown.querySelector('.dropdown__menu').dataset.separate.split(',')

        for (let i = 0; i < elementDropDown.querySelector('.dropdown__menu').childElementCount; i++) {

            let elementRow = elementDropDown.querySelector('.dropdown__menu').children[i]

            if (!elementRow.classList.contains('dropdown__menuRow_btn')) {
                //console.log(elementRow)

                // Обработка событий по нажатию кнопок инкремента и декремента
                gross[i] = Number(elementRow.dataset.mincount)


                optionRow[i] = {
                    mincount: gross[i],
                    maxcount: (Number(elementRow.dataset.maxcount)) ? Number(elementRow.dataset.maxcount) : Infinity,
                    separate: elementRow.dataset.separate.split(',')
                }

                elementRow.addEventListener('click', event => {
                    if (event.target.closest('.dropdown__controlDecrement')) {
                        if (gross[i] > optionRow[i].mincount) {
                            gross[i]--
                            elementRow.querySelector('.dropdown__controlCount').innerHTML = gross[i]
                            writeSelect()
                        }
                    }
                    if (event.target.closest('.dropdown__controlIncrement')) {
                        if (gross[i] < optionRow[i].maxcount) {
                            gross[i]++
                            elementRow.querySelector('.dropdown__controlCount').innerHTML = gross[i]
                            writeSelect()
                        }
                    }
                })
            } else {
                // Обработка событий по нажатию кнопок выбора и отмены
                elementRow.addEventListener('click', event => {
                    if (event.target.closest('.dropdown__btnClear')) {
                        for (let i = 0; i < optionRow.length; i++) {
                            gross[i] = optionRow[i].mincount
                            elementDropDown.querySelector('.dropdown__menu').children[i].querySelector('.dropdown__controlCount').innerHTML = gross[i]
                        }
                        elementDropDown.querySelector('.dropdown__selection').innerHTML = optionMenu.initSelection
                    }

                    if (event.target.closest('.dropdown__btnSubmit')) {
                        dropDownClose()
                    }
                })


            }
        }

        elementDropDown.addEventListener('click', event => {
            // Так как dropdown при раскрытии меню увеличивается на его размер, при клике для переключения 
            // открыть/закрыть необходимо исключить поле раскрытого меню
            if (!(event.target.closest('.dropdown__menu')) && (event.target.closest(elementClassName))) {
                toggleDropdown()
            }
        })

        console.log('end init')
    }

    function grossValue() {
        return gross
    }

    return {
        init: init,
        grossValue: grossValue
    }

}
// CONCATENATED MODULE: ./src/pages/index/index.js

//import '../../modules/text-field/text-field'






//dropdown.init('.dropdown')


/*let dropDownGuests = dropdown;
dropDownGuests.init('.dropdown')*/




let demoDropDown = dropdown().init('.dropdown')

/***/ })
/******/ ]);