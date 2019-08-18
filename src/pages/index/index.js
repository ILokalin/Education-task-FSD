import './index.scss'
//import '../../modules/text-field/text-field'
//import '../../modules/dropdown/dropdown'

console.log("Where are you?")


let elementDropDown = document.querySelector('.dropdown')


const toggleDropdown = () => {
    elementDropDown.classList.toggle('dropdown_open');
}

const dropDownClose = () => {
    elementDropDown.classList.remove('dropdown_open')
}

/*
class Menu {
    handleEvent(event) {
        // mousedown -> onMousedown
        let method = 'on' + event.type[0].toUpperCase() + event.type.slice(1);
        this[method](event);
    }

    onMousedown() {
        elem.innerHTML = "Кнопка мыши нажата";
    }

    onMouseup() {
        elem.innerHTML += "...и отжата.";
    }
}

let menu = new Menu();

*/
document.querySelector('body').addEventListener('click', (e) => {
    dropDownClose()
    console.log('I closed', e.target)
})

document.querySelector('.dropdown__menu').addEventListener('click', (e) => {
    e.stopPropagation()
})

elementDropDown.addEventListener('click', (e) => {
    e.stopPropagation()
    toggleDropdown()
    console.log('click')
})