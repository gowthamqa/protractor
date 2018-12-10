
describe('Local Angular application', function() {

    beforeEach(function(){
        browser.get('http://localhost:3000/customers');

    });

    
    xit('test 1', function() {
        var EC = protractor.ExpectedConditions;
        element(by.css('a[routerlink=\'/customers/0/edit\']')).click();
        element(by.name('email')).sendKeys('admin@gmail.com');
        element(by.name('password')).sendKeys('password1');
        element(by.buttonText('Login')).click();
        var insertButton = element(by.buttonText('Insert'));
        //console.log(EC.elementToBeClickable(insertButton));
        element(by.name('firstName')).sendKeys('john');
        element(by.name('lastName')).sendKeys('Adams');
        element(by.name('address')).sendKeys('123 Ave Park St.');
        element(by.name('city')).sendKeys('California');
        element.all(by.tagName('option')).count().then(function(value){
            console.log("Cities available in dropdown : "+value);
        });
        //element(by.name('state')).$('[value=\'1: AK\']').click();
        element(by.cssContainingText('select[name=\'state\'] option', 'Arkansas')).click();
        browser.sleep(4459);
        //element(by.deepCss('button[class=\'btn btn-default\']')).click();
        //browser.actions().mouseMove(element(by.buttonText('Cancel'))).perform();
        browser.executeScript('window.scrollTo(0,10000);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });
        element(by.buttonText('Cancel')).click();
        browser.sleep(4459);
        element(by.css('div[class=\'modal-body\']')).getText().then(function(text){
            console.log(text);
        });
        element(by.css('div[class=\'modal-content\']')).element(by.buttonText('Cancel')).click();
        //element(by.buttonText('Leave')).click();
        browser.sleep(3456);
        /* EC.elementToBeClickable(element(by.buttonText('Insert'))).then(function(value){
            console.log(value);
        }); */
        //element(by.buttonText('Insert')).click();
        
    });

    it('get no of customers', function(){

        element.all(by.css('div[class=\'col-sm-6 col-md-4 col-lg-3\']')).count().then(function(value){

            console.log("count "+value);
        });

    });
        
    
});
    