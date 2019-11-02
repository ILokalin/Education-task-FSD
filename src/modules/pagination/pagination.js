export class Pager {
    constructor(props = {})
    {
        // Принимает объект с ключами
        // items        число элементов
        // itemsOnPage  количество элементов на листе
        // element      DOM елемент для пагинатора
        this.items = props.items
        this.pagerPrev  = document.createElement('a')
        this.pagerNext  = document.createElement('a')
        this.pagerPrev.classList.add('pager__item','pager__item_prev', 'pager__item_hiden')
        this.pagerNext.classList.add('pager__item','pager__item_next')
        this.pagerPrev.innerText = 'arrow_backforward'
        this.pagerNext.innerText = 'arrow_forward'
        this.pagerVisible   = []
        this.itemsOnPage    = props.itemsOnPage
        this.element        = document.querySelector(props.element)
        this.child = document.createDocumentFragment()

        this.child.appendChild(this.pagerPrev)

        
        for (let i = 0; i < this.itemsOnPage; i++) {
            
            this.pagerVisible[i] = document.createElement('a')
            this.pagerVisible[i].classList.add('pager__item')

            // если число элементов меньше отображаемого числа, то создаем только их
            if (i >= this.items) {
                this.pagerVisible[i].classList.add('pager__item_empty')
            } else {
                this.pagerVisible[i].innerText = i+1
            }

            this.child.appendChild(this.pagerVisible[i])
        }

        // Первый элемент активный
        this.pagerVisible[0].classList.add('pager__item_active')

        this.pagerVisible[0].classList.add('pager__item_activ')

        if (this.items > this.itemsOnPage) {
            this.pagerVisible[this.itemsOnPage-2].classList.add('pager__item_free')
            this.pagerVisible[this.itemsOnPage-2].innerText = ''
            this.pagerVisible[this.itemsOnPage-1].innerText = this.items
        } 

        if (this.items > 1) {
            this.child.appendChild(this.pagerNext)
        }

        this.element.appendChild(this.child)
        }
    
    }
