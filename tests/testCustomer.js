var bankhome = require('../pages/BankHomepage.js');
var customer = require('../pages/Customerpage.js');

describe('Testing customer features', function() {

    beforeEach(function(){
        browser.get('http://www.way2automation.com/angularjs-protractor/banking/#/login');

    });

    it('validate customer login and account deatails', function() {
        bankhome.customerLoginButton.click();
        customer.selectCustomer('Harry Potter').click();
        customer.loginButton.click();  
        customer.getCustomerName.then(function(text){
            console.log('customer logged in is :' +text);
        });
        expect(customer.getCustomerName).toEqual('Harry Potter');

        customer.getAccountNumber.then(function(text){
            console.log('Account Number is : ' +text);
        });
        expect(customer.getAccountNumber).toEqual('1004');
        customer.getAccountBalance.then(function(text){
            console.log('Available Balance is : ' +text);
        });
        customer.getCurrency.then(function(text){
            console.log('Currency is : ' +text);
        });
        
    });


    it('should be able to Deposite', function() {
        bankhome.customerLoginButton.click();
        customer.selectCustomer('Harry Potter').click();
        customer.loginButton.click();  
        customer.depositButton.click();  
        customer.amount.sendKeys(5000);
        customer.submitButton.click();  
        customer.getMessage.then(function(text){
            console.log(text);
        });
        expect(customer.getMessage).toEqual('Deposit Successful');

    });

    it('should be able to Withdraw', function() {
        bankhome.customerLoginButton.click();
        customer.selectCustomer('Harry Potter').click();
        customer.loginButton.click();  
        customer.withdrawButton.click();  
        customer.amount.sendKeys(5000);
        customer.submitButton.click();  
        customer.getMessage.then(function(text){
            console.log(text);
        });
        expect(customer.getMessage).toEqual('Transaction Successful')


    });

    it('should be able to get Transactions', function() {
        element(by.buttonText('Customer Login')).click();
        element(by.cssContainingText('select[id=\'userSelect\'] option', 'Harry Potter')).click();
        element(by.buttonText('Login')).click();
        element(by.partialButtonText('Transactions')).click();
        


    });
        
    
});
    