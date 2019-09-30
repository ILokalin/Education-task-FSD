
import 'ion-rangeslider/js/ion.rangeSlider.js'

export function rangeSlider(props = {}, element = '.range-slider') {

    const sliderElement = document.querySelector(element + ' .range-slider__input')

    $(sliderElement).ionRangeSlider({
        type: "double",
        min: 0,
        max: 15000,
        from: props.from || 5000,
        to: props.to    || 10000,
        grid: false,
        postfix: 'P',
        onChange: function (data) {
        
        }
    })

    function update (props = {}) {
        let range = $(sliderElement).data("ionRangeSlider")
 
        props.from = props.from || range.options.min
        props.to = props.to || range.options.max
        range.update({
            from: props.from,
            to: props.to
        })
    }

    function getValue () {
        const range = $(sliderElement).data("ionRangeSlider");
        return {
            from: range.options.from,
            to: range.options.to
        }
    }

    return {
        getValue: getValue,
        update: update
    }
}



