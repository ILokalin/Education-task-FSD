// Doc's cod's
// https://github.com/igorescobar/jQuery-Mask-Plugin

import 'jquery-mask-plugin';

export class MaskedTextField {
    constructor(maskType)
    {
        $('input[name=' + maskType + ']').mask('00.00.0000');
    }
}