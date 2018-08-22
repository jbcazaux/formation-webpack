import add, {mult3} from './add';
import(/* webpackChunkName: "lazy-sub" */'./sub').then(sub => {
  console.log('this is a substraction. 4 - 2 =', sub.default(4, 2));
  console.log('this is a multiplication by 2. 4 x 2 =', sub.mult2(4));
});

(function () {
  console.log('this is an addition. 4 + 2 =', add(4, 2));
  console.log('this is a multiplication by 3. 4 x 3 =', mult3(4));
})();
