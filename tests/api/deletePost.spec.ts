import {test, expect} from '../fixture/testFixture.js';
import Logger from '../../src/utils/logger.js';

test ('Delete Existing Post', async ({request}) => {
const response = await request.delete(
    'https://jsonplaceholder.typicode.com/posts/999');

    expect(response.status()).toBe(200);

    const body = await response.text();

        expect(body).toBe('{}');

    Logger.info('Delete Response', body);


});