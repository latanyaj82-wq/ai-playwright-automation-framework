import { test, expect } from '@playwright/test';
import { Logger } from '../../src/utils/loggers';

test ('Get Post By Id', async ({ request }) => {
    const response = await request.get(
        'https://jsonplaceholder.typicode.com/posts/1'
    );
    expect(response.status()).toBe(200);
    const body = await response.json();
    Logger.info('Response Body', body);
});
