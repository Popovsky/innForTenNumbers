// const inn = prompt('Enter the cards number').split(' ').join('').split('').map(el => +el);

/**------------------------------------------------------------*/

// const inn = '7705432475'.split('').map(el => +el);
const inn = '500100732259'.split('').map(el => +el);

/**-------------------------------------------------------------*/

const factors10 = [2,4,10,3,5,9,4,6,8,0];
const factors11 = [7,2,4,10,3,5,9,4,6,8,0];
const factors12 = [3,7,2,4,10,3,5,9,4,6,8,0];
let sum = 0;
let sum2 = 0;
let res, res2;
const lastNum = inn[inn.length - 1];
const penultimateNum = inn[inn.length - 2];

switch (inn.length) {
    case 10:
        inn.forEach((el, index) => sum += el * factors10[index]);
        res = sum - Math.floor(sum / 11) * 11;
        res > 9 ?
            res / 10 === lastNum ? console.log(`${res / 10} = ${lastNum} inn is correct`) : console.log(`${res} != ${lastNum} inn is incorrect`) :
            res === lastNum ? console.log(`${res} = ${lastNum} inn is correct`) : console.log(`${res} != ${lastNum} inn is incorrect`);
        break;
    case 12:
        inn.forEach((el, index) => index !== inn.length - 1 ? sum2 += el * factors11[index] : null);
        res2 = sum2 - Math.floor(sum2 / 11) * 11;
        res2 > 9 ? res2 /= 10 : null;
        inn.forEach((el, index) => sum += el * factors12[index]);
        res = sum - Math.floor(sum / 11) * 11;
        res > 9 ? res /= 10 : null;
        res === lastNum && res2 === penultimateNum ?
            console.log(`${res} = ${lastNum} and ${res2} = ${penultimateNum} inn is correct`) :
            console.log(`${res} = ${lastNum} and ${res2} = ${penultimateNum} inn is incorrect`);
        break;
    default:
        console.log('default');
        break;
}
