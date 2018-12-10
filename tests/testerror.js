var bankhome = require('../pages/BankHomepage.js');
var customer = require('../pages/Customerpage');


describe('Name of the group', function() {

    beforeEach(function(){
        browser.get('http://www.way2automation.com/angularjs-protractor/banking/#/login');


    });

    
    it('gwsg', function() {
        bankhome.customerLoginButton.click();
        customer.selectCustomer('Harry Potter').click();
    });
    
});
    