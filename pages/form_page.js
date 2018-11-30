var form_page = function(){

    this.name = element(by.name('name'));
    this.email = element(by.name('email'));
    this.password = element(by.id('exampleInputPassword1'));
    this.iceCreamCheckbox = element(by.css('input[type=\'checkbox\']'));
    this.selectGender = function(value){
       return element(by.cssContainingText('[id=\'exampleFormControlSelect1\'] option', value));
    }
    //element.all(by.name('inlineRadioOptions')).get();
    this.bDay = element(by.name('bday'));
    this.submitButton = element(by.buttonText('Submit'));

    this.getNameText = function(){
        return element(by.css('input[class*=\'ng-valid\']')).getAttribute('value');
    }
};

module.exports = new form_page();


