import { Selector } from 'testcafe';
import { ClientFunction } from 'testcafe';


fixture `Start Login test`
    .page `https://www.fxstreet.com/`;

const getPageUrl = ClientFunction(() => window.location.href.toString());
const prestitialContinue = Selector('.fxs_prestitial-continue');
const LoginButton = Selector('#login');
const EmailInputField = Selector('[id^=fxs_login_username_login_]');
const PassInputField = Selector('[id^=fxs_login_password_login_]');
test('Login test', async t => {

    await t
        .maximizeWindow()
        .expect(getPageUrl()).eql('https://www.fxstreet.com/', 'Home Page Not Loaded', { timeout: 5000 })
        .click(prestitialContinue)
        .expect(LoginButton.exists).ok('Login Button not found')
        .click(LoginButton)
        .expect(getPageUrl()).eql('https://www.fxstreet.com/account/login?uriToRedirect=https://www.fxstreet.com/', 'Login Page Not Loaded', { timeout: 5000 })
        .expect(EmailInputField.exists).ok('Email input field not found')
        .expect(PassInputField.exists).ok('Email input field not found')

});