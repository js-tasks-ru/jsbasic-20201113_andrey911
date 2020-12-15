/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */
function checkSpam(str) {
  if ( str.indexOf('1') != -1 || str.indexOf('xxx') != -1) {
    return true;
    };
    return false;
}
