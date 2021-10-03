// 1) () duz
// 2) )( sehv
// 3) ())(() sehv
// 4) (((())) sehv
let a = 0;
let str = prompt('Daxil edin: ');
let brackets = str.split('');

for (let i = 0; i < brackets.length; i++) {
  if (brackets[i] === '(') {
    a++;
  }
  if (brackets[i] === ')') {
    a--;
  }
  if (a === -1) {
    alert('Sehvdir');
    break;
  }
}
if (a > 0) {
  alert('Sehvdir');
} else if (a === 0) {
  alert('Duzdur');
}
