/**
 * Test cases for the sleep library
 *
 * @author Patrice Juergens <pj@validitylabs.org>
 */
import * as utils from '../src/index';
import should from 'should'; // eslint-disable-line

describe('Testing ES6 Modules', () => {
    it('should sleep', async function () {
        const start = new Date();
        await utils.sleep(300);
        const end = new Date();

        (end - start).should.aboveOrEqual(300);
    });

    it('should sleep using the ms package', async () => {
        const start = new Date();
        await utils.sleep('700ms');
        const end = new Date();

        (end - start).should.aboveOrEqual(700);
    });
});
