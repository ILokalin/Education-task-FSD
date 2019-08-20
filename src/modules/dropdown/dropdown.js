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
    let gross = 3


    const toggleDropdown = () => {
        elementDropDown.classList.toggle('dropdown_open');
    }

    const dropDownClose = () => {
        elementDropDown.classList.remove('dropdown_open')
    }



    function init(elementClassName) {
        console.log('start init')
        elementDropDown = document.querySelector(elementClassName)

        document.addEventListener('click', () => {
            console.log('document have query for closing')
            dropDownClose()
        })

        elementDropDown.querySelector('.dropdown__menu').addEventListener('click', event => {
            event.stopPropagation()
        })

        elementDropDown.addEventListener('click', event => {
            event.stopPropagation()
            toggleDropdown()
            console.log('click')
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