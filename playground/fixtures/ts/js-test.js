export const jsTest = 'jsTest'

export const addOne = x => parseFloat(x) + 1

export function add(...args) {
  return args.reduce((total, num) => total + num, 0)
}

/**
 * @param {number} one
 * @param {number} two
 * @returns {string}
 */
export function jsdoc(one, two) {
  return `${one + two}`
}
