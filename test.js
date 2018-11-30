describe('test',function(){

    it('Select dropdown boxes test',function(){
        browser.get('http://www.way2automation.com/angularjs-protractor/calc/');
        element(by.model('first')).sendKeys(45);
        var selEle = element(by.model('operator'));
        selEle.$('[value=\'MULTIPLICATION\']').click();
        //element(by.model('operator')).$('[value=\'SUBTRACTION\']').click();
        //selEle.$('[text=\'-\']').click();
        element(by.model('second')).sendKeys(5);
        element(by.id('gobutton')).click();
        browser.driver.sleep(3456);
        element(by.className('ng-binding')).getText().then(function(text){
            console.log('result is '+text);
        });
            
    });
});