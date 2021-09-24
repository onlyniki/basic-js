import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members npm
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(members) {
  let name = '';
  if (!Array.isArray(members)) {
    return false;
  } else {
    members = members.filter((item) => {
      if (typeof item === 'string') {
        return item;
      }
    });
    for (let i = 0; i < members.length; i++) {
      members[i] = members[i].trim().toUpperCase();
    }
    members.sort();
    for (let item of members) {
      name += item[0];
    }
  }
  return name;
}
