import _ from 'lodash'
// import './style.css'
// import Icon from './icon.png'
import printMe from './print'
import './style.css'
import {
    cube
} from './math'

function component() {
    // var element = document.createElement('div');
    // Lodash, currently included via a script, is required for this line to work
    // var btn = document.createElement('button');
    // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    // btn.innerHTML = 'Click me and check the console.'
    // btn.onclick = printMe;
    // element.appendChild(btn)

    var element = document.createElement('pre')
    element.innerHTML = [
        'hello webpack', '5 cubed is equal to ' + cube(5)
    ].join('\n\n')
    return element;
}

document.body.appendChild(component())
// let element = component()
// document.body.appendChild(element);

if (module.hot) {
    module.hot.accept('./print.js', function () {
        console.log('Accepting the updated printMe module!');
        // printMe();
        document.body.removeChild(element)
        element = component()
        document.body.appendChild(element)
    })
}