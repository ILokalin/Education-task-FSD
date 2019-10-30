export function expCheckboxList(elementClassName) {
    let elementChekboxList = document.querySelector(elementClassName)

    const toggleCheckboxList = () => {
        elementChekboxList.classList.toggle('expandable-checkbox-list_open')
    }

    const closeCheckboxList = () => {
        elementChekboxList.classList.remove('expandable-checkbox-list_open')
    }


    function correctMark() {
        if (elementChekboxList.classList.contains('expandable-checkbox-list_open')) {
            elementChekboxList.querySelector('.expandable-checkbox-list__toggle-marker').innerText = 'expand_less'
        } else {
            elementChekboxList.querySelector('.expandable-checkbox-list__toggle-marker').innerText = 'expand_more'
        }
    }

    document.addEventListener('click', event => {
        if (!event.target.closest(elementClassName)) {
            closeCheckboxList()
            correctMark()
        }
    })

    document.addEventListener('click', event => {
        if (!(event.target.closest('.expandable-checkbox-list__menu')) && (event.target.closest(elementClassName))) {
            toggleCheckboxList()
            correctMark()
        }
    })

    function getList() {
        let grossCheckList = []
        for (let i = 0; i < elementChekboxList.querySelector('.expandable-checkbox-list__menu').children.length; i++) {
            let fieldCheckboxElement = elementChekboxList.querySelector('.expandable-checkbox-list__menu').children[i]
            grossCheckList[i] = {}
            grossCheckList[i].fieldCheckboxName = fieldCheckboxElement.querySelector('.field-checkbox').dataset.name
            grossCheckList[i].fieldCheckboxState = fieldCheckboxElement.querySelector('.field-checkbox__input').checked
        }
        return grossCheckList
    }

    correctMark()
   
    return {
        getList: getList
    }



}