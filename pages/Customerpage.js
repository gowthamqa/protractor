
var customerPage = function(){
    this.selectCustomer = function(value){
        return element(by.cssContainingText('select[id=\'userSelect\'] option', value));
    }
    this.operation = function(value){
        return element(by.cssContainingText('select[class*=\'ng-valid\'] option', value));
        //element(by.model('operator')).$('[value = "MULTIPLICATION"]')
     }
    this.loginButton = element(by.buttonText('Login'));
    this.getCustomerName = element(by.css('span[class=\'fontBig ng-binding\']')).getText();
    this.getAccountNumber = element(by.css('div[class=\'center\']')).element(by.css('strong:nth-child(1)')).getText();
    this.getAccountBalance = element(by.css('div[class=\'center\']')).element(by.css('strong:nth-child(2)')).getText();
    this.getCurrency = element(by.css('div[class=\'center\']')).element(by.css('strong:nth-child(3)')).getText();
    this.depositButton = element(by.partialButtonText('Deposit'));
    this.withdrawButton = element(by.partialButtonText('Withdrawl'));
    this.transactionButton = element(by.partialButtonText('Transactions'));
    this.amount = element(by.model('amount'));
    this.submitButton = lement(by.css('button[type=\'submit\']'));
    this.getMessage = element(by.css('span[class=\'error ng-binding\']')).getText();
}

module.exports = new customerPage();