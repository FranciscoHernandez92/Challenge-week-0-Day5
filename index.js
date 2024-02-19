//1.
import { pyramidMakerWithAsterisk } from "./module.js";
console.log(pyramidMakerWithAsterisk(5));
console.log(pyramidMakerWithAsterisk(20));
//2.
import { passwordCreate } from "./module.js";
console.log(passwordCreate(15));
console.log(passwordCreate(5));
//3.
import { userNames } from "./module.js";
console.log(userNames(['francisco', 'jose', 'carlos', 'cristobal', 'ines', 'heriberto', 'ana'], 4));
console.log(userNames(['francisco', 'jose', 'carlos', 'cristobal', 'ines', 'heriberto', 'ana'], 8))
//4.
//import { makeStadistics } from "./module.js";
//console.log(makeStadistics(5, 6, 8, 9, 9, 3 ,9, 4));
//console.log(makeStadistics(1, 1, 4, 5, 6, 2, 1, 2));
//5.
import { countWords } from "./module.js";
console.log(countWords('el perro ladra'));
console.log(countWords('me encanta el bootcamp de isdi coders'));
//6.
import { orderNames } from "./module.js";
console.log(orderNames(['bartolo', 'fran', 'carlos', 'dunia', 'ines', 'heriberto', 'ana']));
//7.
import { groupEvenAndOdd } from "./module.js";
console.log(groupEvenAndOdd([13]));
console.log(groupEvenAndOdd([30]));
//8.
import { transformWordToCamelCase } from "./module.js";
console.log(transformWordToCamelCase('el-armario-es-bonito'))
console.log(transformWordToCamelCase('voy-A-terminar-el-bootcamp'));;
console.log(transformWordToCamelCase('quiero-comer-sushi_los-viernes'));
console.log(transformWordToCamelCase(''));
//9.
import { transformCamelCaseInOtherCase } from "./module.js";
console.log(transformCamelCaseInOtherCase('estaBienElEjercicio'));
//10.
import { returnVowelsWithoutAccent } from "./module.js";
console.log(returnVowelsWithoutAccent('explícáme cómo hago yo los ejérciciós sin ún ordénador'));
//11.
import { returnCapitalLettersInLowerAndOtherWay } from "./module.js";
console.log(returnCapitalLettersInLowerAndOtherWay('EnvidiO A LA GentE QuE SabE DE ProgramacioN'));
