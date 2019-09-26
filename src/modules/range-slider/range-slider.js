export function rangeSlider() {
    const leftRange = document.querySelector('.range-slider__range-left')
    let borderLeft = leftRange.getBoundingClientRect().left
    const rightRange = document.querySelector('.range-slider__range-right')

    leftRange.addEventListener('mousedown', (event) => {
        document.removeEventListener('mousemove', onMouseMove)
        leftRange.onmouseup = null

        let shiftX = event.clientX - leftRange.getBoundingClientRect().left
        let shiftY = event.clientY - leftRange.getBoundingClientRect().top
        let stateY = event.pageY
        document.body.append(leftRange)

        function moveAt(pageX, pageY) {

            if ((pageX+10 < rightRange.getBoundingClientRect().left) && (pageX > borderLeft)) {
                leftRange.style.left = pageX - shiftX + 'px';
            }
            

            leftRange.style.top = pageY - shiftY + 'px';
          }

        moveAt(event.pageX, event.pageY)

        function onMouseMove(event) {
            moveAt(event.pageX, stateY)
        }

        document.addEventListener('mousemove', onMouseMove)

        leftRange.onmouseup = function() {
            document.removeEventListener('mousemove', onMouseMove)
            leftRange.onmouseup = null
        }
    })

    leftRange.ondragstart = function() {
        return false
    }

}