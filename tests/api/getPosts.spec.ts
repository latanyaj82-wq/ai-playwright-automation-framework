import {test, expect} from '../fixture/testFixture.js';
import Logger from '../../src/utils/logger.js';

test ('Get Post By Id', async ({ request }) => {
    const response = await request.get(
        'https://jsonplaceholder.typicode.com/posts/1'
    );
    expect(response.status()).toBe(200);
    const body = await response.json();
    Logger.info('Response Body', body);
});
