
import 'ion-rangeslider/js/ion.rangeSlider.js'

export class RangeSlider {
    constructor(props = {}, element = '.range-slider')
    {
        this.props = props
        this.element = element
        this.sliderElement = document.querySelector(element + ' .range-slider__input')

        function writeValue(data) {
            function spaceThousend(value) {
                let valueSpace = '';
                for (let i = 0; i < value.length; i++) {
                    if ((value.length - i) % 3 === 0) {
                        valueSpace += ' '
                    }
                    valueSpace += value[i]
                }
                return valueSpace
            }

            document.querySelector(element + ' .range-slider__value').innerHTML = 
            spaceThousend(data.from.toString()) + '₽ - ' + spaceThousend(data.to.toString()) + '₽'
        }
        
        $(this.sliderElement).ionRangeSlider({
            type: "double",
            min: 0,
            max: 15500,
            from: props.from || 5000,
            to: props.to    || 10000,
            grid: false,
            step: 100,
            hideFromTo: 'true',
            hideMinMax: 'true',
            onChange: function(data) {
                writeValue(data)
            },
            onStart: function(data) {
                writeValue(data)
            }
        })

    }

    update (props = {}) {
        const range = $(this.sliderElement).data("ionRangeSlider")
 
        props.from = props.from || range.options.min
        props.to = props.to || range.options.max
        range.update({
            from: props.from,
            to: props.to
        })
    }

    getValue () {
        const range = $(this.sliderElement).data("ionRangeSlider");
        return {
            from: range.options.from,
            to: range.options.to
        }
    }
}