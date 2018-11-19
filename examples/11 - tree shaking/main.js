import { add } from './math';
// import {fill} from 'lodash-es'

// console.log(fill(Array(10), '*'))

console.log('4 + 2 = ', add(4, 2));

if (process.env.NODE_ENV !== 'production'){
  console.log('you should not see this in production');
}

if (1 + 1 === 3){
  console.log('you should not see this in the sources');
}
