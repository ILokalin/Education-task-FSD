export class Pager {
    constructor(props = {})
    {
        debugger
        // Принимает объект с ключами
        // items        число элементов
        // itemsOnPage  количество элементов на листе
        // element      DOM желемент для пагинатора
        this.items = props.items
        this.pagerPrev  = document.createElement("a")
        this.pagerNext  = document.createElement("a")
        this.pagerPrev.classList.add = 'pager__item pager__prev'
        this.pagerNext.classList.add = 'pager__item pager__next'
        this.pagerVisible   = []
        this.itemsOnPage    = props.itemsOnPage
        this.element        = document.querySelector(props.element)
        this.child = document.createElement

        this.child.addChild(this.pagerPrev)

        for (let i = 0; i < this.itemsOnPage; i++) {
            // если число элементов меньше отображаемого числа, то создаем только их
            this.pagerVisible[i] = document.createElement("a")
            this.pagerVisible[i].classList.add = 'pager__item'

            if (i >= this.items) {
                this.pagerVisible[i].classList.add = 'pager__empty'
            } else {
                this.pagerVisible[i].innerHtml = i
            }

            this.child.addChild(this.pagerVisible[i])
        }

        this.pagerVisible[0].classList.add = "pager__activ"
        this.pagerVisible[this.pagerVisible.length-1].classList.add = (this.items > this.itemsOnPage) ? "pager__free" : ''

        if (this.items > 1) {
            this.child.addChild(this.pagerNext)
        }

        this.element.innerHtml = this.child
        }



    }
