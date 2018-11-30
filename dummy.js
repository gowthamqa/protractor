describe('validate forom submission', function(){

    

    beforeEach(function(){
        browser.get('https://qaclickacademy.github.io/protocommerce/');
        browser.manage().window().maximize();
    });

    it('validate ', function(){
        element(by.linkText('Shop')).click();
        element(by.css('button[class=\'btn btn-info\']')).click();
        element(by.partialLinkText('Checkout')).click();
        element(by.partialButtonText('Checkout')).click();
        /* browser.actions().mouseMove(element(by.id('country'))).sendKeys('india').perform();
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
        browser.actions().sendKeys(protractor.Key.ENTER).perform(); */
        element(by.id('country')).sendKeys('india');
        //element(by.id('country')).sendKeys(protractor.Key.ENTER);
        //element(by.css('[class=\'suggestions\']')).click().then(function(){
          //  element(by.id('checkbox2')).click();
        //});
        browser.driver.sleep(1230);
        //element(by.id('checkbox2')).click();
        element(by.buttonText('Purchase')).click();
        
        //element(by.name('name')).sendKeys('05061991');
        //element(by.css('input[class=\'form-control ng-untouched ng-pristine ng-invalid\']')).sendKeys('ywiuefhiwuhf');
        //this.selectGender = function(value){
          //  element(by.cssContainingText('[id=\'exampleFormControlSelect1\'] option', value)).click();
       // }
       //element(by.cssContainingText('[id=\'exampleFormControlSelect1\'] option', 'Female')).click();
       //element(by.css('input[class*=\'ng-valid\']')).clear();
       //var nameresult = element(by.css('input[class*=\'ng-valid\']')).getAttribute('value');
       //nameresult.then(function(text){
          // console.log(text);
       //});
        //selectGender('');

    });

    afterEach(function(){
        browser.driver.sleep(1500);
    });
});