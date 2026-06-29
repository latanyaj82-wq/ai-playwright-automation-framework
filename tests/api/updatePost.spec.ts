import {test, expect} from '../fixture/testFixture.js';
import Logger from '../../src/utils/logger.js';
import { updatePostData } from '../../src/utils/testData.js';

test ('Update Existing Post', async({request}) =>{
    const payload = updatePostData;

const response = await request.put(
    'https://jsonplaceholder.typicode.com/posts/1',
    {
        data: payload
    }
);
    expect(response.status()).toBe(200);

    const body = await response.json();
    Logger.info('Post Response', body);

    expect(body.id).toBe(payload.id);
    expect(body.title).toBe(payload.title);
    expect(body.body).toBe(payload.body);
    expect(body.userId).toBe(payload.userId);
})