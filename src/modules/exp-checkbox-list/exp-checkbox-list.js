export function expCheckboxList(elementClassName) {
    let elementChekboxList = document.querySelector(elementClassName)

    const toggleCheckboxList = () => {
        elementChekboxList.classList.toggle('exp-checkbox-list_open')
    }

    const closeCheckboxList = () => {
        elementChekboxList.classList.remove('exp-checkbox-list_open')
    }


    function correctMark() {
        if (elementChekboxList.classList.contains('exp-checkbox-list_open')) {
            elementChekboxList.querySelector('.exp-checkbox-list__mark').innerText = 'expand_less'
        } else {
            elementChekboxList.querySelector('.exp-checkbox-list__mark').innerText = 'expand_more'
        }
    }

    document.addEventListener('click', event => {
        if (!event.target.closest(elementClassName)) {
            closeCheckboxList()
            correctMark()
        }
    })

    document.addEventListener('click', event => {
        if (!(event.target.closest('.exp-checkbox-list__menu')) && (event.target.closest(elementClassName))) {
            toggleCheckboxList()
            correctMark()
        }
    })

    function getList() {
        let grossCheckList = []
        for (let i = 0; i < elementChekboxList.querySelector('.exp-checkbox-list__menu').children.length; i++) {
            let fieldCheckboxElement = elementChekboxList.querySelector('.exp-checkbox-list__menu').children[i]
            grossCheckList[i] = {}
            grossCheckList[i].fieldCheckboxName = fieldCheckboxElement.querySelector('.field-checkbox').dataset.name
            grossCheckList[i].fieldCheckboxState = fieldCheckboxElement.querySelector('.field-checkbox__input').checked
        }
        return grossCheckList
    }

    correctMark()
    console.log('модуль инициализации пройден')

    return {
        getList: getList
    }



}