import Calc from './calc';
import anna from '../public/anna.jpeg';
import elsa from '../public/elsa.jpeg';
import {addImage as addGreenImage} from './image-green';
import {addImage as addRedImage} from './image-red';

const calc = new Calc();

console.log('3 + 2 =', calc.add(3, 2));

addRedImage(elsa, document.getElementsByTagName('body')[0]);
addGreenImage(anna, document.getElementsByTagName('body')[0]);
