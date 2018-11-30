describe('mutliple tests', function(){

    //global variable
    var firstEle = element(by.model('first'));
    var secondEle = element(by.model('second'));
    var gobutton = element(by.id('gobutton'));
    var result = element(by.className('ng-binding'));
    var history = element.all(by.repeater('result in memory'));
    // var result = element(by.xpath("//b[@class='result ng-binding']"));

    beforeEach(function(){
        browser.get('http://www.way2automation.com/angularjs-protractor/calc/');
        browser.manage().window().maximize();
    });

    //reusable function
    function add(a,b){
        firstEle.sendKeys(a);
        secondEle.sendKeys(b);
        gobutton.click();
    }

    //check his
    it('resable',function(){
        add(4,5);
        add(8,9);
        add(4,5);
        expect(history.count()).toEqual(3);
        add(45,56);
        expect(history.count()).toEqual(4);
    });
    
});