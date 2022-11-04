// ES6
import _ from 'lodash';
//ES5
// var path = require('lodash');

function component(){
    var element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;
}

document.body.appendChild(component());