// const inn = prompt('Enter the cards number').split(' ').join('').split('').map(el => +el);

/**------------------------------------------------------------*/

const inn = '7705432475'.split('').map(el => +el);

/**-------------------------------------------------------------*/

const factors = [2,4,10,3,5,9,4,6,8,0];
let sum = 0;
inn.forEach((el, index) => sum += el * factors[index]);
let res = sum - Math.floor(sum / 11) * 11;
res === inn[inn.length - 1] ? console.log(`${res} = ${inn[inn.length - 1]} inn is correct`) : console.log(`${res} != ${inn[inn.length - 1]} inn is incorrect`);
