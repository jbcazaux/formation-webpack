import add from './add';
import(/* webpackChunkName: "lazy-sub" */ './sub').then(sub => {
  console.log('this is a substraction. 4 - 2 =', sub.default(4, 2));
});
console.log('this is an addition. 4 + 2 =', add(4, 2));

import(/* webpackPrefetch: true */ './multiply').then(() => console.log('ooooooo'))

document.getElementById('mult').onclick = () => {
    import('./multiply').then(m =>  console.log(m.default(4, 2)))
}
