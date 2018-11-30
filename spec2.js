describe('mutliple tests', function(){

    //global variable
    var firstEle = element(by.model('first'));
    var secondEle = element(by.model('second'));
    var gobutton = element(by.id('gobutton'));
    var result = element(by.className('ng-binding'));
    // var result = element(by.xpath("//b[@class='result ng-binding']"));

    beforeEach(function(){
        browser.get('http://www.way2automation.com/angularjs-protractor/calc/');
        browser.manage().window().maximize();
    });

    //test1
    it('validate Title', function(){
        var title = browser.getTitle();
        expect(title).toContain('Calculator');
        
    });


    //test2
    it('sum of six and nine', function(){
        firstEle.sendKeys(6);
        secondEle.sendKeys(9);
        //browser.driver.sleep(5000);
        gobutton.click();
        expect(result.getText()).toEqual('15');    
    });

    //test3
    it('Get the entered value',function(){
        firstEle.sendKeys(67);
        expect(firstEle.getAttribute('value')).toEqual('67');
    });

});