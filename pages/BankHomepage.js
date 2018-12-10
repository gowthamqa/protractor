
var bankHomepage = function(){
    this.customerLoginButton = element(by.buttonText('Customer Login')); 
    this.managerLoginButton = element(by.buttonText('Bank Manager Login'));
}

module.exports = new bankHomepage();