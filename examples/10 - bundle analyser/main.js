import Calc from './calc';
import anna from '../public/anna.jpeg';
import elsa from '../public/elsa.jpeg';
import {addImage } from './image';
import lodash  from 'lodash'

console.log(lodash.fill(Array(10), '*'))

const calc = new Calc();
console.log('3 + 2 =', calc.add(3, 2));

addImage(elsa, document.getElementsByTagName('body')[0]);
addImage(anna, document.getElementsByTagName('body')[0]);
