import {test, expect} from '../../../fixtures/testFixtures';

test('should authenticate and receive a token', async ({ authService }) => {
    const authRequest = {
        username: 'admin',
        password: 'password123'
    };

    const token = await authService.getToken(authRequest);
    expect(token).toBeTruthy();
});