export function dropdown(elementClassName) {

    // console.log('настройка с ', elementClassName)

    let elementDropDown = document.querySelector(elementClassName),
        gross = [],
        optionMenu = {},
        optionRow = []


    const correctMark = () => {
        if (elementDropDown.classList.contains('dropdown_open')) {
            elementDropDown.querySelector('.dropdown__marker').innerText = 'expand_less'
        } else {
            elementDropDown.querySelector('.dropdown__marker').innerText = 'expand_more'
        }
    }

    const toggleDropdown = () => {
        elementDropDown.classList.toggle('dropdown_open')
        correctMark()
    }

    const dropDownClose = () => {
        elementDropDown.classList.remove('dropdown_open')
        correctMark()
    }



    function writeSelect() {
        let commonValue = 0
        let commonString = ''
        let isHaveCommon = false
        let addString = ''

        // console.log('write prepare')

        function goodNaming(value, namingString) {

            /*
            if (value > 20) {
                value -= 20
                value = value % 10
            }*/
            // console.log(' выбираем имя для ', value, namingString)
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
            // console.log(optionRow[i].separate)
            if (optionRow[i].separate.length > 1) {
                // console.log('список нейминга больше 1')
                // строка счиатется отдельно
                if (gross[i] > 0) {
                    if (addString !== '') {
                        addString += ', '
                    }
                    addString += gross[i] + ' ' + goodNaming(gross[i], optionRow[i].separate)
                }
            } else {
                isHaveCommon = true
                commonValue += gross[i]
            }
        }

        if (isHaveCommon) {
            commonString = commonValue + ' ' + goodNaming(commonValue, optionMenu.naming)
            if (addString !== '') {
                commonString += ', '
            }
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

        if (!elementRow.classList.contains('dropdown__menu-row_buttons')) {
            // Обработка событий по нажатию кнопок инкремента и декремента
            gross[i] = Number(elementRow.dataset.mincount)

            optionRow[i] = {
                mincount: gross[i],
                maxcount: (Number(elementRow.dataset.maxcount)) ? Number(elementRow.dataset.maxcount) : Infinity,
                separate: elementRow.dataset.separate.split(',')
            }

            elementRow.addEventListener('click', event => {
                if (event.target.closest('.dropdown__control-decrement')) {
                    if (gross[i] > optionRow[i].mincount) {
                        gross[i]--
                        elementRow.querySelector('.dropdown__control-count').innerHTML = gross[i]
                        writeSelect()
                    }
                }
                if (event.target.closest('.dropdown__control-increment')) {
                    if (gross[i] < optionRow[i].maxcount) {
                        gross[i]++
                        elementRow.querySelector('.dropdown__control-count').innerHTML = gross[i]
                        writeSelect()
                    }
                }
            })
        } else {
            // Обработка событий по нажатию кнопок выбора и отмены
            elementRow.addEventListener('click', event => {
                if (event.target.closest('.dropdown__button-clear')) {
                    for (let i = 0; i < optionRow.length; i++) {
                        gross[i] = optionRow[i].mincount
                        elementDropDown.querySelector('.dropdown__menu').children[i].querySelector('.dropdown__control-count').innerHTML = gross[i]
                    }
                    elementDropDown.querySelector('.dropdown__selection').innerHTML = optionMenu.initSelection
                }

                if (event.target.closest('.dropdown__button-submit')) {
                    dropDownClose()
                }
            })
        }
    }

    elementDropDown.addEventListener('click', event => {
        if (!(event.target.closest('.dropdown__menu')) && (event.target.closest(elementClassName))) {
            toggleDropdown()
        }
    })

    function getValue() {
        return gross
    }

    // console.log('настройка ', elementClassName, ' закончена')

    correctMark()

    return {
        getValue: getValue
    }

}