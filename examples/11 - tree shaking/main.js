import { add } from './math';

console.log('4 + 2 = ', add(4, 2));

if (process.env.NODE_ENV !== 'production'){
  console.log('you should not see this');
}

if (1 + 1 === 3){
  console.log('you should not see this either');
}
