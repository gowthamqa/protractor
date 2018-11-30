describe('testing Non Angular Site',function(){
    beforeEach(function(){
        browser.waitForAngularEnabled(false);
        browser.get('https://www.facebook.com/');
    });

    it('validate login',function(){
        element(by.id('email')).sendKeys('');
        element(by.id('pass')).sendKeys('');
        element(by.css('input[type=\'submit\']')).click();

    });

    it('upload photo',function(){
        
    });



});