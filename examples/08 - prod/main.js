import Calc from './calc';
import anna from '../public/anna.jpeg';
import elsa from '../public/elsa.jpeg';
import {addImage} from './images';

const calc = new Calc();

console.log('3 + 2 =', calc.add(3, 2));

addImage(elsa, document.getElementsByTagName('body')[0]);
addImage(anna, document.getElementsByTagName('body')[0]);
