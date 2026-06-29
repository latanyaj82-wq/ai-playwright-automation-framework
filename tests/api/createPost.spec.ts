import {test, expect} from '../fixture/testFixture.js';
import Logger from '../../src/utils/logger.js';
import { postData } from '../../src/utils/testData.js';    

test('Create New Post', async ({request}) =>{

    const payload = postData;


    const response = await request.post(
        'https://jsonplaceholder.typicode.com/posts',
        {
            data: payload
        }
    );

    expect(response.status()).toBe(201);

    const body = await response.json();

    Logger.info('Post Response', body);

    expect(body.title).toBe(payload.title);
    expect(body.body).toBe(payload.body);
    expect(body.userId).toBe(payload.userId);    
});