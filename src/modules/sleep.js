/**
 * Sleep module with support for MS library
 *
 * @author Patrice Juergens <pj@validitylabs.org>
 */
import ms from 'ms';

/**
 * Exported sleep function
 *
 * @param {*} time Time in milliseconds or MS compatible string
 * @returns {promise} sleep Sleep promise
 */
export async function sleep(time) {
    time = isNaN(time) ? ms(time) : time;

    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve();
        }, time);
    });
}
