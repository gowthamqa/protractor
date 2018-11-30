
var calc = require('../pages/calculator_page.js');
describe('testing calculator',function(){

    beforeEach(function(){
        browser.get('http://juliemr.github.io/protractor-demo/');

    });

    it('test Addition',function(){
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
        expect(calc.result()).toEqual('0.5');

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