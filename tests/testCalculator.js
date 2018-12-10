
var using = require('jasmine-data-provider');
var d = require('../Resources/data.js');
var calc = require('../pages/calculator_page.js');

describe('testing calculator',function(){

    beforeEach(function(){
        browser.get('http://juliemr.github.io/protractor-demo/');

    });

    using(d.calcData, function(data, description){
        
        it('validate : '+description, function() {
            calc.firstValue.sendKeys(data.firstValue);
            calc.secondValue.sendKeys(data.secondValue);
            calc.operation(data.operation).click();
            calc.goButton.click();
            expect(calc.result()).toEqual(data.result);
            
        });
            
    });

    xit('test Addition',function(){
        calc.firstValue.sendKeys(10);
        calc.secondValue.sendKeys(20);
        calc.operation('+').click();
        calc.goButton.click();
        expect(calc.result()).toEqual('30');

    });

    it('test Division',function(){
        calc.firstValue.sendKeys(10);
        calc.secondValue.sendKeys(20);
        calc.operation('/').click();
        calc.goButton.click();
        expect(calc.result()).toEqual('0.55');

    });

    it('test MODULO',function(){
        calc.firstValue.sendKeys(10);
        calc.secondValue.sendKeys(20);
        calc.operation('%').click();
        calc.goButton.click();
        expect(calc.result()).toEqual('10');

    });

    it('test Multiplication',function(){
        calc.firstValue.sendKeys(10);
        calc.secondValue.sendKeys(20);
        calc.operation('*').click();
        calc.goButton.click();
        expect(calc.result()).toEqual('200');

    });

    it('test SUBTRACTION',function(){
        calc.firstValue.sendKeys(10);
        calc.secondValue.sendKeys(20);
        calc.operation('-').click();
        calc.goButton.click();
        expect(calc.result()).toEqual('-10');

    });

});