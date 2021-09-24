import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
  if (typeof str !== 'string') {
    str = String(str);
}
if (options.addition !== undefined && typeof options.addition !== 'string') {
    options.addition = String(options.addition);
}
if (options.additionSeparator === undefined) {
    options.additionSeparator = '|';
}
if (options.separator === undefined) {
    options.separator = '+';
}
let smallArr;
if (options.addition !== undefined) {
    smallArr = [`${str}${options.addition}`];
} else {
    smallArr = [`${str}`];
}
if (options.additionRepeatTimes !== undefined && options.addition !== undefined) {
    for (let i = 1; i < options.additionRepeatTimes; i++) {
        smallArr.push(`${options.addition}`);
    }
}
let smallStr = smallArr.join(`${options.additionSeparator}`);
let bigStr = `${smallStr}`;
if (options.repeatTimes !== undefined) {
    for (let i = 1; i < options.repeatTimes; i++) {
        bigStr += `${options.separator}${smallStr}`;
    }
}
return bigStr;
}
