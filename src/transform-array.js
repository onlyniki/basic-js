import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  } 
  const newArr = [...arr];
  for (let ind = 0; ind < newArr.length; ind++) {
      switch (newArr[ind]) {
          case '--discard-next':
            if (newArr[ind+1]) {
                newArr.splice(ind + 1, 1);                                                                 
                // ind--;
            }
            break;
          case '--discard-prev':
              if (newArr[ind-1]) {
                  newArr.splice(ind-1, 1);
                //   ind--;
              } 
              break;
          case '--double-next':
              if (newArr[ind+1]) {
                  newArr.splice(ind+1, 0, newArr[ind+1]);
                  ind +=1;
              }  
              break;
          case '--double-prev':
              if (newArr[ind-1]) {
                  newArr.splice(ind - 1, 0, newArr[ind-1]);
                  ind++;
              } 
              break;

      }
  }
  return newArr.filter(
    e => !(e == '--discard-next' || e == '--discard-prev' || e == '--double-next' || e == '--double-prev')
  );
}
