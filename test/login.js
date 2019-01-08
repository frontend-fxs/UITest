import { Selector } from 'testcafe';
import { ClientFunction } from 'testcafe';


fixture `Getting Started`
    .page `https://www.fxstreet.com/`;

const getPageUrl = ClientFunction(() => window.location.href.toString());

test('Login Button exist', async t => {
    await t
        .expect(Selector('#login')).exists;
});

test('Click Login Button', async t => {
    await t
        .click(Selector('#login'))
        .expect(getPageUrl()).eql('https://www.fxstreet.com/account/login?uriToRedirect=https://www.fxstreet.com/', 'Login Page Loaded', { timeout: 500 });
});





7