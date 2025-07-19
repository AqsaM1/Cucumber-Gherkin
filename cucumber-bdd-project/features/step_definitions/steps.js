 
const { Given, When, Then } = require('@cucumber/cucumber');

Given('the user is on the login page', function () {
  console.log('Navigating to login page');
});

When('the user enters valid credentials', function () {
  console.log('Entering valid credentials');
});

Then('the user should see the dashboard', function () {
  console.log('User is redirected to dashboard');
});
