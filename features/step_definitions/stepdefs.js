const assert = require('assert');
const { Given, When, Then } = require('cucumber');

// Include the used function
const check = require('../../demo/js/local_or_netlify.js');


// Local scenario
Given('the URL contains file or localhost', function () {
    this.localUrl = "http://localhost:8080"
});

When('the function determaining if its viewed locally', function () {
    this.localOutcome = check.isLocalOrNetlify(this.localUrl);
});

Then('it should conclude that the site is viewed locally', function () {
    assert.equal(this.localOutcome, 'local');
});


// Netlify scenario
Given('the URL contains Netlify', function () {
    this.netlifyUrl = "https://objective-tereshkova-b59c56.netlify.app"
});

When('the function determaining if its viewed on Netlify', function () {
    this.netlifyOutcome = check.isLocalOrNetlify(this.netlifyUrl);
});

Then('it should conclude that the site is viewed on Netlify', function () {
    assert.equal(this.netlifyOutcome, 'netlify');
});


// Gibberish scenario
Given('the URL contains gibberish', function () {
    this.gibberishUrl = "www.hurp.derp";
});

When('the function determaining if its viewed either on Netlify or local', function () {
    this.gibberishOutcome = check.isLocalOrNetlify(this.gibberishUrl);
});

Then('it should conclude that it\'s none of those, and result in an error', function () {
    assert.equal(this.gibberishOutcome, 'error');
});
