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


export function dropdown() {

    let elementDropDown = document
    let gross = []


    const toggleDropdown = () => {
        elementDropDown.classList.toggle('dropdown_open');
    }

    const dropDownClose = () => {
        elementDropDown.classList.remove('dropdown_open')
    }



    function init(elementClassName) {
        console.log('start init')
        elementDropDown = document.querySelector(elementClassName)


        
        document.addEventListener('click', event => {
            if (!event.target.closest(elementClassName)) {
                dropDownClose()
            }
            
        })

        
        
        for (let i = 0; i<elementDropDown.querySelector('.dropdown__menu').childElementCount; i++) {

            let elementRow = elementDropDown.querySelector('.dropdown__menu').children[i]

            if (elementRow.classList !== '.dropdown__menuRow_btn') {

                // Обработка событий по нажатию кнопок инкремента и декремента
                gross[i] = Number(elementRow.dataset.mincount)
                
                let optionRow = {
                    mincount: gross[i],
                    maxcount: (Number(elementRow.dataset.maxcount)) ? Number(elementRow.dataset.maxcount) : Infinity,
                    separate: elementRow.dataset.separate
                }
                elementRow.addEventListener('click', event => {
                    if (event.target.closest('.dropdown__controlDecrement')) {
                        if (gross[i] > optionRow.mincount) {
                            gross[i] --
                            elementRow.querySelector('.dropdown__controlCount').innerHTML = gross[i]
                        }
                    }
                    if (event.target.closest('.dropdown__controlIncrement')) {
                        if (gross[i] < optionRow.maxcount) {
                            gross[i] ++
                            elementRow.querySelector('.dropdown__controlCount').innerHTML = gross[i]
                        }
                    }
                })
            } else {
                // Обработка событий по нажатию кнопок выбора и отмены

            }
        }

        elementDropDown.addEventListener('click', event => {
            if (event.target.closest('.dropdown__menu')) {
                console.log('click in menu')
            } else if (event.target.closest(elementClassName)) {
                toggleDropdown()
            }
            console.log(event.target.closest(elementClassName))
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