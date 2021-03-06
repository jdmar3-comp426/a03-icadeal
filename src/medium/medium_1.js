import {variance} from "./data/stats_helpers.js";

/**
 * Gets the sum of an array of numbers.
 * @param array
 * @returns {*}
 * see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 * prototype functions. Very useful
 */
export function getSum(array) {
    var count = 0
    for (var i = 0; i < array.length; i++) {
        count += array[i]
    }
    return count
}


/**
 * Calculates the median of an array of numbers.
 * @param {number[]} array
 * @returns {number|*}
 *
 * example:
 * let array = [3,2,5,6,2,7,4,2,7,5];
 * console.log(getMedian(array)); // 4.5
 */
export function getMedian(array) {
    array.sort(function(a, b) {return a - b})
    var midPoint = Math.floor(array.length / 2)
    if (array.length % 2 == 0) {
        return (array[midPoint - 1] + array[midPoint]) / 2
    } else {
        return array[midPoint]
    }
}

/**
 * Calculates statistics (see below) on an array of numbers.
 * Look at the stats_helper.js file. It does variance which is used to calculate std deviation.
 * @param {number[]} array
 * @returns {{min: *, median: *, max: *, variance: *, mean: *, length: *, sum: *, standard_deviation: *}}
 *
 * example:
 * getStatistics([3,2,4,5,5,5,2,6,7])
 * {
  length: 9,
  sum: 39,
  mean: 4.333333333333333,
  median: 5,
  min: 2,
  max: 7,
  variance: 2.6666666666666665,
  standard_deviation: 1.632993161855452
 }
 */
export function getStatistics(array) {
    var theSum = getSum(array)
    var theMedian = getMedian(array)
    var theMean = theSum / array.length
    var mini = Math.min(...array)
    var maxi = Math.max(...array)
    var theLength = array.length
    // calculate variance
    var theVariance = 0
    array.forEach(num => {
        theVariance = theVariance + ((num - theMean) ** 2)
    })
    theVariance /= array.length
    var theStdev = Math.sqrt(theVariance)

    var dictionary = {
        length: theLength,
        sum: theSum,
        mean: theMean,
        median: theMedian,
        min: mini,
        max: maxi,
        variance: theVariance,
        standard_deviation: theStdev
    }
    return dictionary
}

