
describe('Testing customer features', function() {

    beforeEach(function(){
        browser.get('http://www.way2automation.com/angularjs-protractor/banking/#/login');

    });

    it('should login as customer', function() {
        element(by.buttonText('Customer Login')).click();
        element(by.cssContainingText('select[id=\'userSelect\'] option', 'Harry Potter')).click();
        element(by.buttonText('Login')).click();
        element(by.css('span[class=\'fontBig ng-binding\']')).getText().then(function(text){
            console.log('customer logged in is :' +text);
        });
        element(by.css('div[class=\'center\']')).element(by.css('strong:nth-child(1)')).getText().then(function(text){
            console.log('Account is : ' +text);
        });

        expect(element(by.css('div[class=\'center\']')).element(by.css('strong:nth-child(1)')).getText()).toEqual('1004');
        element(by.css('div[class=\'center\']')).element(by.css('strong:nth-child(2)')).getText().then(function(text){
            console.log('Available Balance is : ' +text);
        });element(by.css('div[class=\'center\']')).element(by.css('strong:nth-child(3)')).getText().then(function(text){
            console.log('Currency is : ' +text);
        });
        
    });


    it('should validate Deposite', function() {
        element(by.buttonText('Customer Login')).click();
        element(by.cssContainingText('select[id=\'userSelect\'] option', 'Harry Potter')).click();
        element(by.buttonText('Login')).click();
        element(by.partialButtonText('Deposit')).click();
        element(by.model('amount')).sendKeys(5000);
        element(by.css('button[type=\'submit\']')).click();
        element(by.css('span[class=\'error ng-binding\']')).getText().then(function(text){
            console.log(text);
        });
        expect(element(by.css('span[class=\'error ng-binding\']')).getText()).toEqual('Deposit Successful');

    });

    it('should validate Withdrawl', function() {
        element(by.buttonText('Customer Login')).click();
        element(by.cssContainingText('select[id=\'userSelect\'] option', 'Harry Potter')).click();
        element(by.buttonText('Login')).click();
        element(by.partialButtonText('Withdrawl')).click();
        element(by.model('amount')).sendKeys(5000);
        element(by.css('button[type=\'submit\']')).click();
        element(by.css('span[class=\'error ng-binding\']')).getText().then(function(text){
            console.log(text);
        });

        expect(element(by.css('span[class=\'error ng-binding\']')).getText()).toEqual('Transaction Successful')


    });

    it('should validate Transactions', function() {
        element(by.buttonText('Customer Login')).click();
        element(by.cssContainingText('select[id=\'userSelect\'] option', 'Harry Potter')).click();
        element(by.buttonText('Login')).click();
        element(by.partialButtonText('Transactions')).click();
        


    });
        
    
});
    