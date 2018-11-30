describe('Enter Name',function()
{

    beforeEach(function(){
        console.log('before each method');
    });

    afterEach(function(){
        console.log('After Each Method');
    });

    it('test value entered',function()
    {
        browser.get('https://angularjs.org/');
        browser.manage().window().maximize();
        element(by.model('yourName')).sendKeys('Gowtham');
        var expvalue = element(by.css('h1[class=\'ng-binding\']')).getText();
        expect(expvalue).toEqual('Hello Gowtham!');
        browser.driver.sleep(5000);

        console.log('Test Method');

        expvalue.then(function(text){
            console.log(text);
        });

        //console.log('result: '+expvalue);

        //element(by.xpath('/html/body/div[2]/div[3]/div[2]/div[2]/div/form/input[1]')).sendKeys('Gowtham');
        //element(by.model('todoList.todoText')).sendKeys('Reddy');
        //browser.driver.sleep(5000);
        //element(by.xpath('//input[@value=\'add\']')).click();


    });

});